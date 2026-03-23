// 🎤 sag技能集成封装
// 提供简单的TTS调用接口

/**
 * 播放韩语发音
 * @param {string} text - 文本（韩语字母或单词）
 * @param {string} [voice='female'] - 声音性别
 * @returns {Promise<void>}
 */
async function playTTS(text, voice = 'female') {
  try {
    console.log(`[sag] TTS请求: ${text}`);
    
    // TODO: 实际调用OpenClaw sag技能
    // 当前使用浏览器TTS作为fallback
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.8;
      if (voice === 'male') {
        utterance.pitch = 0.8;
      }
      window.speechSynthesis.speak(utterance);
      console.log(`[sag] 使用浏览器TTS播放: ${text}`);
    } else {
      console.warn('[sag] 浏览器不支持TTS');
    }
  } catch (error) {
    console.error('[sag] TTS失败:', error);
  }
}

/**
 * 批量播放（用于学习模式）
 * @param {Array<string>} texts 
 */
async function playBatch(texts) {
  for (const text of texts) {
    await playTTS(text);
    await new Promise(resolve => setTimeout(resolve, 1000)); // 间隔1秒
  }
}

// 导出
if (typeof window !== 'undefined') {
  window.sagIntegration = { playTTS, playBatch };
}

console.log('✅ sag-integration.js 已加载');
