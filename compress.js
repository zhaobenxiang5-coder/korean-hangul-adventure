// 文件压缩工具
const fs = require('fs');
const { minify } = require('minify');

async function compressFiles() {
  const files = [
    'index.html',
    'game.js',
    'content.js',
    'styles.css',
    'mobile.css',
    'sag-integration.js',
    'progress-handler.js',
    'test-runner.js'
  ];
  
  for (const file of files) {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      // 简单压缩：移除注释、多余空格
      if (file.endsWith('.js')) {
        content = content.replace(/\/\*[\s\S]*?\*\//g, '') // 块注释
                        .replace(/\/\/.*$/gm, '') // 行注释
                        .replace(/\s+/g, ' ') // 多空格变单空格
                        .replace(/\s?([{}:;,=+\-*/!&|<>?])\s?/g, '$1'); // 运算符周围空格
      } else if (file.endsWith('.css')) {
        content = content.replace(/\/\*[\s\S]*?\*\//g, '')
                        .replace(/\s+/g, ' ')
                        .replace(/\s?([{}:;,>+~])\s?/g, '$1');
      } else if (file.endsWith('.html')) {
        content = content.replace(/<!--[\s\S]*?-->/g, '')
                        .replace(/\s+/g, ' ');
      }
      
      fs.writeFileSync(`compressed/${file}`, content);
      console.log(`✅ 压缩: ${file} (${(content.length/1024).toFixed(1)}KB)`);
    }
  }
}

compressFiles().then(() => console.log('✅ 压缩完成'));
