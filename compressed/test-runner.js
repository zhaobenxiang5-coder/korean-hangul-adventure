


classTestRunner{
constructor(){
this.tests=[];
this.results=[];
this.passed=0;
this.failed=0;
}

/**
*注册测试用例
*@param{Object}test-{id,name,fn,expected}
*/
register(test){
this.tests.push(test);
console.log(`[Test]注册:${test.id}-${test.name}`);
}

/**
*运行所有测试
*@returns{Object}测试报告
*/
asyncrunAll(){
console.log('🧪开始测试...');
console.log(`总用例数:${this.tests.length}`);

for(consttestofthis.tests){
try{
constresult=awaittest.fn();
if(result===test.expected){
this.passed++;
this.results.push({
id:test.id,
name:test.name,
status:'PASS',
duration:0
});
console.log(`✅${test.id}:PASS`);
}else{
this.failed++;
this.results.push({
id:test.id,
name:test.name,
status:'FAIL',
actual:result,
expected:test.expected,
duration:0
});
console.log(`❌${test.id}:FAIL(expected:${test.expected},got:${result})`);
}
}catch(error){
this.failed++;
this.results.push({
id:test.id,
name:test.name,
status:'ERROR',
error:error.message,
duration:0
});
console.log(`💥${test.id}:ERROR-${error.message}`);
}
}

returnthis.generateReport();
}

/**
*生成测试报告
*/
generateReport(){
constreport={
timestamp:newDate().toISOString(),
total:this.tests.length,
passed:this.passed,
failed:this.failed,
passRate:Math.round(this.passed/this.tests.length*100),
results:this.results
};

console.log('\n📊测试报告:');
console.log(`通过:${report.passed}/${report.total}(${report.passRate}%)`);
console.log(`失败:${report.failed}`);

returnreport;
}

/**
*保存报告到文件
*/
asyncsaveReport(){
constreport=this.generateReport();
constblob=newBlob([JSON.stringify(report,null,2)],{type:'application/json'});
consturl=URL.createObjectURL(blob);


if(typeofwindow!=='undefined'){
consta=document.createElement('a');
a.href=url;
a.download=`test-results-${Date.now()}.json`;
a.click();
URL.revokeObjectURL(url);
}

returnreport;
}
}



functiondefineTests(){
construnner=newTestRunner();


runner.register({
id:'TC-01',
name:'游戏启动',
expected:true,
fn:async()=>{

returntypeofgame!=='undefined'&&game.scene!==undefined;
}
});


runner.register({
id:'TC-02',
name:'字母数据加载',
expected:5,
fn:async()=>{
returnHANGUL_DATA?HANGUL_DATA.length:0;
}
});


runner.register({
id:'TC-03',
name:'sagTTS封装',
expected:'function',
fn:async()=>{
returntypeofwindow.sagIntegration?.playTTS==='function'?'function':'undefined';
}
});


runner.register({
id:'TC-04',
name:'进度处理器',
expected:'object',
fn:async()=>{
returntypeofwindow.ProgressHandler==='object'?'object':'undefined';
}
});


runner.register({
id:'TC-05',
name:'移动端CSS加载',
expected:true,
fn:async()=>{

conststyles=document.styleSheets;
for(letsheetofstyles){
if(sheet.href&&sheet.href.includes('mobile.css')){
returntrue;
}
}
returnfalse;
}
});



returnrunner;
}



if(typeofwindow!=='undefined'){

window.addEventListener('load',async()=>{
console.log('🧪测试环境就绪，等待手动触发...');
window.testRunner=defineTests();


window.runTests=async()=>{
constreport=awaitwindow.testRunner.runAll();
awaitwindow.testRunner.saveReport();
returnreport;
};
});
}

if(require.main===module){

construnner=defineTests();
runner.runAll().then(report=>{
console.log('✅测试完成:',report);
process.exit(report.failed>0?1:0);
});
}

module.exports={TestRunner,defineTests};

console.log('✅test-runner.js已加载');
