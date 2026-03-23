


constStorageManager={
STORAGE_KEY:'hangul-adventure-progress',


saveProgress(data){
try{
constprogress={
version:'0.1',
lastUpdated:newDate().toISOString(),
...data
};
localStorage.setItem(this.STORAGE_KEY,JSON.stringify(progress));
console.log('[Storage]进度已保存:',progress);
returntrue;
}catch(error){
console.error('[Storage]保存失败:',error);
returnfalse;
}
},


loadProgress(){
try{
constdata=localStorage.getItem(this.STORAGE_KEY);
if(!data)returnnull;
constprogress=JSON.parse(data);
console.log('[Storage]进度已加载:',progress);
returnprogress;
}catch(error){
console.error('[Storage]加载失败:',error);
returnnull;
}
},


clearProgress(){
localStorage.removeItem(this.STORAGE_KEY);
console.log('[Storage]进度已清除');
},


hasSave(){
returnlocalStorage.getItem(this.STORAGE_KEY)!==null;
}
};


if(typeofwindow!=='undefined'){
window.StorageManager=StorageManager;
}
