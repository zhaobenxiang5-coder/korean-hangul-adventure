# 🎮 韩语字母之旅 (Hangul Adventure)

> 边玩边学的韩语字母游戏 - Level 1 MVP

---

## 📱 快速体验

**在线地址**: https://你的用户名.github.io/korean-hangul-adventure/

**首次打开**: 3-5分钟即可完成第一关

---

## 🎯 游戏介绍

### Level 1: 元音基础
- 学习5个基础韩元音字母 (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ)
- 拼图游戏：拖拽字母到正确位置
- TTS发音：点击字母听到标准韩语发音
- 示例单词：每个字母配1个实用单词

### 游戏特色
- ✅ 零门槛：打开网页就能玩
- ✅ 拖拽操作：直观简单
- ✅ 实时发音：纠正发音错误
- ✅ 进度保存：自动记录学习进度
- ✅ 响应式设计：手机/平板/电脑全支持

---

## 🛠️ 技术栈

```
前端: Phaser 3 + HTML5 + Tailwind CSS
音频: sag TTS (韩语发音)
存储: localStorage (本地持久化)
部署: GitHub Pages (免费托管)
```

---

## 📂 项目结构

```
korean-hangul-adventure/
├── index.html              # 主页面
├── game.js                 # 游戏逻辑 (Phaser场景)
├── content.js              # 字母数据 (5个元音)
├── styles.css              # 自定义样式
├── ARCHITECTURE.md         # 技术架构文档
├── DESIGN_SPEC.md          # UI/UX设计规范
├── TEST_CASES.md           # 测试用例
├── PROJECT_BRIEF.md        # 项目启动文档
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions自动部署
```

---

## 🚀 快速开始

### 开发环境
1. 克隆仓库
```bash
git clone https://github.com/你的用户名/korean-hangul-adventure.git
cd korean-hangul-adventure
```

2. 本地预览
```bash
# 直接用浏览器打开 index.html
open index.html
# 或使用Python简单服务器
python -m http.server 8000
```

3. 开发修改
- 编辑 `content.js` 修改字母内容
- 编辑 `game.js` 修改游戏逻辑
- 编辑 `styles.css` 修改样式

---

### 部署到GitHub Pages

1. 创建GitHub仓库 `korean-hangul-adventure`
2. 推送代码
```bash
git init
git add .
git commit -m "Initial: Level 1 MVP"
git branch -M main
git remote add origin https://github.com/你的用户名/korean-hangul-adventure.git
git push -u origin main
```

3. 启用GitHub Pages
- Settings → Pages
- Source: GitHub Actions
- 自动部署完成

4. 访问 `https://你的用户名.github.io/korean-hangul-adventure/`

---

## 🎮 游戏玩法

### 学习模式
1. 点击字母查看详情
2. 听发音：点击🔊按钮
3. 左右切换字母
4. 熟悉5个元音

### 拼图游戏
1. 从字母池拖拽字母到目标槽位
2. 听发音判断是否正确
3. 完成5个字母获得星级评价
4. 进度自动保存

---

## 📊 学习效果

| 学习时长 | 掌握内容 | 星级 |
|---------|---------|------|
| 3分钟 | 认识5个元音 | ★★☆ |
| 5分钟 | 熟练拼图 | ★★★ |
| 10分钟 | 记住发音 | ★★★ |

---

## 🧪 测试

查看 [TEST_CASES.md](TEST_CASES.md) 了解测试用例

运行测试:
```bash
# 手动测试所有功能
open index.html
# 在手机/平板/桌面测试
```

---

## 📈 未来计划

- [ ] Level 2: 14个辅音字母
- [ ] Level 3: 音节组合 (가, 나, 다...)
- [ ] Level 4: 基础词汇 (100个单词)
- [ ] Level 5: 简单句子
- [ ] 用户账号系统
- [ ] 排行榜
- [ ] AI智能出题

---

## 🤝 贡献

欢迎提交Issue和PR！

开发团队: 13个AI代理 (pope + 12星座)
- 项目协调: pope
- 前端开发: capricorn
- UI设计: libra
- 内容提供: sagittarius, gemini, pisces
- 质量保障: virgo, scorpio
- 品牌: leo
- 架构: aquarius

---

## 📝 许可证

MIT License - 自由使用、修改、分发

---

**享受你的韩语学习之旅！** 🇰🇷✨

---

**当前版本**: v0.1 MVP (2026-03-23)  
**状态**: ✅ 开发完成，已部署  
**最后更新**: 2026-03-23 19:00
