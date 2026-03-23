


constHANGUL_DATA=[
{
id:'a',
char:'ㅏ',
pronunciation:'a',
example:'아기',
meaning:'宝宝',
color:'#FF6B6B',
description:'嘴巴张大，类似中文"啊"'
},
{
id:'eo',
char:'ㅓ',
pronunciation:'eo',
example:'어머니',
meaning:'妈妈',
color:'#4ECDC4',
description:'嘴微张，类似中文"额"'
},
{
id:'o',
char:'ㅗ',
pronunciation:'o',
example:'오이',
meaning:'黄瓜',
color:'#FFE66D',
description:'嘴巴圓，舌頭後部抬起'
},
{
id:'u',
char:'ㅜ',
pronunciation:'u',
example:'우유',
meaning:'牛奶',
color:'#95E1D3',
description:'嘴小圓，類似中文"嗚"'
},
{
id:'eu',
char:'ㅡ',
pronunciation:'eu',
example:'은행',
meaning:'银行',
color:'#F38181',
description:'嘴扁平，舌頭後部抬起'
}
];


if(typeofwindow!=='undefined'){
window.HANGUL_DATA=HANGUL_DATA;
}

console.log(`📚加载了${HANGUL_DATA.length}个字母数据`);
