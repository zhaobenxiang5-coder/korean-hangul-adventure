
constfs=require('fs');
const{minify}=require('minify');

asyncfunctioncompressFiles(){
constfiles=[
'index.html',
'game.js',
'content.js',
'styles.css',
'mobile.css',
'sag-integration.js',
'progress-handler.js',
'test-runner.js'
];

for(constfileoffiles){
if(fs.existsSync(file)){
letcontent=fs.readFileSync(file,'utf8');

if(file.endsWith('.js')){
content=content.replace(/\/\*[\s\S]*?\*\
.replace(/\/\/.*$/gm,'')
.replace(/\s+/g,'')
.replace(/\s?([{}:;,=+\-*/!&|<>?])\s?/g,'$1');
}elseif(file.endsWith('.css')){
content=content.replace(/\/\*[\s\S]*?\*\
.replace(/\s+/g,'')
.replace(/\s?([{}:;,>+~])\s?/g,'$1');
}elseif(file.endsWith('.html')){
content=content.replace(/<!--[\s\S]*?-->/g,'')
.replace(/\s+/g,'');
}

fs.writeFileSync(`compressed/${file}`,content);
console.log(`✅压缩:${file}(${(content.length/1024).toFixed(1)}KB)`);
}
}
}

compressFiles().then(()=>console.log('✅压缩完成'));
