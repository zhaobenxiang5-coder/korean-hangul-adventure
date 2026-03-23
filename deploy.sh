#!/bin/bash
# 🚀 韩语字母之旅 - 快速部署脚本
# 用途: 一键部署到GitHub Pages

set -e

echo "🎮 韩语字母之旅 - 部署脚本"
echo "================================"
echo ""

# 检查git是否配置
if ! git config user.email > /dev/null 2>&1; then
    echo "⚠️  请先配置Git："
    echo "   git config user.email 'your-email@example.com'"
    echo "   git config user.name 'Your Name'"
    exit 1
fi

# 检查是否在项目目录
if [ ! -f "index.html" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

echo "✅ 项目目录验证通过"
echo "📦 文件清单:"
ls -la *.html *.js *.css *.md 2>/dev/null | head -10

echo ""
echo "🔧 准备GitHub仓库"
echo "1. 请在GitHub创建仓库: korean-hangul-adventure"
echo "2. 设置为Public (GitHub Pages要求)"
echo "3. 不要初始化README (我们已有)"
echo ""
read -p "是否已经创建好GitHub仓库? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "请先创建仓库，然后重新运行此脚本"
    exit 0
fi

echo ""
echo "📤 添加远程仓库"
echo "请提供你的GitHub仓库URL (例如: https://github.com/用户名/korean-hangul-adventure.git)"
read -p "仓库URL: " repo_url

git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"

echo ""
echo "🔄 提交代码"
git add .
git status

echo ""
read -p "确认提交? (y/n): " commit_confirm
if [ "$commit_confirm" != "y" ]; then
    exit 0
fi

git commit -m "feat: MVP release v0.1 - Complete Level 1 with 5 vowels, drag-drop puzzle, TTS support"

echo ""
echo "🚀 推送到GitHub"
git branch -M main
git push -u origin main

echo ""
echo "✅ 部署完成！"
echo ""
echo "📝 下一步："
echo "1. 进入GitHub仓库 Settings → Pages"
echo "2. Source: 选择 GitHub Actions"
echo "3. 等待1-2分钟自动部署"
echo "4. 访问: https://你的用户名.github.io/korean-hangul-adventure/"
echo ""
echo "🎉 祝你韩语学习愉快！"
