/* 🎮 韩语字母之旅 - 游戏核心逻辑
   Level 1 MVP - 元音拼图游戏
   依赖: Phaser 3.60+
*/

// 游戏配置（所有场景类定义后初始化）
const GAME_CONFIG = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#F7F7F7',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [BootScene, MenuScene, LearnScene, GameScene, CompleteScene]
};

// 游戏全局状态
const GameState = {
    level: 1,
    score: 0,
    completedLetters: [],
    completedLevels: [],
    currentLetter: null,
    currentIndex: 0,
    settings: {
        soundEnabled: true,
        fontSize: 24,
        ttsEnabled: true
    }
};

// 字母数据（从korean-data.js加载）
// Level 1 使用元音，Level 2 使用完整字母
let HANGUL_DATA = [];
let LEVEL_DATA = {};

// 初始化数据
function initData(level) {
    if (typeof KOREAN_DATA !== 'undefined') {
        if (level === 1) {
            HANGUL_DATA = KOREAN_DATA.vowels; // Level 1 只学元音
            LEVEL_DATA = { type: 'vowels-only', count: (HANGUL_DATA ? HANGUL_DATA.length : 0) };
        } else if (level === 2) {
            HANGUL_DATA = KOREAN_DATA.vowels.concat(KOREAN_DATA.consonants);
            LEVEL_DATA = { type: 'full-alphabet', count: (HANGUL_DATA ? HANGUL_DATA.length : 0) };
        }
    } else {
        console.warn('KOREAN_DATA 未加载，使用备用数据');
        HANGUL_DATA = [
            { id: 'ㅏ', name: '아', sound: 'a', description: '嘴巴张大' },
            { id: 'ㅓ', name: '어', sound: 'eo', description: '嘴稍微收圆' },
            { id: 'ㅗ', name: '오', sound: 'o', description: '嘴唇圆形' },
            { id: 'ㅜ', name: '우', sound: 'u', description: '嘴唇圆形' },
            { id: 'ㅡ', name: '으', sound: 'eu', description: '扁平嘴型' },
            { id: 'ㅣ', name: '이', sound: 'i', description: '微笑嘴型' }
        ];
    }
    console.log(`[Data] Level ${level} 数据已加载: ${(HANGUL_DATA ? HANGUL_DATA.length : 0)} 个字母`);
}

// ========== 场景1: 启动场景 ==========
class BootScene extends Phaser.Scene {
    constructor() { super('BootScene'); }

    create() {
        console.log('[BootScene] 启动中...');
        
        // 加载资源
        this.load.image('logo', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');
        
        // 模拟资源加载
        this.time.delayedCall(500, () => {
            this.scene.start('MenuScene');
        });
    }
}

// ========== 场景2: 主菜单 ==========
class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }

    create() {
        console.log('[MenuScene] 主菜单');
        
        const cx = this.cameras.main.centerX;
        const cy = this.cameras.main.centerY;

        // 标题
        this.add.text(cx, cy - 100, '🎮 韩语字母之旅', {
            fontSize: '48px',
            fontFamily: 'Barlow, sans-serif',
            color: '#333333'
        }).setOrigin(0.5);

        this.add.text(cx, cy - 40, 'Level 1: 元音基础', {
            fontSize: '24px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#666666'
        }).setOrigin(0.5);

        // 开始按钮
        const startBtn = this.add.text(cx, cy + 30, '▶ 开始学习', {
            fontSize: '28px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FFFFFF',
            backgroundColor: '#FF6B6B',
            padding: { x: 40, y: 16 },
            borderRadius: '16px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        startBtn.on('pointerdown', () => {
            this.scene.start('LearnScene');
        });

        startBtn.on('pointerover', () => startBtn.setScale(1.05));
        startBtn.on('pointerout', () => startBtn.setScale(1));

        // 设置按钮
        const settingsBtn = this.add.text(cx, cy + 90, '⚙️ 设置', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#4ECDC4',
            backgroundColor: '#FFFFFF',
            padding: { x: 30, y: 12 },
            borderRadius: '12px',
            border: '2px solid #4ECDC4'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        settingsBtn.on('pointerdown', () => {
            alert('设置面板（开发中）');
        });

        // Level 2 按钮 - 音节拼图
        const syllableBtn = this.add.text(cx, cy + 150, '🔤 音节拼图 (Level 2)', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FF6B6B',
            backgroundColor: '#FFFFFF',
            padding: { x: 30, y: 12 },
            borderRadius: '12px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        syllableBtn.on('pointerdown', () => this.scene.start('SyllableScene'));
        syllableBtn.on('pointerover', () => syllableBtn.setScale(1.05));
        syllableBtn.on('pointerout', () => syllableBtn.setScale(1));

        // Level 2 按钮 - 单词挑战
        const wordBtn = this.add.text(cx, cy + 210, '📖 单词挑战 (Level 2)', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#10B981',
            backgroundColor: '#FFFFFF',
            padding: { x: 30, y: 12 },
            borderRadius: '12px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        wordBtn.on('pointerdown', () => this.scene.start('WordScene'));
        wordBtn.on('pointerover', () => wordBtn.setScale(1.05));
        wordBtn.on('pointerout', () => wordBtn.setScale(1));

        // 版本信息
        this.add.text(cx, 580, 'v0.2 MVP - Level 2 | © 2026 小星星', {
            fontSize: '12px',
            color: '#999999'
        }).setOrigin(0.5);
    }
}

// ========== 场景3: 学习模式 ==========
class LearnScene extends Phaser.Scene {
    constructor() { super('LearnScene'); }

    create() {
        console.log('[LearnScene] 学习模式');
        const cx = this.cameras.main.centerX;
        const cy = this.cameras.main.centerY;

        // 标题
        this.add.text(cx, 50, '📚 学习元音字母', {
            fontSize: '32px',
            fontFamily: 'Barlow, sans-serif',
            color: '#333333'
        }).setOrigin(0.5);

        // 返回按钮
        this.createBackButton(() => this.scene.start('MenuScene'));

        // 字母展示
        const letter = HANGUL_DATA[0] || { id: '?', name: '?', sound: '?', description: '无数据' };
        this.currentIndex = 0;

        this.letterText = this.add.text(cx, cy - 50, letter.char, {
            fontSize: '120px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: letter.color
        }).setOrigin(0.5);

        // 发音文本
        this.add.text(cx, cy + 30, `发音: [${letter.pronunciation}]`, {
            fontSize: '24px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#666666'
        }).setOrigin(0.5);

        // 示例词
        this.add.text(cx, cy + 70, `示例: ${letter.example}`, {
            fontSize: '28px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#333333'
        }).setOrigin(0.5);

        this.add.text(cx, cy + 110, `意思: ${letter.meaning}`, {
            fontSize: '18px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#777777'
        }).setOrigin(0.5);

        // 播放发音按钮
        const soundBtn = this.add.text(cx, cy + 170, '🔊 播放发音', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FFFFFF',
            backgroundColor: '#4ECDC4',
            padding: { x: 30, y: 12 },
            borderRadius: '25px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        soundBtn.on('pointerdown', () => {
            this.playTTS(letter.char);
        });

        // 下一个按钮
        const nextBtn = this.add.text(cx, cy + 230, '下一个 →', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#333333',
            backgroundColor: '#FFE66D',
            padding: { x: 30, y: 12 },
            borderRadius: '25px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        nextBtn.on('pointerdown', () => {
            this.showNextLetter();
        });

        // 页码
        this.pageText = this.add.text(cx, 550, '1 / 5', {
            fontSize: '16px',
            color: '#999999'
        }).setOrigin(0.5);
    }

    createBackButton(callback) {
        const backBtn = this.add.text(30, 30, '← 返回', {
            fontSize: '18px',
            fontFamily: 'Barlow, sans-serif',
            color: '#666666',
            backgroundColor: '#FFFFFF',
            padding: { x: 16, y: 8 },
            borderRadius: '8px'
        }).setInteractive({ useHandCursor: true });

        backBtn.on('pointerdown', callback);
    }

    showNextLetter() {
        this.currentIndex++;
        if (this.currentIndex >= (HANGUL_DATA ? (HANGUL_DATA ? HANGUL_DATA.length : 0) : 0)) {
            this.scene.start('GameScene');
            return;
        }

        const letter = HANGUL_DATA[this.currentIndex];
        
        // 动画切换
        this.tweens.add({
            targets: [this.letterText],
            alpha: 0,
            duration: 200,
            onComplete: () => {
                this.letterText.setText(letter.char);
                this.letterText.setColor(letter.color);
                // 更新其他文本...
                this.tweens.add({
                    targets: [this.letterText],
                    alpha: 1,
                    duration: 200
                });
            }
        });

        this.pageText.setText(`${this.currentIndex + 1} / ${(HANGUL_DATA ? HANGUL_DATA.length : 0)}`);
    }

    async playTTS(text) {
        try {
            console.log(`[TTS] 播放: ${text}`);
            
            // 优先使用sag集成（如果有）
            if (window.sagIntegration && window.sagIntegration.playTTS) {
                await window.sagIntegration.playTTS(text);
            } else if ('speechSynthesis' in window) {
                // Fallback: 浏览器原生TTS
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ko-KR';
                utterance.rate = 0.8;
                window.speechSynthesis.speak(utterance);
            } else {
                console.warn('[TTS] 不支持TTS播放');
            }
        } catch (error) {
            console.error('[TTS] 失败:', error);
        }
    }
}

// ========== 场景4: 拼图游戏 ==========
class GameScene extends Phaser.Scene {
    constructor() { super('GameScene'); }

    create() {
        console.log('[GameScene] 拼图游戏');
        const cx = this.cameras.main.centerX;
        const cy = this.cameras.main.centerY;

        // 标题
        this.add.text(cx, 40, '🎯 拼图挑战', {
            fontSize: '32px',
            fontFamily: 'Barlow, sans-serif',
            color: '#333333'
        }).setOrigin(0.5);

        // 返回按钮
        this.createBackButton(() => this.scene.start('MenuScene'));

        // 目标区域（显示发音和单词）
        this.createTargetArea(cx, cy - 80);

        // 字母池
        this.createLetterPool(cx, cy + 100);

        // 操作按钮
        this.createActionButtons(cx, cy + 300);

        // 分数显示
        this.scoreText = this.add.text(760, 30, '⭐ 0', {
            fontSize: '24px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FFE66D'
        }).setOrigin(1, 0);

        // 初始化游戏状态
        this.matchedLetters = new Set();
        this.attempts = 0;
    }

    createTargetArea(x, y) {
        const targetLabel = this.add.text(x, y - 30, '目标发音: [a]', {
            fontSize: '20px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#333333'
        }).setOrigin(0.5);

        // 目标槽位 (5个)
        this.slots = [];
        const slotWidth = 100;
        const totalWidth = 5 * slotWidth + 4 * 10;
        const startX = x - totalWidth / 2 + slotWidth / 2;

        for (let i = 0; i < 5; i++) {
            const slot = this.add.rectangle(
                startX + i * (slotWidth + 10), 
                y + 50, 
                slotWidth, 
                100, 
                0xFFFFFF,
                0.5
            )
            .setStrokeStyle(3, 0xCCCCCC, 1)
            .setInteractive({ 
                dropZone: true, 
                useHandCursor: true 
            });

            // 槽位ID和事件
            slot.setData('index', i);
            slot.on('drop', (pointer, gameObject, dropZone) => {
                this.onLetterDropped(gameObject, dropZone);
            });

            this.slots.push(slot);
        }

        // 提示文本
        this.add.text(x, y + 140, '拖拽字母到对应位置', {
            fontSize: '14px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#999999'
        }).setOrigin(0.5);
    }

    createLetterPool(x, y) {
        this.add.text(x, y - 30, '字母池', {
            fontSize: '20px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#333333'
        }).setOrigin(0.5);

        // 创建可拖拽字母
        this.letters = [];
        const poolWidth = 5 * 80 + 4 * 15;
        const startX = x - poolWidth / 2 + 40;

        HANGUL_DATA.forEach((letter, index) => {
            const letterObj = this.add.text(
                startX + index * 95,
                y,
                letter.char,
                {
                    fontSize: '60px',
                    fontFamily: 'Noto Sans KR, sans-serif',
                    color: letter.color
                }
            )
            .setOrigin(0.5)
            .setInteractive({ 
                draggable: true,
                useHandCursor: true 
            })
            .setData('letterData', letter)
            .setData('matched', false)
            .setData('originalX', startX + index * 95)
            .setData('originalY', y);

            // 拖拽事件
            this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
                gameObject.x = dragX;
                gameObject.y = dragY;
                gameObject.setScale(1.1);
                gameObject.setDepth(100);
            });

            this.input.on('dragend', (pointer, gameObject) => {
                gameObject.setScale(1);
                gameObject.setDepth(0);
            });

            this.letters.push(letterObj);
        });
    }

    createActionButtons(x, y) {
        // 检查答案按钮
        const checkBtn = this.add.text(x - 100, y, '✅ 检查答案', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FFFFFF',
            backgroundColor: '#4ECDC4',
            padding: { x: 30, y: 12 },
            borderRadius: '12px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        checkBtn.on('pointerdown', () => this.checkAnswers());

        // 重置按钮
        const resetBtn = this.add.text(x + 100, y, '🔄 重置', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#333333',
            backgroundColor: '#FFE66D',
            padding: { x: 30, y: 12 },
            borderRadius: '12px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        resetBtn.on('pointerdown', () => this.resetGame());
    }

    onLetterDropped(letterObj, slot) {
        if (letterObj.getData('matched')) return;

        const letterData = letterObj.getData('letterData');
        const slotIndex = slot.getData('index');

        // 将字母移动到槽位中心
        letterObj.x = slot.x;
        letterObj.y = slot.y;
        letterObj.setData('slotIndex', slotIndex);

        // 播放音效
        this.playClickSound();
    }

    checkAnswers() {
        this.attempts++;
        let correct = 0;
        let total = (HANGUL_DATA ? HANGUL_DATA.length : 0);

        // 检查每个槽位
        HANGUL_DATA.forEach((targetLetter, index) => {
            const slot = this.slots[index];
            const letterOnSlot = this.getLetterOnSlot(slot);
            
            if (letterOnSlot) {
                const letterData = letterOnSlot.getData('letterData');
                if (letterData.id === targetLetter.id) {
                    correct++;
                    // 不再立即标记matched，防止重复计分
                    slot.setStrokeStyle(3, 0x95E1D3, 1); // 绿色边框
                    this.playCorrectSound();
                } else {
                    // 错误：字母返回池子
                    this.returnLetterToPool(letterOnSlot);
                    this.playWrongSound();
                }
            }
        });

        // 标记所有正确字母为matched
        this.slots.forEach((slot, index) => {
            const letterOnSlot = this.getLetterOnSlot(slot);
            if (letterOnSlot) {
                const letterData = letterOnSlot.getData('letterData');
                if (letterData.id === HANGUL_DATA[index].id) {
                    letterOnSlot.setData('matched', true);
                }
            }
        });

        // 更新分数
        this.score = correct * 10;
        this.scoreText.setText(`⭐ ${this.score}`);

        // 显示结果
        this.showResult(correct, total);

        // 检查是否完成
        if (correct === total) {
            // 保存进度
            if (window.ProgressHandler) {
                const stars = this.score >= 150 ? 3 : (this.score >= 100 ? 2 : 1);
                window.ProgressHandler.completeLevel(1, stars);
                console.log('[Progress] Level 1 完成，已保存进度');
            }
            
            this.time.delayedCall(1500, () => {
                this.scene.start('CompleteScene', { 
                    score: this.score,
                    attempts: this.attempts
                });
            });
        }
    }

    getLetterOnSlot(slot) {
        return this.letters.find(letter => 
            letter.getData('slotIndex') === slot.getData('index') &&
            !letter.getData('matched')
        );
    }

    returnLetterToPool(letterObj) {
        letterObj.x = letterObj.originalX;
        letterObj.y = letterObj.originalY;
        letterObj.setData('slotIndex', null);
        this.tweens.add({
            targets: letterObj,
            angle: 10,
            duration: 100,
            yoyo: true,
            repeat: 3
        });
    }

    resetGame() {
        this.matchedLetters.clear();
        this.attempts = 0;
        this.score = 0;
        this.scoreText.setText('⭐ 0');

        this.letters.forEach(letter => {
            letter.x = letter.originalX;
            letter.y = letter.originalY;
            letter.setData('matched', false);
            letter.setData('slotIndex', null);
            letter.angle = 0;
        });

        this.slots.forEach(slot => {
            slot.setStrokeStyle(3, 0xCCCCCC, 1);
        });
    }

    showResult(correct, total) {
        const resultText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 200,
            `✅ 正确: ${correct}/${total}`,
            { fontSize: '24px', color: '#333333' }
        ).setOrigin(0.5);

        this.time.delayedCall(2000, () => {
            resultText.destroy();
        });
    }

    createBackButton(callback) {
        const backBtn = this.add.text(30, 30, '← 返回', {
            fontSize: '18px',
            fontFamily: 'Barlow, sans-serif',
            color: '#666666',
            backgroundColor: '#FFFFFF',
            padding: { x: 16, y: 8 },
            borderRadius: '8px'
        }).setInteractive({ useHandCursor: true });

        backBtn.on('pointerdown', callback);
    }

    playClickSound() {
        // 实现音效
    }

    playCorrectSound() {
        // 正确音效
    }

    playWrongSound() {
        // 错误音效
    }
}

// ========== 场景5: 完成结算 ==========
class CompleteScene extends Phaser.Scene {
    constructor() { super('CompleteScene'); }

    init(data) {
        this.score = data.score || 0;
        this.attempts = data.attempts || 1;
    }

    create() {
        const cx = this.cameras.main.centerX;
        const cy = this.cameras.main.centerY;

        // 庆祝文字
        this.add.text(cx, cy - 100, '🎉 恭喜完成！', {
            fontSize: '48px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FF6B6B'
        }).setOrigin(0.5);

        // 星星显示
        const stars = this.score >= 150 ? 3 : (this.score >= 100 ? 2 : 1);
        let starsText = '';
        for (let i = 0; i < 3; i++) {
            starsText += i < stars ? '⭐' : '☆';
        }

        this.add.text(cx, cy - 20, starsText, {
            fontSize: '48px',
            fontFamily: 'Barlow, sans-serif'
        }).setOrigin(0.5);

        // 统计信息
        const accuracy = Math.round((this.score / 150) * 100);
        this.add.text(cx, cy + 60, `⏱️ 用时: 约${this.attempts * 30}秒 | 正确率: ${accuracy}%`, {
            fontSize: '20px',
            fontFamily: 'Noto Sans KR, sans-serif',
            color: '#666666'
        }).setOrigin(0.5);

        // 按钮
        const replayBtn = this.add.text(cx, cy + 150, '🔁 再玩一次', {
            fontSize: '24px',
            fontFamily: 'Barlow, sans-serif',
            color: '#FFFFFF',
            backgroundColor: '#FF6B6B',
            padding: { x: 40, y: 16 },
            borderRadius: '12px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        replayBtn.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        const menuBtn = this.add.text(cx, cy + 210, '🏠 返回菜单', {
            fontSize: '20px',
            fontFamily: 'Barlow, sans-serif',
            color: '#333333',
            backgroundColor: '#FFE66D',
            padding: { x: 30, y: 12 },
            borderRadius: '12px'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        menuBtn.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}

// ========== Level 2: 音节拼图游戏 ==========
class SyllableScene extends Phaser.Scene {
    constructor() { super('SyllableScene'); }

    create() {
        console.log('[SyllableScene] 音节拼图 - Level 2');
        this.cameras.main.setBackgroundColor('#F7F7F7');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;
        
        this.add.text(cx, cy - 200, '🔤 音节拼图', {
            fontSize: '36px', fontFamily: 'Barlow, sans-serif', color: '#333333'
        }).setOrigin(0.5);
        
        this.add.text(cx, cy - 150, '将辅音+元音拖拽组合成音节', {
            fontSize: '16px', fontFamily: 'Noto Sans KR', color: '#666666'
        }).setOrigin(0.5);
        
        // 随机选择一个辅音和一个元音
        const consonants = [
            { char: 'ㄱ', id: 'g' }, { char: 'ㄴ', id: 'n' }, { char: 'ㄷ', id: 'd' },
            { char: 'ㄹ', id: 'r' }, { char: 'ㅁ', id: 'm' }, { char: 'ㅂ', id: 'b' },
            { char: 'ㅅ', id: 's' }, { char: 'ㅇ', id: 'ng' }, { char: 'ㅈ', id: 'j' },
            { char: 'ㅊ', id: 'ch' }, { char: 'ㅋ', id: 'k' }, { char: 'ㅌ', id: 't' },
            { char: 'ㅍ', id: 'p' }, { char: 'ㅎ', id: 'h' }
        ];
        const vowels = HANGUL_DATA;
        const consonant = Phaser.Utils.Array.GetRandom(consonants);
        const vowel = Phaser.Utils.Array.GetRandom(vowels);
        this.targetSyllable = consonant.id + vowel.id;
        
        this.add.text(cx, cy - 80, `目标: ${consonant.char} + ${vowel.char}`, {
            fontSize: '28px', fontFamily: 'Noto Sans KR', color: '#FF6B6B'
        }).setOrigin(0.5);
        
        // drop zone
        const dropZone = this.add.rectangle(cx, cy + 50, 200, 80, 0xEEEEEE).setStrokeStyle(3, 0xCCCCCC);
        this.add.text(cx, cy + 50, '拖拽到此处组合', { fontSize: '14px', color: '#999' }).setOrigin(0.5);
        
        // 创建可拖拽字母块
        const startX = 150;
        const spacing = 150;
        [consonant, vowel].forEach((letter, idx) => {
            const piece = this.add.text(startX + idx * spacing, cy + 150, letter.char, {
                fontSize: '80px', fontFamily: 'Noto Sans KR', color: '#4ECDC4',
                backgroundColor: '#FFF', padding: { x: 20, y: 10 }, borderRadius: '12px'
            }).setOrigin(0.5).setInteractive({ draggable: true });
            piece.letterId = letter.id;
            piece.letterChar = letter.char;
            piece.on('drag', (pointer, dragX, dragY) => piece.setPosition(dragX, dragY));
            piece.on('dragend', () => this.checkDrop(piece, dropZone, cx));
        });
        
        // 返回按钮
        const backBtn = this.add.text(cx, 550, '← 返回菜单', {
            fontSize: '16px', fontFamily: 'Barlow', color: '#666'
        }).setOrigin(0.5).setInteractive();
        backBtn.on('pointerdown', () => this.scene.start('MenuScene'));
    }
    
    checkDrop(piece, dropZone, cx) {
        const dist = Phaser.Math.Distance.Between(piece.x, piece.y, dropZone.x, dropZone.y);
        if (dist < 80) {
            // 检查拼写
            const children = dropZone.children.filter(c => c.text && c.letterId);
            const current = children.map(c => c.letterId).sort().join('');
            if (current === this.targetSyllable) {
                dropZone.setFillStyle(0x10B981);
                this.time.delayedCall(800, () => {
                    alert('✅ 拼写正确！');
                    this.scene.start('MenuScene');
                });
            } else {
                dropZone.setFillStyle(0xEF4444);
                this.time.delayedCall(500, () => piece.setPosition(piece.x < 300 ? 150 : 300, 400));
            }
        } else {
            piece.setPosition(piece.x < 300 ? 150 : 300, 400);
        }
        dropZone.setFillStyle(0xEEEEEE);
    }
}

// ========== Level 2: 单词挑战 ==========
class WordScene extends Phaser.Scene {
    constructor() { super('WordScene'); }

    create() {
        console.log('[WordScene] 单词挑战 - Level 2');
        this.cameras.main.setBackgroundColor('#F7F7F7');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;
        
        this.add.text(cx, cy - 180, '📖 单词挑战', {
            fontSize: '36px', fontFamily: 'Barlow, sans-serif', color: '#333'
        }).setOrigin(0.5);
        
        // 简单单词库
        this.words = [
            { word: '가나다', hint: '韩语基本字母顺序' },
            { word: '사랑', hint: '爱' },
            { word: '학교', hint: '学校' },
            { word: '학생', hint: '学生' },
            { word: '선생님', hint: '老师' },
            { word: '감사합니다', hint: '谢谢' }
        ];
        this.currentWord = Phaser.Utils.Array.GetRandom(this.words);
        this.currentScore = 0;
        this.totalQuestions = 5;
        
        this.add.text(cx, cy - 120, `提示: ${this.currentWord.hint}`, {
            fontSize: '20px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);
        
        this.questionText = this.add.text(cx, cy - 60, '???', {
            fontSize: '64px', fontFamily: 'Noto Sans KR', color: '#333', fontStyle: 'bold'
        }).setOrigin(0.5);
        
        this.scrambleAndShow();
        
        // 答案区域
        this.answerContainer = this.add.container(cx, cy + 80);
        this.createAnswerSlots();
        
        // 选项区域
        this.optionsContainer = this.add.container(cx, cy + 180);
        this.createOptions();
        
        // 返回按钮
        const backBtn = this.add.text(cx, 550, '← 返回菜单', {
            fontSize: '16px', fontFamily: 'Barlow', color: '#666'
        }).setOrigin(0.5).setInteractive();
        backBtn.on('pointerdown', () => this.scene.start('MenuScene'));
    }
    
    scrambleAndShow() {
        const letters = this.currentWord.word.split('');
        Phaser.Utils.Array.Shuffle(letters);
        this.questionText.setText(letters.join(' '));
    }
    
    createAnswerSlots() {
        this.answerContainer.removeAll(true);
        this.answerSlots = [];
        const len = this.currentWord.word.length;
        const startX = -((len - 1) * 40) / 2;
        
        for (let i = 0; i < len; i++) {
            const slot = this.add.rectangle(startX + i * 40, 0, 38, 38, 0xFFFFFF)
                .setStrokeStyle(2, 0xAAAAAA);
            slot.letter = null;
            this.answerContainer.add(slot);
            this.answerSlots.push(slot);
        }
    }
    
    createOptions() {
        this.optionsContainer.removeAll(true);
        const letters = this.currentWord.word.split('');
        const shuffled = [...letters];
        Phaser.Utils.Array.Shuffle(shuffled);
        
        // 添加额外干扰项（如果字母不够）
        if (shuffled.length < 8) {
            const allLetters = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅓㅗㅜㅡㅣㅐㅔ'.split('');
            while (shuffled.length < 8) {
                const extra = Phaser.Utils.Array.GetRandom(allLetters);
                if (!shuffled.includes(extra)) shuffled.push(extra);
            }
            Phaser.Utils.Array.Shuffle(shuffled);
        }
        
        const cols = 4;
        const startX = -((cols - 1) * 45) / 2;
        shuffled.forEach((letter, i) => {
            const x = startX + (i % cols) * 45;
            const y = Math.floor(i / cols) * 45;
            const btn = this.add.text(x, y, letter, {
                fontSize: '28px', fontFamily: 'Noto Sans KR', color: '#333',
                backgroundColor: '#F7F7F7', padding: { x: 6, y: 3 }
            }).setOrigin(0.5).setInteractive();
            btn.on('pointerdown', () => this.selectLetter(btn, letter));
            this.optionsContainer.add(btn);
        });
    }
    
    selectLetter(btn, letter) {
        const emptySlot = this.answerSlots.find(s => !s.letter);
        if (!emptySlot) return;
        
        emptySlot.letter = letter;
        const letterText = this.add.text(0, 0, letter, {
            fontSize: '24px', fontFamily: 'Noto Sans KR', color: '#333'
        }).setOrigin(0.5);
        emptySlot.add(letterText);
        
        btn.disableInteractive(true);
        btn.setAlpha(0.3);
        
        // 检查是否完成
        const answer = this.answerSlots.map(s => s.letter).join('');
        if (answer.length === this.currentWord.word.length) {
            if (answer === this.currentWord.word) {
                this.currentScore += 50;
                alert('✅ 正确！');
                this.nextQuestion();
            } else {
                alert('❌ 错误，正确答案是: ' + this.currentWord.word);
                this.resetQuestion();
            }
        }
    }
    
    nextQuestion() {
        if (this.currentScore >= this.totalQuestions * 50) {
            this.scene.start('CompleteScene', { score: this.currentScore, attempts: 1 });
        } else {
            this.currentWord = Phaser.Utils.Array.GetRandom(this.words);
            this.scrambleAndShow();
            this.createAnswerSlots();
            this.createOptions();
        }
    }
    
    resetQuestion() {
        this.currentWord = Phaser.Utils.Array.GetRandom(this.words);
        this.scrambleAndShow();
        this.createAnswerSlots();
        this.createOptions();
    }
}

// 所有类定义完成后，重新构建scene数组（确保类已定义）
GAME_CONFIG.scene = [BootScene, MenuScene, LearnScene, GameScene, SyllableScene, WordScene, CompleteScene];

console.log('[game.js] 启动Phaser游戏...');
try {
    const game = new Phaser.Game(GAME_CONFIG);
    console.log('[game.js] ✅ Phaser游戏实例已创建');
} catch (error) {
    console.error('[game.js] ❌ Phaser启动失败:', error);
    document.getElementById('game-container').innerHTML = `<h1 style="color:red">游戏启动失败: ${error.message}</h1>`;
}
