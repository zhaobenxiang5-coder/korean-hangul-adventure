


constProgressHandler={
STORAGE_KEY:'hangul-adventure-progress',

/**
*保存进度
*@param{Object}data-进度数据
*@returns{boolean}
*/
save(data){
try{
constprogress={
version:'0.1',
lastUpdated:newDate().toISOString(),
...data
};
localStorage.setItem(this.STORAGE_KEY,JSON.stringify(progress));
console.log('[Progress]保存成功:',progress);
returntrue;
}catch(error){
console.error('[Progress]保存失败:',error);
returnfalse;
}
},

/**
*加载进度
*@returns{Object|null}
*/
load(){
try{
constdata=localStorage.getItem(this.STORAGE_KEY);
if(!data)returnnull;
constprogress=JSON.parse(data);
console.log('[Progress]加载成功:',progress);
returnprogress;
}catch(error){
console.error('[Progress]加载失败:',error);
returnnull;
}
},

/**
*清除进度
*/
clear(){
localStorage.removeItem(this.STORAGE_KEY);
console.log('[Progress]已清除');
},

/**
*检查是否有存档
*@returns{boolean}
*/
hasSave(){
returnlocalStorage.getItem(this.STORAGE_KEY)!==null;
},

/**
*记录关卡完成
*@param{number}level-关卡号
*@param{number}stars-获得的星级
*/
completeLevel(level,stars){
constprogress=this.load()||{levels:{}};
progress.levels[level]={
completed:true,
stars:stars,
completedAt:newDate().toISOString()
};
returnthis.save(progress);
},

/**
*获取关卡状态
*@param{number}level
*@returns{Object|null}
*/
getLevelStatus(level){
constprogress=this.load();
returnprogress?.levels?.[level]||null;
}
};


if(typeofwindow!=='undefined'){
window.ProgressHandler=ProgressHandler;
}

console.log('✅progress-handler.js已加载');
