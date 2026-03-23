/*🎮韩语字母之旅-游戏核心逻辑
Level1MVP-元音拼图游戏
依赖:Phaser3.60+
*/


constGAME_CONFIG={
type:Phaser.AUTO,
width:800,
height:600,
parent:'game-container',
backgroundColor:'#F7F7F7',
scale:{
mode:Phaser.Scale.FIT,
autoCenter:Phaser.Scale.CENTER_BOTH
},
scene:[BootScene,MenuScene,LearnScene,GameScene,CompleteScene]
};


constGameState={
level:1,
score:0,
completedLetters:[],
currentLetter:null,
settings:{
soundEnabled:true,
fontSize:24
}
};


letHANGUL_DATA=[];


constgame=newPhaser.Game(GAME_CONFIG);


classBootSceneextendsPhaser.Scene{
constructor(){super('BootScene');}

create(){
console.log('[BootScene]启动中...');


this.load.image('logo','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');


this.time.delayedCall(500,()=>{
this.scene.start('MenuScene');
});
}
}


classMenuSceneextendsPhaser.Scene{
constructor(){super('MenuScene');}

create(){
console.log('[MenuScene]主菜单');

constcx=this.cameras.main.centerX;
constcy=this.cameras.main.centerY;


this.add.text(cx,cy-100,'🎮韩语字母之旅',{
fontSize:'48px',
fontFamily:'Barlow,sans-serif',
color:'#333333'
}).setOrigin(0.5);

this.add.text(cx,cy-40,'Level1:元音基础',{
fontSize:'24px',
fontFamily:'NotoSansKR,sans-serif',
color:'#666666'
}).setOrigin(0.5);


conststartBtn=this.add.text(cx,cy+30,'▶开始学习',{
fontSize:'28px',
fontFamily:'Barlow,sans-serif',
color:'#FFFFFF',
backgroundColor:'#FF6B6B',
padding:{x:40,y:16},
borderRadius:'16px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

startBtn.on('pointerdown',()=>{
this.scene.start('LearnScene');
});

startBtn.on('pointerover',()=>startBtn.setScale(1.05));
startBtn.on('pointerout',()=>startBtn.setScale(1));


constsettingsBtn=this.add.text(cx,cy+90,'⚙️设置',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#4ECDC4',
backgroundColor:'#FFFFFF',
padding:{x:30,y:12},
borderRadius:'12px',
border:'2pxsolid#4ECDC4'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

settingsBtn.on('pointerdown',()=>{
alert('设置面板（开发中）');
});


if(window.ProgressHandler&&window.ProgressHandler.hasSave()){
constcontinueBtn=this.add.text(cx,cy+20,'▶继续学习',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#333333',
backgroundColor:'#FFE66D',
padding:{x:30,y:12},
borderRadius:'12px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

continueBtn.on('pointerdown',()=>{

this.scene.start('GameScene');
});
}


this.add.text(cx,580,'v0.1MVP|©2026小星星',{
fontSize:'12px',
color:'#999999'
}).setOrigin(0.5);
}
}


classLearnSceneextendsPhaser.Scene{
constructor(){super('LearnScene');}

create(){
console.log('[LearnScene]学习模式');
constcx=this.cameras.main.centerX;
constcy=this.cameras.main.centerY;


this.add.text(cx,50,'📚学习元音字母',{
fontSize:'32px',
fontFamily:'Barlow,sans-serif',
color:'#333333'
}).setOrigin(0.5);


this.createBackButton(()=>this.scene.start('MenuScene'));


constletter=HANGUL_DATA[0];
this.currentIndex=0;

this.letterText=this.add.text(cx,cy-50,letter.char,{
fontSize:'120px',
fontFamily:'NotoSansKR,sans-serif',
color:letter.color
}).setOrigin(0.5);


this.add.text(cx,cy+30,`发音:[${letter.pronunciation}]`,{
fontSize:'24px',
fontFamily:'NotoSansKR,sans-serif',
color:'#666666'
}).setOrigin(0.5);


this.add.text(cx,cy+70,`示例:${letter.example}`,{
fontSize:'28px',
fontFamily:'NotoSansKR,sans-serif',
color:'#333333'
}).setOrigin(0.5);

this.add.text(cx,cy+110,`意思:${letter.meaning}`,{
fontSize:'18px',
fontFamily:'NotoSansKR,sans-serif',
color:'#777777'
}).setOrigin(0.5);


constsoundBtn=this.add.text(cx,cy+170,'🔊播放发音',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#FFFFFF',
backgroundColor:'#4ECDC4',
padding:{x:30,y:12},
borderRadius:'25px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

soundBtn.on('pointerdown',()=>{
this.playTTS(letter.char);
});


constnextBtn=this.add.text(cx,cy+230,'下一个→',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#333333',
backgroundColor:'#FFE66D',
padding:{x:30,y:12},
borderRadius:'25px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

nextBtn.on('pointerdown',()=>{
this.showNextLetter();
});


this.pageText=this.add.text(cx,550,'1/5',{
fontSize:'16px',
color:'#999999'
}).setOrigin(0.5);
}

createBackButton(callback){
constbackBtn=this.add.text(30,30,'←返回',{
fontSize:'18px',
fontFamily:'Barlow,sans-serif',
color:'#666666',
backgroundColor:'#FFFFFF',
padding:{x:16,y:8},
borderRadius:'8px'
}).setInteractive({useHandCursor:true});

backBtn.on('pointerdown',callback);
}

showNextLetter(){
this.currentIndex++;
if(this.currentIndex>=HANGUL_DATA.length){
this.scene.start('GameScene');
return;
}

constletter=HANGUL_DATA[this.currentIndex];


this.tweens.add({
targets:[this.letterText],
alpha:0,
duration:200,
onComplete:()=>{
this.letterText.setText(letter.char);
this.letterText.setColor(letter.color);

this.tweens.add({
targets:[this.letterText],
alpha:1,
duration:200
});
}
});

this.pageText.setText(`${this.currentIndex+1}/${HANGUL_DATA.length}`);
}

asyncplayTTS(text){
try{
console.log(`[TTS]播放:${text}`);


if(window.sagIntegration&&window.sagIntegration.playTTS){
awaitwindow.sagIntegration.playTTS(text);
}elseif('speechSynthesis'inwindow){

constutterance=newSpeechSynthesisUtterance(text);
utterance.lang='ko-KR';
utterance.rate=0.8;
window.speechSynthesis.speak(utterance);
}else{
console.warn('[TTS]不支持TTS播放');
}
}catch(error){
console.error('[TTS]失败:',error);
}
}
}


classGameSceneextendsPhaser.Scene{
constructor(){super('GameScene');}

create(){
console.log('[GameScene]拼图游戏');
constcx=this.cameras.main.centerX;
constcy=this.cameras.main.centerY;


this.add.text(cx,40,'🎯拼图挑战',{
fontSize:'32px',
fontFamily:'Barlow,sans-serif',
color:'#333333'
}).setOrigin(0.5);


this.createBackButton(()=>this.scene.start('MenuScene'));


this.createTargetArea(cx,cy-80);


this.createLetterPool(cx,cy+100);


this.createActionButtons(cx,cy+300);


this.scoreText=this.add.text(760,30,'⭐0',{
fontSize:'24px',
fontFamily:'Barlow,sans-serif',
color:'#FFE66D'
}).setOrigin(1,0);


this.matchedLetters=newSet();
this.attempts=0;
}

createTargetArea(x,y){
consttargetLabel=this.add.text(x,y-30,'目标发音:[a]',{
fontSize:'20px',
fontFamily:'NotoSansKR,sans-serif',
color:'#333333'
}).setOrigin(0.5);


this.slots=[];
constslotWidth=100;
consttotalWidth=5*slotWidth+4*10;
conststartX=x-totalWidth/2+slotWidth/2;

for(leti=0;i<5;i++){
constslot=this.add.rectangle(
startX+i*(slotWidth+10),
y+50,
slotWidth,
100,
0xFFFFFF,
0.5
)
.setStrokeStyle(3,0xCCCCCC,1)
.setInteractive({
dropZone:true,
useHandCursor:true
});


slot.setData('index',i);
slot.on('drop',(pointer,gameObject,dropZone)=>{
this.onLetterDropped(gameObject,dropZone);
});

this.slots.push(slot);
}


this.add.text(x,y+140,'拖拽字母到对应位置',{
fontSize:'14px',
fontFamily:'NotoSansKR,sans-serif',
color:'#999999'
}).setOrigin(0.5);
}

createLetterPool(x,y){
this.add.text(x,y-30,'字母池',{
fontSize:'20px',
fontFamily:'NotoSansKR,sans-serif',
color:'#333333'
}).setOrigin(0.5);


this.letters=[];
constpoolWidth=5*80+4*15;
conststartX=x-poolWidth/2+40;

HANGUL_DATA.forEach((letter,index)=>{
constletterObj=this.add.text(
startX+index*95,
y,
letter.char,
{
fontSize:'60px',
fontFamily:'NotoSansKR,sans-serif',
color:letter.color
}
)
.setOrigin(0.5)
.setInteractive({
draggable:true,
useHandCursor:true
})
.setData('letterData',letter)
.setData('matched',false)
.setData('originalX',startX+index*95)
.setData('originalY',y);


this.input.on('drag',(pointer,gameObject,dragX,dragY)=>{
gameObject.x=dragX;
gameObject.y=dragY;
gameObject.setScale(1.1);
gameObject.setDepth(100);
});

this.input.on('dragend',(pointer,gameObject)=>{
gameObject.setScale(1);
gameObject.setDepth(0);
});

this.letters.push(letterObj);
});
}

createActionButtons(x,y){

constcheckBtn=this.add.text(x-100,y,'✅检查答案',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#FFFFFF',
backgroundColor:'#4ECDC4',
padding:{x:30,y:12},
borderRadius:'12px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

checkBtn.on('pointerdown',()=>this.checkAnswers());


constresetBtn=this.add.text(x+100,y,'🔄重置',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#333333',
backgroundColor:'#FFE66D',
padding:{x:30,y:12},
borderRadius:'12px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

resetBtn.on('pointerdown',()=>this.resetGame());
}

onLetterDropped(letterObj,slot){
if(letterObj.getData('matched'))return;

constletterData=letterObj.getData('letterData');
constslotIndex=slot.getData('index');


letterObj.x=slot.x;
letterObj.y=slot.y;
letterObj.setData('slotIndex',slotIndex);


this.playClickSound();
}

checkAnswers(){
this.attempts++;
letcorrect=0;
lettotal=HANGUL_DATA.length;


HANGUL_DATA.forEach((targetLetter,index)=>{
constslot=this.slots[index];
constletterOnSlot=this.getLetterOnSlot(slot);

if(letterOnSlot){
constletterData=letterOnSlot.getData('letterData');
if(letterData.id===targetLetter.id){
correct++;

slot.setStrokeStyle(3,0x95E1D3,1);
this.playCorrectSound();
}else{

this.returnLetterToPool(letterOnSlot);
this.playWrongSound();
}
}
});


this.slots.forEach((slot,index)=>{
constletterOnSlot=this.getLetterOnSlot(slot);
if(letterOnSlot){
constletterData=letterOnSlot.getData('letterData');
if(letterData.id===HANGUL_DATA[index].id){
letterOnSlot.setData('matched',true);
}
}
});


this.score=correct*10;
this.scoreText.setText(`⭐${this.score}`);


this.showResult(correct,total);


if(correct===total){

if(window.ProgressHandler){
conststars=this.score>=150?3:(this.score>=100?2:1);
window.ProgressHandler.completeLevel(1,stars);
console.log('[Progress]Level1完成，已保存进度');
}

this.time.delayedCall(1500,()=>{
this.scene.start('CompleteScene',{
score:this.score,
attempts:this.attempts
});
});
}
}

getLetterOnSlot(slot){
returnthis.letters.find(letter=>
letter.getData('slotIndex')===slot.getData('index')&&
!letter.getData('matched')
);
}

returnLetterToPool(letterObj){
letterObj.x=letterObj.originalX;
letterObj.y=letterObj.originalY;
letterObj.setData('slotIndex',null);
this.tweens.add({
targets:letterObj,
angle:10,
duration:100,
yoyo:true,
repeat:3
});
}

resetGame(){
this.matchedLetters.clear();
this.attempts=0;
this.score=0;
this.scoreText.setText('⭐0');

this.letters.forEach(letter=>{
letter.x=letter.originalX;
letter.y=letter.originalY;
letter.setData('matched',false);
letter.setData('slotIndex',null);
letter.angle=0;
});

this.slots.forEach(slot=>{
slot.setStrokeStyle(3,0xCCCCCC,1);
});
}

showResult(correct,total){
constresultText=this.add.text(
this.cameras.main.centerX,
this.cameras.main.centerY+200,
`✅正确:${correct}/${total}`,
{fontSize:'24px',color:'#333333'}
).setOrigin(0.5);

this.time.delayedCall(2000,()=>{
resultText.destroy();
});
}

createBackButton(callback){
constbackBtn=this.add.text(30,30,'←返回',{
fontSize:'18px',
fontFamily:'Barlow,sans-serif',
color:'#666666',
backgroundColor:'#FFFFFF',
padding:{x:16,y:8},
borderRadius:'8px'
}).setInteractive({useHandCursor:true});

backBtn.on('pointerdown',callback);
}

playClickSound(){

}

playCorrectSound(){

}

playWrongSound(){

}
}


classCompleteSceneextendsPhaser.Scene{
constructor(){super('CompleteScene');}

init(data){
this.score=data.score||0;
this.attempts=data.attempts||1;
}

create(){
constcx=this.cameras.main.centerX;
constcy=this.cameras.main.centerY;


this.add.text(cx,cy-100,'🎉恭喜完成！',{
fontSize:'48px',
fontFamily:'Barlow,sans-serif',
color:'#FF6B6B'
}).setOrigin(0.5);


conststars=this.score>=150?3:(this.score>=100?2:1);
letstarsText='';
for(leti=0;i<3;i++){
starsText+=i<stars?'⭐':'☆';
}

this.add.text(cx,cy-20,starsText,{
fontSize:'48px',
fontFamily:'Barlow,sans-serif'
}).setOrigin(0.5);


constaccuracy=Math.round((this.score/150)*100);
this.add.text(cx,cy+60,`⏱️用时:约${this.attempts*30}秒|正确率:${accuracy}%`,{
fontSize:'20px',
fontFamily:'NotoSansKR,sans-serif',
color:'#666666'
}).setOrigin(0.5);


constreplayBtn=this.add.text(cx,cy+150,'🔁再玩一次',{
fontSize:'24px',
fontFamily:'Barlow,sans-serif',
color:'#FFFFFF',
backgroundColor:'#FF6B6B',
padding:{x:40,y:16},
borderRadius:'12px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

replayBtn.on('pointerdown',()=>{
this.scene.start('GameScene');
});

constmenuBtn=this.add.text(cx,cy+210,'🏠返回菜单',{
fontSize:'20px',
fontFamily:'Barlow,sans-serif',
color:'#333333',
backgroundColor:'#FFE66D',
padding:{x:30,y:12},
borderRadius:'12px'
}).setOrigin(0.5).setInteractive({useHandCursor:true});

menuBtn.on('pointerdown',()=>{
this.scene.start('MenuScene');
});
}
}

console.log('🎮韩语字母之旅-游戏代码已加载');
console.log('📊当前技能数:',Object.keys(GAME_CONFIG.scene).length,'个场景');
