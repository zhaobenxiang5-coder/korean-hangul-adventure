


/**
*播放韩语发音
*@param{string}text-文本（韩语字母或单词）
*@param{string}[voice='female']-声音性别
*@returns{Promise<void>}
*/
asyncfunctionplayTTS(text,voice='female'){
try{
console.log(`[sag]TTS请求:${text}`);



if('speechSynthesis'inwindow){
constutterance=newSpeechSynthesisUtterance(text);
utterance.lang='ko-KR';
utterance.rate=0.8;
if(voice==='male'){
utterance.pitch=0.8;
}
window.speechSynthesis.speak(utterance);
console.log(`[sag]使用浏览器TTS播放:${text}`);
}else{
console.warn('[sag]浏览器不支持TTS');
}
}catch(error){
console.error('[sag]TTS失败:',error);
}
}

/**
*批量播放（用于学习模式）
*@param{Array<string>}texts
*/
asyncfunctionplayBatch(texts){
for(consttextoftexts){
awaitplayTTS(text);
awaitnewPromise(resolve=>setTimeout(resolve,1000));
}
}


if(typeofwindow!=='undefined'){
window.sagIntegration={playTTS,playBatch};
}

console.log('✅sag-integration.js已加载');
