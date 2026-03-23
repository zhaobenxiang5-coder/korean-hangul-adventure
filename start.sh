#!/bin/bash
# 韩语字母之旅 - 本地快速启动脚本

echo "🎮 韩语字母之旅 - Level 1 MVP"
echo "================================="
echo ""

# 进入项目目录
cd "$(dirname "$0")"

# 检查文件
if [ ! -f "offline.html" ]; then
    echo "❌ 错误: offline.html 不存在"
    exit 1
fi

echo "✅ 离线版文件就绪"
echo ""

# 启动简单HTTP服务器（Python）
echo "🚀 启动本地服务器..."
echo ""
echo "访问地址:"
echo "  主版本: http://localhost:8000/"
echo "  离线版: http://localhost:8000/offline.html"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

# 使用Python启动（优先python3，否则python）
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ 未找到Python，请手动用其他HTTP服务器打开 offline.html"
    open offline.html 2>/dev/null || echo "请直接双击 offline.html 文件"
fi
