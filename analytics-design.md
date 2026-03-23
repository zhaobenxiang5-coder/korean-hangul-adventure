# 📊 用户行为分析埋点设计

**任务**: 设计数据追踪方案，了解用户学习行为  
**负责人**: scorpio  
**完成时间**: 18:10  

---

## 🎯 **分析目标**

1. ✅ **学习参与度**: 用户是否完成Level 1？
2. ✅ **困难点识别**: 哪个字母/游戏环节错误最多？
3. ✅ **学习效率**: 平均完成时间、尝试次数
4. ✅ **功能使用**: TTS使用频率、回退按钮使用
5. ✅ **流失分析**: 用户在哪个场景退出？

---

## 📝 **埋点事件列表**

### **事件1: game_start**
**触发**: 用户点击"开始学习"按钮
**属性**:
```javascript
{
  event: 'game_start',
  timestamp: '2026-03-23T10:30:00Z',
  session_id: 'abc123',
  level: 1,
  entry_point: 'menu' // menu 或 continue (继续游戏)
}
```

### **事件2: learn_scene_view**
**触发**: 进入学习模式（LearnScene）
**属性**:
```javascript
{
  event: 'learn_scene_view',
  letter_index: 0, // 当前第几个字母 (0-4)
  total_letters: 5,
  time_spent_in_learn: 0 // 累计学习时长(秒)
}
```

### **事件3: tts_play**
**触发**: 播放TTS发音
**属性**:
```javascript
{
  event: 'tts_play',
  letter: 'ㅏ',
  pronunciation: 'a',
  source: 'learn_scene' | 'game_scene',
  timestamp: '...'
}
```

### **事件4: letter_puzzle_attempt**
**触发**: 用户拖拽一个字母到槽位（松开时）
**属性**:
```javascript
{
  event: 'letter_puzzle_attempt',
  letter_id: 'a',
  slot_index: 0,
  is_correct: true | false,
  time_to_place: 2.5 // 从字母出现在池到放置的时间(秒)
}
```

### **事件5: check_answer**
**触发**: 点击"检查答案"按钮
**属性**:
```javascript
{
  event: 'check_answer',
  correct_count: 3,
  total_count: 5,
  accuracy: 0.6, // 正确率
  attempts: 1 // 第几次尝试
}
```

### **事件6: level_complete**
**触发**: 完成Level 1（进入CompleteScene）
**属性**:
```javascript
{
  event: 'level_complete',
  level: 1,
  final_score: 150,
  stars: 3, // 1,2,3
  total_time: 185, // 总耗时(秒)
  total_attempts: 2, // 检查答案次数
  tts_plays: 12 // TTS使用次数
}
```

### **事件7: session_end**
**触发**: 用户关闭页面或离开
**属性**:
```javascript
{
  event: 'session_end',
  reason: 'completed' | 'abandoned' | 'technical_issue',
  session_duration: 300 // 会话时长(秒)
}
```

---

## 🏗️ **技术实现方案**

### **方案A: localStorage本地记录**（MVP方案）
**优点**: 零配置，立即生效  
**缺点**: 无法跨设备，数据不持久

**实现**:
```javascript
// 在StorageManager中已有基础，需要扩展
class Analytics {
  static log(event, properties = {}) {
    const session = this.getSession();
    const data = {
      event,
      properties,
      session_id: session.id,
      timestamp: new Date().toISOString()
    };
    
    // 存储到localStorage
    const logs = JSON.parse(localStorage.getItem('game_analytics') || '[]');
    logs.push(data);
    localStorage.setItem('game_analytics', JSON.stringify(logs));
  }
}
```

**后期导出**: 用户可导出JSON文件发送给我们

---

### **方案B: Google Analytics 4**（专业方案）
**优点**: 免费、成熟、跨设备  
**缺点**: 需要Google账号，配置稍复杂

**实施**:
1. 创建GA4测量ID
2. 在index.html添加gtag脚本
3. 使用`gtag('event', ...)`发送事件

**成本**: 免费

---

### **方案C: 自建后端**（商业方案）
**优点**: 完全控制数据，可扩展  
**缺点**: 需要服务器，成本

**架构**:
```
游戏 → POST /api/analytics → Node.js服务器 → PostgreSQL
```

---

## 🔔 **推荐方案（Level 1）**

**当前阶段**: 使用 **方案A (localStorage)**  
**理由**:
- ✅ 零成本，零配置
- ✅ 满足基本分析需求
- ✅ 用户无隐私担忧
- ✅ 可导出数据用于优化

**升级时机**:
- Level 2用户 > 100人 → 升级到GA4
- Level 3商业化 → 自建后端

---

## 📈 **关键指标（KPI）**

| 指标 | 定义 | 目标值（Level 1） |
|------|------|-------------------|
| 完成率 | 完成Level 1的用户 / 总访问 | > 60% |
| 平均耗时 | 从开始到完成的时间 | < 10分钟 |
| TTS使用率 | 使用TTS的用户 / 总用户 | > 80% |
| 平均错误率 | letter_puzzle_attempt错误占比 | < 40% |
| 重玩率 | 完成后再玩一次的用户 | > 30% |
| 移动占比 | 移动端访问比例 | > 50% |

---

## 🎯 **决策支持**

### **如果完成率 < 40%**:
- 检查难度是否过高
- 增加更多引导
- 简化拼图（减少字母数量）

### **如果平均耗时 > 15分钟**:
- 优化加载速度（压缩资源）
- 减少等待时间
- 提供跳过选项

### **如果TTS使用率 < 50%**:
- 按钮更醒目
- 自动播放（可选）
- 增加提示"听发音有奇效"

---

## 📋 **实施检查清单**

- [ ] 在game.js中添加Analytics.log()调用
- [ ] 在关键事件触发处添加埋点
- [ ] 在StorageManager中创建analytics存储
- [ ] 添加导出数据功能（可选）
- [ ] 测试数据收集是否正确
- [ ] 准备数据查看工具（简单HTML页面）

---

## 🔍 **数据查看工具（快速方案）**

创建 `analytics.html`，用户可以：
1. 打开页面
2. 上传导出的JSON
3. 查看图表（使用Chart.js）

**优先级**: P2（可选，Level 2再做）

---

**设计完成**: scorpio  
**时间**: 2026-03-23 18:10  
**状态**: 方案已定，待实施
