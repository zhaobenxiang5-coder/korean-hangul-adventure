//韩语字母数据 - 完整结构化
//Level 1-2 统一数据源

const KOREAN_DATA = {
    // 元音 (10个基础 + 11个复合 = 21)
    vowels: [
        { code: 'ㅏ', name: '아', roman: 'a', type: 'simple', description: '嘴巴张大' },
        { code: 'ㅐ', name: '애', roman: 'ae', type: 'simple', description: '嘴型偏扁' },
        { code: 'ㅓ', name: '어', roman: 'eo', type: 'simple', description: '嘴稍微收圆' },
        { code: 'ㅔ', name: '에', roman: 'e', type: 'simple', description: '嘴型偏扁' },
        { code: 'ㅗ', name: '오', roman: 'o', type: 'simple', description: '嘴唇圆形' },
        { code: 'ㅜ', name: '우', roman: 'u', type: 'simple', description: '嘴唇圆形' },
        { code: 'ㅡ', name: '으', roman: 'eu', type: 'simple', description: '扁平嘴型' },
        { code: 'ㅣ', name: '이', roman: 'i', type: 'simple', description: '微笑嘴型' },
        // 复合元音
        { code: 'ㅑ', name: '야', roman: 'ya', type: 'compound', components:['ㅏ','ㅣ'], description: 'ㅏ + ㅣ' },
        { code: 'ㅒ', name: '얘', roman: 'yae', type: 'compound', components:['ㅐ','ㅣ'], description: 'ㅐ + ㅣ' },
        { code: 'ㅕ', name: '여', roman: 'yeo', type: 'compound', components:['ㅓ','ㅣ'], description: 'ㅓ + ㅣ' },
        { code: 'ㅖ', name: '예', roman: 'ye', type: 'compound', components:['ㅔ','ㅣ'], description: 'ㅔ + ㅣ' },
        { code: 'ㅛ', name: '요', roman: 'yo', type: 'compound', components:['ㅗ','ㅣ'], description: 'ㅗ + ㅣ' },
        { code: 'ㅠ', name: '유', roman: 'yu', type: 'compound', components:['ㅜ','ㅣ'], description: 'ㅜ + ㅣ' },
        { code: 'ㅘ', name: '와', roman: 'wa', type: 'compound', components:['ㅗ','ㅏ'], description: 'ㅗ + ㅏ' },
        { code: 'ㅙ', name: '왜', roman: 'wae', type: 'compound', components:['ㅗ','ㅐ'], description: 'ㅗ + ㅐ' },
        { code: 'ㅚ', name: '외', roman: 'oe', type: 'compound', components:['ㅗ','ㅣ'], description: 'ㅗ + ㅣ' },
        { code: 'ㅝ', name: '워', roman: 'wo', type: 'compound', components:['ㅜ','ㅓ'], description: 'ㅜ + ㅓ' },
        { code: 'ㅞ', name: '웨', roman: 'we', type: 'compound', components:['ㅜ','ㅔ'], description: 'ㅜ + ㅔ' },
        { code: 'ㅟ', name: '위', roman: 'wi', type: 'compound', components:['ㅜ','ㅣ'], description: 'ㅜ + ㅣ' },
        { code: 'ㅢ', name: '의', roman: 'ui', type: 'compound', components:['ㅡ','ㅣ'], description: 'ㅡ + ㅣ' }
    ],
    // 辅音 (14基础 + 5复合 = 19)
    consonants: [
        { code: 'ㄱ', name: '기역', roman: 'g', type: 'plain', description: '舌根音' },
        { code: 'ㄲ', name: '쌍기역', roman: 'kk', type: 'double', base:'ㄱ', description: '紧音' },
        { code: 'ㄴ', name: '니은', roman: 'n', type: 'plain', description: '舌尖音' },
        { code: 'ㄷ', name: '디귿', roman: 'd', type: 'plain', description: '舌尖塞音' },
        { code: 'ㄸ', name: '쌍디귿', roman: 'tt', type: 'double', base:'ㄷ', description: '紧音' },
        { code: 'ㄹ', name: '리을', roman: 'r', type: 'plain', description: '闪音' },
        { code: 'ㅁ', name: '미음', roman: 'm', type: 'plain', description: '双唇音' },
        { code: 'ㅂ', name: '비읍', roman: 'p', type: 'plain', description: '双唇塞音' },
        { code: 'ㅃ', name: '쌍비읍', roman: 'pp', type: 'double', base:'ㅂ', description: '紧音' },
        { code: 'ㅅ', name: '시옷', roman: 's', type: 'plain', description: '齿间音' },
        { code: 'ㅆ', name: '쌍시옷', roman: 'ss', type: 'double', base:'ㅅ', description: '紧音' },
        { code: 'ㅇ', name: '이응', roman: 'ng', type: 'plain', description: '鼻音（韵尾）' },
        { code: 'ㅈ', name: '지읒', roman: 'j', type: 'plain', description: '塞擦音' },
        { code: 'ㅉ', name: '쌍지읒', roman: 'jj', type: 'double', base:'ㅈ', description: '紧音' },
        { code: 'ㅊ', name: '치읓', roman: 'ch', type: 'aspirated', base:'ㅈ', description: '送气音' },
        { code: 'ㅋ', name: '키읔', roman: 'k', type: 'aspirated', base:'ㄱ', description: '送气音' },
        { code: 'ㅌ', name: '티읕', roman: 't', type: 'aspirated', base:'ㄷ', description: '送气音' },
        { code: 'ㅍ', name: '피읖', roman: 'p', type: 'aspirated', base:'ㅂ', description: '送气音' },
        { code: 'ㅎ', name: '히읗', roman: 'h', type: 'plain', description: '声门擦音' }
    ],
    // 常用音节 (辅音+元音组合)
    syllables: [
        // ㄱ系列
        { initial:'ㄱ',medial:'ㅏ',syllable:'가',roman:'ga' },
        { initial:'ㄱ',medial:'ㅓ',syllable:'거',roman:'geo' },
        { initial:'ㄱ',medial:'ㅗ',syllable:'고',roman:'go' },
        { initial:'ㄱ',medial:'ㅜ',syllable:'구',roman:'gu' },
        { initial:'ㄱ',medial:'ㅡ',syllable:'그',roman:'geu' },
        { initial:'ㄱ',medial:'ㅣ',syllable:'기',roman:'gi' },
        // ㄴ系列
        { initial:'ㄴ',medial:'ㅏ',syllable:'나',roman:'na' },
        { initial:'ㄴ',medial:'ㅓ',syllable:'너',roman:'neo' },
        { initial:'ㄴ',medial:'ㅗ',syllable:'노',roman:'no' },
        { initial:'ㄴ',medial:'ㅜ',syllable:'누',roman:'nu' },
        { initial:'ㄴ',medial:'ㅡ',syllable:'느',roman:'neu' },
        { initial:'ㄴ',medial:'ㅣ',syllable:'니',roman:'ni' },
        // ㄷ系列
        { initial:'ㄷ',medial:'ㅏ',syllable:'다',roman:'da' },
        { initial:'ㄷ',medial:'ㅓ',syllable:'더',roman:'deo' },
        { initial:'ㄷ',medial:'ㅗ',syllable:'도',roman:'do' },
        { initial:'ㄷ',medial:'ㅜ',syllable:'두',roman:'du' },
        { initial:'ㄷ',medial:'ㅡ',syllable:'드',roman:'deu' },
        { initial:'ㄷ',medial:'ㅣ',syllable:'디',roman:'di' },
        // ㅁ系列
        { initial:'ㅁ',medial:'ㅏ',syllable:'마',roman:'ma' },
        { initial:'ㅁ',medial:'ㅓ',syllable:'머',roman:'meo' },
        { initial:'ㅁ',medial:'ㅗ',syllable:'모',roman:'mo' },
        { initial:'ㅁ',medial:'ㅜ',syllable:'무',roman:'mu' },
        { initial:'ㅁ',medial:'ㅡ',syllable:'므',roman:'meu' },
        { initial:'ㅁ',medial:'ㅣ',syllable:'미',roman:'mi' },
        // ㅂ系列
        { initial:'ㅂ',medial:'ㅏ',syllable:'바',roman:'ba' },
        { initial:'ㅂ',medial:'ㅓ',syllable:'버',roman:'beo' },
        { initial:'ㅂ',medial:'ㅗ',syllable:'보',roman:'bo' },
        { initial:'ㅂ',medial:'ㅜ',syllable:'부',roman:'bu' },
        { initial:'ㅂ',medial:'ㅡ',syllable:'브',roman:'beu' },
        { initial:'ㅂ',medial:'ㅣ',syllable:'비',roman:'bi' },
        // ㅅ系列
        { initial:'ㅅ',medial:'ㅏ',syllable:'사',roman:'sa' },
        { initial:'ㅅ',medial:'ㅓ',syllable:'서',roman:'seo' },
        { initial:'ㅅ',medial:'ㅗ',syllable:'소',roman:'so' },
        { initial:'ㅅ',medial:'ㅜ',syllable:'수',roman:'su' },
        { initial:'ㅅ',medial:'ㅡ',syllable:'스',roman:'seu' },
        { initial:'ㅅ',medial:'ㅣ',syllable:'시',roman:'si' },
        // ㅇ系列（作为声母）
        { initial:'ㅇ',medial:'ㅏ',syllable:'아',roman:'a' },
        { initial:'ㅇ',medial:'ㅓ',syllable:'어',roman:'eo' },
        { initial:'ㅇ',medial:'ㅗ',syllable:'오',roman:'o' },
        { initial:'ㅇ',medial:'ㅜ',syllable:'우',roman:'u' },
        { initial:'ㅇ',medial:'ㅡ',syllable:'으',roman:'eu' },
        { initial:'ㅇ',medial:'ㅣ',syllable:'이',roman:'i' },
        // ㅈ系列
        { initial:'ㅈ',medial:'ㅏ',syllable:'자',roman:'ja' },
        { initial:'ㅈ',medial:'ㅓ',syllable:'저',roman:'jeo' },
        { initial:'ㅈ',medial:'ㅗ',syllable:'조',roman:'jo' },
        { initial:'ㅈ',medial:'ㅜ',syllable:'주',roman:'ju' },
        { initial:'ㅈ',medial:'ㅡ',syllable:'즈',roman:'jeu' },
        { initial:'ㅈ',medial:'ㅣ',syllable:'지',roman:'ji' },
        // ㅊ系列
        { initial:'ㅊ',medial:'ㅏ',syllable:'차',roman:'cha' },
        { initial:'ㅊ',medial:'ㅓ',syllable:'처',roman:'cheo' },
        { initial:'ㅊ',medial:'ㅗ',syllable:'초',roman:'cho' },
        { initial:'ㅊ',medial:'ㅜ',syllable:'추',roman:'chu' },
        { initial:'ㅊ',medial:'ㅡ',syllable:'츠',roman:'cheu' },
        { initial:'ㅊ',medial:'ㅣ',syllable:'치',roman:'chi' },
        // ㅋ系列
        { initial:'ㅋ',medial:'ㅏ',syllable:'카',roman:'ka' },
        { initial:'ㅋ',medial:'ㅓ',syllable:'커',roman:'keo' },
        { initial:'ㅋ',medial:'ㅗ',syllable:'코',roman:'ko' },
        { initial:'ㅋ',medial:'ㅜ',syllable:'쿠',roman:'ku' },
        { initial:'ㅋ',medial:'ㅡ',syllable:'크',roman:'keu' },
        { initial:'ㅋ',medial:'ㅣ',syllable:'키',roman:'ki' },
        // ㅌ系列
        { initial:'ㅌ',medial:'ㅏ',syllable:'타',roman:'ta' },
        { initial:'ㅌ',medial:'ㅓ',syllable:'터',roman:'teo' },
        { initial:'ㅌ',medial:'ㅗ',syllable:'토',roman:'to' },
        { initial:'ㅌ',medial:'ㅜ',syllable:'투',roman:'tu' },
        { initial:'ㅌ',medial:'ㅡ',syllable:'트',roman:'teu' },
        { initial:'ㅌ',medial:'ㅣ',syllable:'티',roman:'ti' },
        // ㅍ系列
        { initial:'ㅍ',medial:'ㅏ',syllable:'파',roman:'pa' },
        { initial:'ㅍ',medial:'ㅓ',syllable:'퍼',roman:'peo' },
        { initial:'ㅍ',medial:'ㅗ',syllable:'포',roman:'po' },
        { initial:'ㅍ',medial:'ㅜ',syllable:'푸',roman:'pu' },
        { initial:'ㅍ',medial:'ㅡ',syllable:'프',roman:'peu' },
        { initial:'ㅍ',medial:'ㅣ',syllable:'피',roman:'pi' },
        // ㅎ系列
        { initial:'ㅎ',medial:'ㅏ',syllable:'하',roman:'ha' },
        { initial:'ㅎ',medial:'ㅓ',syllable:'허',roman:'heo' },
        { initial:'ㅎ',medial:'ㅗ',syllable:'호',roman:'ho' },
        { initial:'ㅎ',medial:'ㅜ',syllable:'후',roman:'hu' },
        { initial:'ㅎ',medial:'ㅡ',syllable:'흐',roman:'heu' },
        { initial:'ㅎ',medial:'ㅣ',syllable:'히',roman:'hi' }
    ],
    // 常用单词 (Level 2-3)
    words: [
        { word: '가나다', hint: '韩语基本字母顺序', level: 1 },
        { word: '사랑', hint: '爱', level: 2 },
        { word: '학교', hint: '学校', level: 2 },
        { word: '학생', hint: '学生', level: 2 },
        { word: '선생님', hint: '老师', level: 2 },
        { word: '감사합니다', hint: '谢谢', level: 2 },
        { word: '안녕하세요', hint: '你好', level: 2 },
        { word: '여보세요', hint: '喂（电话）', level: 2 },
        { word: '커피', hint: '咖啡', level: 2 },
        { word: '컴퓨터', hint: '电脑', level: 3 },
        { word: '핸드폰', hint: '手机', level: 3 },
        { word: '버스', hint: '公交车', level: 2 },
        { word: '지하철', hint: '地铁', level: 3 },
        { word: '집', hint: '家', level: 1 },
        { word: '학교', hint: '学校', level: 1 },
        { word: '사무실', hint: '办公室', level: 3 }
    ]
};

// 工具函数
const Utils = {
    getVowels: () => KOREAN_DATA.vowels,
    getConsonants: () => KOREAN_DATA.consonants,
    getSyllables: (initial medial) => KOREAN_DATA.syllables.find(s => s.initial === initial && s.medial === medial),
    getWordsByLevel: (lvl) => KOREAN_DATA.words.filter(w => w.level === lvl),
    randomSyllable: () => Phaser.Utils.Array.GetRandom(KOREAN_DATA.syllables),
    randomWord: (level) => {
        const w = Utils.getWordsByLevel(level || 2);
        return Phaser.Utils.Array.GetRandom(w);
    }
};

if (typeof window !== 'undefined') {
    window.KOREAN_DATA = KOREAN_DATA;
    window.Utils = Utils;
}
