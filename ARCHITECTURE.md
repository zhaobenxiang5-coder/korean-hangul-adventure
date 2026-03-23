# 🏗️ 韩语字母之旅 - 技术架构设计

## 系统概述
单页面HTML游戏，Phaser 3引擎，无后端依赖，部署到GitHub Pages

---

## 📐 架构图

```
用户浏览器
    ↓
index.html (单文件应用)
    ├── Phaser 3 CDN
    ├── Tailwind CSS CDN
    ├── game.js (游戏逻辑)
    └── styles.css (自定义样式)
        ↓
    localStorage (进度存储)
        ↓
    sag TTS API (发音)
```

---

## 🛠️ 技术栈

### 前端框架
- **Phaser 3.60+** - 游戏引擎 (2D)
- **Tailwind CSS 3.x** - 快速样式
- **纯JavaScript ES6+** - 无构建工具

### 外部服务
- **sag TTS** - 韩语文本转语音
- **GitHub Pages** - 静态托管
- **GitHub Actions** - 自动部署

---

## 📁 文件结构

```
korean-hangul-adventure/
├── index.html          # 主HTML（包含所有CDN引用）
├── game.js            # Phaser游戏场景配置
├── styles.css         # 自定义CSS（动画、响应式）
├── content.js         # 游戏内容数据（字母、发音、示例）
├── analytics.js       # 数据追踪（可选）
└── README.md          # 说明文档
```

---

## 🎮 游戏设计

### 核心场景
1. **BootScene** - 加载资源，初始化
2. **MenuScene** - 主菜单（开始、设置）
3. **LearnScene** - 学习模式（字母展示+发音）
4. **GameScene** - 拼图游戏（拖拽配对）
5. **CompleteScene** - 完成结算（徽章、奖励）

### 游戏实体

#### 字母对象
```javascript
{
  id: "a",
  char: "ㅏ",
  pronunciation: "a",
  example: "아기 (宝宝)",
  color: 0xFF6B6B,  // 颜色编码
  position: { x: 100, y: 200 }
}
```

#### 游戏状态
```javascript
{
  level: 1,
  completedLetters: [],  // 已完成的字母
  score: 0,
  streak: 0,  // 连续正确
  settings: {
    soundEnabled: true,
    fontSize: 24
  }
}
```

---

## 🎨 UI设计规范 (来自libra)

### 配色方案
- 主色: `#FF6B6B` ( Coral Red )
- 辅色: `#4ECDC4` ( Turquoise )
- 背景: `#F7F7F7` ( Light Gray )
- 文字: `#333333` ( Dark Gray )
- 高亮: `#FFE66D` ( Sunny Yellow )

### 字体
- 韩文字体: "Noto Sans KR", sans-serif
- 英文字体: "Inter", sans-serif
- 游戏字体: "Barlow", "-rounded"

### 响应式断点
- 手机: < 768px (竖屏为主)
- 平板: 768px - 1024px
- 桌面: > 1024px

---

## 🔌 API集成

### sag TTS技能
```javascript
// 调用sag生成韩语发音
const pronunciation = await sag({
  text: "ㅏ",
  language: "ko-KR",
  voice: "female"
});
// 返回音频URL或base64
```

---

## 💾 数据存储

### localStorage结构
```javascript
{
  "hangul-adventure-progress": {
    version: "0.1",
    lastPlayed: "2026-03-23T15:30:00Z",
    levels: {
      1: { completed: true, stars: 3, bestTime: 120 }
    },
    settings: { soundEnabled: true }
  }
}
```

---

## 🚀 部署流程

### 1. 代码提交到GitHub
```bash
git add .
git commit -m "Feat: MVP initial"
git push origin main
```

### 2. GitHub Actions自动部署
- 触发: push到main分支
- 步骤:
  1. Checkout代码
  2. 安装依赖（无，纯静态）
  3. 构建（无，直接部署）
  4. 部署到GitHub Pages

### 3. 访问地址
```
https://你的用户名.github.io/korean-hangul-adventure/
```

---

## 🧪 测试策略

### 手动测试点
- [ ] 拖拽字母到目标区域
- [ ] TTS发音播放
- [ ] 进度保存与恢复
- [ ] 手机触摸操作
- [ ] 不同浏览器兼容

### 自动化测试（可选）
- Playwright脚本模拟拖拽
- 截图对比测试

---

## ⚠️ 已知限制

1. **无后端**: 所有数据localStorage，换设备丢失
2. **无用户系统**: 单玩家
3. **内容有限**: 仅5个元音（后续扩展）
4. **TTS依赖**: 需要网络连接才能发音
5. **无A/B测试**: 单一版本

---

## 📈 未来扩展 (Level 2+)

- [ ] 辅音字母 (14个)
- [ ] 音节组合 (가, 나, 다...)
- [ ] 更多游戏类型 (连连看、打字)
- [ ] 用户账号系统
- [ ] 排行榜
- [ ] 成就系统
- [ ] AI生成题目

---

## 🔗 参考资源

- Phaser 3 文档: https://phaser.io/phaser3
- Tailwind CSS: https://tailwindcss.com/
- sag TTS技能: OpenClaw技能库
- 韩语发音表: https://korean.go.kr/

---

**架构设计完成时间**: 2026-03-23 15:35  
**负责人**: aquarius  
**状态**: ✅ 已就绪，等待开发
