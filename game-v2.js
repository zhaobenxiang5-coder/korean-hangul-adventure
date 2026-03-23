/* 🎮 韩语字母之旅 - 游戏核心逻辑 (v2.0 多级架构)
   依赖: Phaser 3.60+
*/

// ========== 数据层（从korean-data.js加载） ==========
let HANGUL_DATA = [];
let CONSONANTS = [];
let VOWELS = [];

function initData(level) {
    if (typeof KOREAN_DATA !== 'undefined') {
        if (level === 1) {
            HANGUL_DATA = KOREAN_DATA.vowels;
            CONSONANTS = [];
            VOWELS = KOREAN_DATA.vowels;
        } else if (level === 2) {
            HANGUL_DATA = KOREAN_DATA.vowels.concat(KOREAN_DATA.consonants);
            CONSONANTS = KOREAN_DATA.consonants;
            VOWELS = KOREAN_DATA.vowels;
        } else {
            HANGUL_DATA = KOREAN_DATA.vowels.concat(KOREAN_DATA.consonants);
            CONSONANTS = KOREAN_DATA.consonants;
            VOWELS = KOREAN_DATA.vowels;
        }
    } else {
        console.warn('KOREAN_DATA 未加载，使用内置数据');
        HANGUL_DATA = [
            { id: 'ㅏ', name: '아', sound: 'a', description: '嘴巴张大' },
            { id: 'ㅓ', name: '어', sound: 'eo', description: '嘴稍微收圆' },
            { id: 'ㅗ', name: '오', sound: 'o', description: '嘴唇圆形' },
            { id: 'ㅜ', name: '우', sound: 'u', description: '嘴唇圆形' },
            { id: 'ㅡ', name: '으', sound: 'eu', description: '扁平嘴型' },
            { id: 'ㅣ', name: '이', sound: 'i', description: '微笑嘴型' }
        ];
        CONSONANTS = [];
        VOWELS = HANGUL_DATA;
    }
    console.log(`[Data] Level ${level} 数据已加载: ${HANGUL_DATA.length} 个字母`);
}

// ========== 游戏配置 ==========
const GAME_CONFIG = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#F7F7F7',
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [BootScene, MenuScene, LearnScene, PuzzleScene, SyllableScene, WordScene, CompleteScene, AboutScene]
};

// ========== 游戏状态 ==========
const GameState = {
    level: 1,
    score: 0,
    completedLetters: [],
    completedLevels: [],
    currentLetter: null,
    currentIndex: 0,
    settings: { soundEnabled: true, fontSize: 24, ttsEnabled: true }
};

// ========== 场景1: 启动 ==========
class BootScene extends Phaser.Scene {
    constructor() { super('BootScene'); }
    create() {
        console.log('[BootScene] 启动中...');
        this.time.delayedCall(500, () => this.scene.start('MenuScene'));
    }
}

// ========== 场景2: 主菜单 ==========
class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }
    create() {
        console.log('[MenuScene] 主菜单');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;

        this.add.text(cx, cy - 120, '🎮 韩语字母之旅', {
            fontSize: '42px', fontFamily: 'Barlow, sans-serif', color: '#333333'
        }).setOrigin(0.5);

        this.add.text(cx, cy - 60, 'Level 1-2 完整学习系统', {
            fontSize: '20px', fontFamily: 'Noto Sans KR', color: '#666666'
        }).setOrigin(0.5);

        const mkBtn = (txt, y, col, scene) => {
            const b = this.add.text(cx, cy + y, txt, {
                fontSize: '26px', fontFamily: 'Barlow, sans-serif', color: '#FFFFFF',
                backgroundColor: col, padding: { x: 35, y: 15 }, borderRadius: '20px'
            }).setOrigin(0.5).setInteractive({ useHandCursor: true });
            b.on('pointerdown', () => {
                if (scene === 'LearnScene') GameState.level = 1;
                if (scene === 'SyllableScene' || scene === 'WordScene') GameState.level = 2;
                this.scene.start(scene);
            });
            b.on('pointerover', () => b.setScale(1.05));
            b.on('pointerout', () => b.setScale(1));
            return b;
        };

        mkBtn('📚 Level 1: 元音基础', 30, '#4ECDC4', 'LearnScene');
        mkBtn('🔤 Level 2: 音节拼图', 100, '#FF6B6B', 'SyllableScene');
        mkBtn('📖 Level 2: 单词挑战', 170, '#10B981', 'WordScene');
        mkBtn('ℹ️ 关于系统', 240, '#6B7280', 'AboutScene');

        this.add.text(cx, 520, 'v2.0 MVP | © 2026 小星星', {
            fontSize: '12px', color: '#999999'
        }).setOrigin(0.5);
    }
}

// ========== 场景3: 字母学习 (Level 1) ==========
class LearnScene extends Phaser.Scene {
    constructor() { super('LearnScene'); }
    create() {
        console.log('[LearnScene] 字母学习');
        initData(1);
        GameState.currentIndex = 0;
        this.showLetter();
    }
    showLetter() {
        this.cameras.main.setBackgroundColor('#F7F7F7');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;
        const letter = HANGUL_DATA[GameState.currentIndex];

        this.add.text(cx, cy - 120, `第 ${GameState.currentIndex + 1} 个字母`, {
            fontSize: '24px', fontFamily: 'Barlow', color: '#666'
        }).setOrigin(0.5);

        this.add.text(cx, cy - 40, letter.id, {
            fontSize: '180px', fontFamily: 'Noto Sans KR', color: '#FF6B6B', fontStyle: 'bold'
        }).setOrigin(0.5);

        this.add.text(cx, cy + 50, letter.name, {
            fontSize: '28px', fontFamily: 'Noto Sans KR', color: '#333'
        }).setOrigin(0.5);

        this.add.text(cx, cy + 90, letter.description, {
            fontSize: '20px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);

        // TTS按钮
        const ttsBtn = this.add.text(cx, cy + 160, '🔊 播放发音', {
            fontSize: '22px', fontFamily: 'Barlow', color: '#FFF',
            backgroundColor: '#4ECDC4', padding: { x: 30, y: 12 }, borderRadius: '25px'
        }).setOrigin(0.5).setInteractive();
        ttsBtn.on('pointerdown', () => {
            if (GameState.settings.ttsEnabled && 'speechSynthesis' in window) {
                const u = new SpeechSynthesisUtterance(letter.name);
                u.lang = 'ko-KR'; u.rate = 0.8;
                speechSynthesis.speak(u);
            }
        });

        // 导航按钮
        if (GameState.currentIndex > 0) {
            const prevBtn = this.add.text(cx - 200, cy + 250, '← 上一个', {
                fontSize: '18px', fontFamily: 'Barlow', color: '#666'
            }).setOrigin(0.5).setInteractive();
            prevBtn.on('pointerdown', () => {
                GameState.currentIndex--;
                this.scene.restart();
            });
        }

        if (GameState.currentIndex < HANGUL_DATA.length - 1) {
            const nextBtn = this.add.text(cx + 200, cy + 250, '下一个 →', {
                fontSize: '18px', fontFamily: 'Barlow', color: '#10B981'
            }).setOrigin(0.5).setInteractive();
            nextBtn.on('pointerdown', () => {
                GameState.currentIndex++;
                this.scene.restart();
            });
        }

        this.add.text(cx, 560, `${GameState.currentIndex + 1} / ${HANGUL_DATA.length}`, {
            fontSize: '14px', color: '#999'
        }).setOrigin(0.5);

        // 返回
        this.add.text(50, 30, '← 菜单', { fontSize: '14px', color: '#666' })
            .setOrigin(0).setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

// ========== 场景4: 拼图游戏 (Level 1) ==========
class PuzzleScene extends Phaser.Scene {
    constructor() { super('PuzzleScene'); }
    create() {
        console.log('[PuzzleScene] 拼图游戏');
        initData(1);
        GameState.currentLetter = HANGUL_DATA[0];
        this.showPuzzle();
    }
    showPuzzle() {
        this.cameras.main.setBackgroundColor('#F7F7F7');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;
        const letter = HANGUL_DATA[Math.floor(Math.random() * HANGUL_DATA.length)];

        this.add.text(cx, cy - 120, '拼出字母: ' + letter.id, {
            fontSize: '48px', fontFamily: 'Noto Sans KR', color: '#333'
        }).setOrigin(0.5);

        const pieces = letter.id.split('');
        const dropZone = this.add.rectangle(cx, cy + 50, 200, 80, 0xEEEEEE).setStrokeStyle(3, 0xCCCCCC);
        this.add.text(cx, cy + 50, '拖拽字母到此处', { fontSize: '14px', color: '#999' }).setOrigin(0.5);

        pieces.forEach((ch, i) => {
            const p = this.add.text(150 + i * 100, cy + 150, ch, {
                fontSize: '80px', fontFamily: 'Noto Sans KR', color: '#4ECDC4',
                backgroundColor: '#FFF', padding: { x: 20, y: 10 }, borderRadius: '12px'
            }).setOrigin(0.5).setInteractive({ draggable: true });
            p.on('drag', (ptr, dx, dy) => p.setPosition(dx, dy));
            p.on('dragend', () => this.checkDrop(p, dropZone, letter.id));
        });

        this.add.text(cx, 550, '← 返回', { fontSize: '16px', color: '#666' })
            .setOrigin(0.5).setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
    checkDrop(piece, zone, target) {
        const d = Phaser.Math.Distance.Between(piece.x, piece.y, zone.x, zone.y);
        if (d < 80) {
            const kids = zone.children.filter(c => c.text);
            const cur = kids.map(c => c.text).join('');
            if (cur === target) {
                zone.setFillStyle(0x10B981);
                this.time.delayedCall(800, () => {
                    alert('✅ 正确！');
                    this.scene.start('MenuScene');
                });
            } else {
                zone.setFillStyle(0xEF4444);
                this.time.delayedCall(500, () => piece.setPosition(piece.x < 300 ? 150 : 300, 300));
            }
        } else {
            piece.setPosition(piece.x < 300 ? 150 : 300, 300);
        }
        zone.setFillStyle(0xEEEEEE);
    }
}

// ========== 场景5: 音节拼图 (Level 2) ==========
class SyllableScene extends Phaser.Scene {
    constructor() { super('SyllableScene'); }
    create() {
        console.log('[SyllableScene] 音节拼图');
        initData(2);
        this.cameras.main.setBackgroundColor('#F7F7F7');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;

        this.add.text(cx, cy - 180, '🔤 音节拼图', {
            fontSize: '36px', fontFamily: 'Barlow', color: '#333'
        }).setOrigin(0.5);

        this.add.text(cx, cy - 120, '拖拽辅音+元音组成音节', {
            fontSize: '16px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);

        const con = Phaser.Utils.Array.GetRandom(CONSONANTS);
        const vow = Phaser.Utils.Array.GetRandom(VOWELS);
        this.target = con.id + vow.id;

        this.add.text(cx, cy - 60, `目标: ${con.id} + ${vow.id} = ?`, {
            fontSize: '28px', fontFamily: 'Noto Sans KR', color: '#FF6B6B'
        }).setOrigin(0.5);

        const dz = this.add.rectangle(cx, cy + 60, 200, 80, 0xEEEEEE).setStrokeStyle(3, 0xCCCCCC);
        this.add.text(cx, cy + 60, '拖拽到这里', { fontSize: '14px', color: '#999' }).setOrigin(0.5);

        [con, vow].forEach((l, i) => {
            const p = this.add.text(150 + i * 150, cy + 180, l.id, {
                fontSize: '80px', fontFamily: 'Noto Sans KR', color: '#4ECDC4',
                backgroundColor: '#FFF', padding: { x: 20, y: 10 }, borderRadius: '12px'
            }).setOrigin(0.5).setInteractive({ draggable: true });
            p.on('drag', (ptr, dx, dy) => p.setPosition(dx, dy));
            p.on('dragend', () => this.check(p, dz, cx));
        });

        this.add.text(cx, 550, '← 返回菜单', { fontSize: '16px', color: '#666' })
            .setOrigin(0.5).setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
    check(p, dz, cx) {
        const d = Phaser.Math.Distance.Between(p.x, p.y, dz.x, dz.y);
        if (d < 80) {
            const kids = dz.children.filter(c => c.text);
            const cur = kids.map(c => c.text).join('');
            if (cur === this.target) {
                dz.setFillStyle(0x10B981);
                this.time.delayedCall(800, () => {
                    alert('✅ 拼写正确！');
                    this.scene.start('MenuScene');
                });
            } else {
                dz.setFillStyle(0xEF4444);
                this.time.delayedCall(500, () => p.setPosition(p.x < 300 ? 150 : 300, 300));
            }
        } else {
            p.setPosition(p.x < 300 ? 150 : 300, 300);
        }
        dz.setFillStyle(0xEEEEEE);
    }
}

// ========== 场景6: 单词挑战 (Level 2) ==========
class WordScene extends Phaser.Scene {
    constructor() { super('WordScene'); }
    create() {
        console.log('[WordScene] 单词挑战');
        initData(2);
        this.cameras.main.setBackgroundColor('#F7F7F7');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;

        this.add.text(cx, cy - 180, '📖 单词挑战', {
            fontSize: '36px', fontFamily: 'Barlow', color: '#333'
        }).setOrigin(0.5);

        this.words = KOREAN_DATA.words.filter(w => w.level <= 2);
        this.current = Phaser.Utils.Array.GetRandom(this.words);
        this.score = 0; this.total = 5; this.qIdx = 0;

        this.add.text(cx, cy - 120, '提示: ' + this.current.hint, {
            fontSize: '20px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);

        this.qText = this.add.text(cx, cy - 60, '???', {
            fontSize: '64px', fontFamily: 'Noto Sans KR', color: '#333', fontStyle: 'bold'
        }).setOrigin(0.5);
        this.scramble();

        this.ansCont = this.add.container(cx, cy + 60);
        this.makeSlots();

        this.optCont = this.add.container(cx, cy + 160);
        this.makeOpts();

        this.add.text(cx, 520, '← 返回', { fontSize: '16px', color: '#666' })
            .setOrigin(0.5).setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
    scramble() {
        const l = this.current.word.split('');
        Phaser.Utils.Array.Shuffle(l);
        this.qText.setText(l.join(' '));
    }
    makeSlots() {
        this.ansCont.removeAll(true);
        this.slots = [];
        const len = this.current.word.length;
        const startX = -((len - 1) * 40) / 2;
        for (let i = 0; i < len; i++) {
            const s = this.add.rectangle(startX + i * 40, 0, 38, 38, 0xFFFFFF).setStrokeStyle(2, 0xAAAAAA);
            s.letter = null;
            this.ansCont.add(s);
            this.slots.push(s);
        }
    }
    makeOpts() {
        this.optCont.removeAll(true);
        let opts = this.current.word.split('');
        Phaser.Utils.Array.Shuffle(opts);
        if (opts.length < 8) {
            const all = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅓㅗㅜㅡㅣㅐㅔ'.split('');
            while (opts.length < 8) {
                const e = Phaser.Utils.Array.GetRandom(all);
                if (!opts.includes(e)) opts.push(e);
            }
            Phaser.Utils.Array.Shuffle(opts);
        }
        const cols = 4, startX = -((cols - 1) * 45) / 2;
        opts.forEach((l, i) => {
            const x = startX + (i % cols) * 45, y = Math.floor(i / cols) * 45;
            const b = this.add.text(x, y, l, {
                fontSize: '28px', fontFamily: 'Noto Sans KR', color: '#333',
                backgroundColor: '#F7F7F7', padding: { x: 6, y: 3 }
            }).setOrigin(0.5).setInteractive();
            b.on('pointerdown', () => this.pick(b, l));
            this.optCont.add(b);
        });
    }
    pick(b, l) {
        const empty = this.slots.find(s => !s.letter);
        if (!empty) return;
        empty.letter = l;
        const t = this.add.text(0, 0, l, { fontSize: '24px', fontFamily: 'Noto Sans KR', color: '#333' }).setOrigin(0.5);
        empty.add(t);
        b.disableInteractive(true); b.setAlpha(0.3);
        const ans = this.slots.map(s => s.letter).join('');
        if (ans.length === this.current.word.length) {
            if (ans === this.current.word) {
                this.score += 50; this.qIdx++;
                alert('✅ 正确！');
                if (this.qIdx < this.total) {
                    this.current = Phaser.Utils.Array.GetRandom(this.words);
                    this.scramble();
                    this.makeSlots();
                    this.makeOpts();
                } else {
                    alert('🎉 完成所有挑战！');
                    this.scene.start('MenuScene');
                }
            } else {
                this.optCont.children.each(c => { c.destroy(); });
                this.makeOpts();
            }
        }
    }
}

// ========== 场景7: 完成 ==========
class CompleteScene extends Phaser.Scene {
    constructor() { super('CompleteScene'); }
    create() {
        console.log('[CompleteScene]');
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;
        this.add.text(cx, cy - 80, '🎉 恭喜完成学习！', {
            fontSize: '64px', fontFamily: 'Barlow', color: '#10B981'
        }).setOrigin(0.5);
        this.add.text(cx, cy + 40, `你已掌握 ${HANGUL_DATA.length} 个字母`, {
            fontSize: '24px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);
        this.add.text(cx, cy + 120, 'v2.0 更多内容待续...', {
            fontSize: '18px', fontFamily: 'Noto Sans KR', color: '#888'
        }).setOrigin(0.5);
        this.add.text(cx, cy + 200, '← 返回菜单', { fontSize: '24px', color: '#4ECDC4' })
            .setOrigin(0.5).setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

// ========== 场景8: 关于 ==========
class AboutScene extends Phaser.Scene {
    constructor() { super('AboutScene'); }
    create() {
        const cx = this.cameras.main.centerX, cy = this.cameras.main.centerY;
        this.add.text(cx, cy - 100, '韩语字母之旅 v2.0', {
            fontSize: '42px', fontFamily: 'Barlow', color: '#333'
        }).setOrigin(0.5);
        this.add.text(cx, cy - 20, 'Level 1: 元音学习 + 拼图', {
            fontSize: '18px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);
        this.add.text(cx, cy + 30, 'Level 2: 辅音+音节 + 单词挑战', {
            fontSize: '18px', fontFamily: 'Noto Sans KR', color: '#666'
        }).setOrigin(0.5);
        this.add.text(cx, cy + 100, '© 2026 小星星', {
            fontSize: '16px', color: '#999'
        }).setOrigin(0.5);
        this.add.text(cx, cy + 180, '← 返回', { fontSize: '20px', color: '#4ECDC4' })
            .setOrigin(0.5).setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
}

// ========== 启动 ==========
initData(1);
GAME_CONFIG.scene = [BootScene, MenuScene, LearnScene, PuzzleScene, SyllableScene, WordScene, CompleteScene, AboutScene];
console.log('[init] 启动游戏...');
try {
    window.game = new Phaser.Game(GAME_CONFIG);
    console.log('[init] ✅ 游戏已启动');
} catch (e) {
    console.error('[init] ❌', e);
    document.getElementById('game-container').innerHTML = `<h1 style="color:red">启动失败: ${e.message}</h1>`;
}
