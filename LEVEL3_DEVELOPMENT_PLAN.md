# 🚀 Level 3 开发计划 - 韵尾与语法进阶

**启动日期**: 2026-03-24 10:15  
**负责人**: 小星星 ⭐ (main agent)  
**状态**: 🟢 **Phase 1 启动中**

---

## 📋 背景

在 Level 2 (40+ 字母 + 8场景) 完成并经过 12 星座联合修复后，现启动 Level 3 开发。基于 aquarius 的产品创新方案，Level 3 将引入：

- ✅ 韵尾系统 (받침) - 29种韵尾学习
- ✅ 句子拼写与语法 - 助词、时态、敬语
- ✅ 读写训练 - 短文、听写、翻译
- ✅ AI 集成 - 对话 NPC、错误诊所

---

## 🏗️ 当前架构状态

### 已完成的准备工作

| 任务 | 状态 | 完成时间 |
|------|------|----------|
| **数据模块** | ✅ | 10:10 |
| - level3-data.js 创建 | ✅ | 包含 finals(29), complexSyllables(50+), words(30), grammarPoints(2) |
| **主文件集成** | ✅ | 10:12 |
| - 引入 level3-data.js | ✅ | 已在 head 中 |
| - 扩展 GameState | ✅ | 添加 currentFinalIndex, completedFinals |
| - MenuScene 添加按钮 | ✅ | "🌟 Level 3 韵尾挑战" |
| - FinalScene 创建 | ✅ | 韵尾学习原型（列表+详情） |
| - initData 扩展 | ✅ | 支持 lvl=3，映射到 complexSyllables |
| - 场景配置更新 | ✅ | FinalScene 加入 GAME_CONFIG.scene |

### 技术栈

- **引擎**: Phaser 3.60 (unchanged)
- **数据**: KOREAN_LEVEL3 (独立模块)
- **状态管理**: GameState (已扩展)
- **内存管理**: BaseScene (from Level 2) ✅
- **错误处理**: 全局捕获 (from Level 2) ✅
- **UI 风格**: 可爱趣味 (from gemini) ✅

---

## 🎯 Phase 1: 韵尾系统 MVP (预计 1 周)

### 目标
完成韵尾学习模块的核心功能，用户可以：
- 浏览全部 29 种韵尾
- 查看每个韵尾的发音、名称、例词
- 播放 TTS 发音
- 标记已学习的韵尾
- 完成韵尾拼图挑战

### 功能清单

#### 1.1 FinalScene - 韵尾列表学习 ✅ (已完成 80%)
- [x] 显示韵尾列表 (scrollable grid)
- [x] 大字展示 + 发音 + 名称
- [x] TTS 播放按钮
- [x] 导航（上一个/下一个）
- [ ] 进度追踪（已学/未学标记）
- [ ] 韵尾详情弹窗（点击查看详情）
- [ ] 搜索/筛选功能

#### 1.2 FinalChallengeScene - 韵尾拼图挑战 (待开发)
- [ ] 随机显示音节（带韵尾）
- [ ] 拆分为辅音+元音+韵尾三部分
- [ ] 拖拽拼合正确音节
- [ ] 难度递增（常用韵尾 → 复合韵尾）
- [ ] 完成统计（准确率、用时）

#### 1.3 韵尾动画效果
- [ ] 韵尾发音时的嘴型动画（可选，高级）
- [ ] 拼合正确时的粒子特效
- [ ] 错误时的震动反馈

---

## 📅 开发时间线

### Week 1 (2026-03-24 ~ 03-30): Phase 1 韵尾系统
- **Day 1 (Today)**: FinalScene 原型 + 列表浏览 ✅
- **Day 2-3**: FinalChallengeScene 拼图挑战
- **Day 4**: 进度追踪 + 完成状态保存
- **Day 5**: 测试 + 调试
- **Day 6-7**: 文档编写 + 准备演示

### Week 2-4: Phase 2 句子与语法
- 词序重组游戏
- 助词选择器（은/는/이/가/을/를）
- 时态填空（아/어/했/할）
- 20个语法点卡片（前5个）

### Week 5-8: Phase 3 读写与 AI
- 短文阅读理解（5篇）
- 听写 Dictation 游戏
- AI 对话 NPC（需外部 API）
- 错误博物馆

---

## 🎨 UI/UX 设计（保持一致性）

### 配色延续（Level 2 风格）
- 主背景: #F7F7F7
- 主要按钮: #4ECDC4 (青色)
- 强调按钮: #FF6B6B (红色)
- 成功色: #10B981 (绿色)
- Level 3 特色: #8B5CF6 (紫色，表示进阶)

### 文案风格（可爱趣味）
- 标题: "🌟 韵尾大挑战"
- 按钮: "🎧 听发音", "▶️ 开始挑战", "📊 查看进度"
- 提示: "💡 小贴士：韵尾就是韩语音节的结尾辅音"

---

## 🔧 技术决策

### 1. 数据加载策略
```javascript
// Level 3 数据独立文件，按需加载
// 在 MenuScene 点击 Level 3 时动态 load level3-data.js
// 避免初始包体积过大
```

### 2. 状态持久化
```javascript
// 使用 localStorage，与 Level 2 相同
{
  level3_progress: {
    currentFinalIndex: 5,
    completedFinals: [0,1,2,3,4],
    challengeStats: { attempts: 10, correct: 8 }
  }
}
```

### 3. 与 Level 2 的兼容性
- GameState.level = 3 标识当前在 Level 3
- initData(3) 加载复杂音节数据
- 共享 BaseScene、错误处理、内存管理
- 不破坏 Level 1/2 的现有功能

---

## 📊 验收标准

### MVP 完成标志
- ✅ 用户可以完整浏览 29 个韵尾
- ✅ 每个韵尾可播放 TTS 发音
- ✅ 完成首个韵尾拼图挑战（5个韵尾）
- ✅ 进度保存到 localStorage
- ✅ 无内存泄漏（shutdown 正常）
- ✅ 错误处理到位（边界检查）

### 质量指标
- **性能**: FPS ≥ 55, 内存 < 100MB
- **可用性**: 移动端触摸区域 ≥ 120px
- **稳定性**: 无崩溃，异常有提示
- **代码质量**: 遵循 Level 2 架构规范

---

## 🐛 已知风险与 mitigation

| 风险 | 影响 | 应对措施 |
|------|------|----------|
| 复合韵尾数量多（29个），UI可能冗长 | 用户体验差 | 使用分页/分类筛选 |
| TTS 对韵尾发音支持可能不足 | 学习效果打折扣 | 提供罗马音对照 + 音频示例 |
| 拼图难度难平衡 | 太易或太难 | 设计 3 个难度等级（基础/进阶/专家） |
| 代码复杂度增加 | 维护成本高 | 严格遵循 BaseScene 模式，模块化 |

---

## 📝 下一步行动

### 立即执行
1. ✅ FinalScene 原型完成（列表浏览）
2. ⏳ 优化 FinalScene UI 布局（添加网格列表）
3. ⏳ 实现进度追踪（localStorage）
4. ⏳ 开发 FinalChallengeScene 拼图挑战

### 依赖项
- 无外部 API 依赖（纯前端）
- 等待 Level 3 词汇数据补充（当前 30 个词足够 MVP）

---

## 🎉 里程碑

- **M1**: FinalScene 可完整浏览韵尾 (预计 03-25)
- **M2**: FinalChallengeScene 拼图可玩 (预计 03-27)
- **M3**: Phase 1 验收通过，准备用户测试 (预计 03-30)

---

**开发状态**: 🟢 **Phase 1 进行中**  
**当前进度**: 30% (FinalScene 基础框架完成)  
**预计 MVP 交付**: 2026-03-30

---
**主控**: 小星星 ⭐  
**参考资料**: aquarius Level 3 方案, libra 视觉优化, virgo 质量规范  
**工作目录**: `/Users/Zhuanz/.openclaw/workspace/korean-hangul-adventure/`
