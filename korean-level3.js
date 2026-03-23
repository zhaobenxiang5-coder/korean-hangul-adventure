// Level 3 韩语数据 - 完整音节与基础语法
// 包含: 韵尾组合、常用单词、基础语法点

const KOREAN_LEVEL3 = {
    // 韵尾 (最终辅音) - 8种发音
    finals: [
        { code: 'ㄱ', roman: 'k', example: '국', exampleRoman: 'guk' },
        { code: 'ㄲ', roman: 'k', example: '긁', exampleRoman: 'geuk' },
        { code: 'ㄴ', roman: 'n', example: '눈', exampleRoman: 'nun' },
        { code: 'ㄷ', roman: 't', example: '받', exampleRoman: 'bat' },
        { code: 'ㄸ', roman: 't', example: '땀', exampleRoman: 'ttam' },
        { code: 'ㄹ', roman: 'l', example: '발', exampleRoman: 'bal' },
        { code: 'ㅁ', roman: 'm', example: '삼', exampleRoman: 'sam' },
        { code: 'ㅂ', roman: 'p', example: '입', exampleRoman: 'ip' },
        { code: 'ㅃ', roman: 'p', example: '값', exampleRoman: 'kap' },
        { code: 'ㅅ', roman: 't', example: '갓', exampleRoman: 'gat' },
        { code: 'ㅆ', roman: 't', example: '핏', exampleRoman: 'pit' },
        { code: 'ㅇ', roman: 'ng', example: '강', exampleRoman: 'gang' },
        { code: 'ㅈ', roman: 't', example: '있', exampleRoman: 'it' },
        { code: 'ㅉ', roman: 't', example: '있', exampleRoman: 'it' },
        { code: 'ㅊ', roman: 't', example: '있', exampleRoman: 'it' },
        { code: 'ㅋ', roman: 'k', example: '극', exampleRoman: 'geuk' },
        { code: 'ㅌ', roman: 't', example: '갓', exampleRoman: 'gat' },
        { code: 'ㅍ', roman: 'p', example: '갑', exampleRoman: 'gap' },
        { code: 'ㅎ', roman: 'h', example: '박', exampleRoman: 'bak' }
    ],
    // 复杂音节 (带韵尾)
    complexSyllables: [
        // ㄱ系韵尾
        { initial:'ㄱ', medial:'ㅏ', final:'ㄱ', syllable:'각', roman:'gak' },
        { initial:'ㄱ', medial:'ㅓ', final:'ㄱ', syllable:'억', roman:'eok' },
        { initial:'ㄱ', medial:'ㅗ', final:'ㄱ', syllable:'옥', roman:'ok' },
        { initial:'ㄱ', medial:'ㅜ', final:'ㄱ', syllable:'욕', roman:'yok' },
        { initial:'ㄱ', medial:'ㅡ', final:'ㄱ', syllable:'극', roman:'geuk' },
        { initial:'ㄱ', medial:'ㅣ', final:'ㄱ', syllable:'익', roman:'ik' },
        // ㄴ系韵尾
        { initial:'ㄷ', medial:'ㅏ', final:'ㄴ', syllable:'단', roman:'dan' },
        { initial:'ㄷ', medial:'ㅓ', final:'ㄴ', syllable:'던', roman:'deon' },
        { initial:'ㄷ', medial:'ㅗ', final:'ㄴ', syllable:'돈', roman:'don' },
        { initial:'ㄷ', medial:'ㅜ', final:'ㄴ', syllable:'둔', roman:'dun' },
        { initial:'ㄷ', medial:'ㅡ', final:'ㄴ', syllable:'든', roman:'deun' },
        { initial:'ㄷ', medial:'ㅣ', final:'ㄴ', syllable:'딘', roman:'din' },
        // ㅁ系韵尾
        { initial:'ㅂ', medial:'ㅏ', final:'ㅁ', syllable:'밤', roman:'bam' },
        { initial:'ㅂ', medial:'ㅓ', final:'ㅁ', syllable:'범', roman:'beom' },
        { initial:'ㅂ', medial:'ㅗ', final:'ㅁ', syllable:'봄', roman:'bom' },
        { initial:'ㅂ', medial:'ㅜ', final:'ㅁ', syllable:'분', roman:'bun' },
        { initial:'ㅂ', medial:'ㅡ', final:'ㅁ', syllable:'븀', roman:'byeop' },
        { initial:'ㅂ', medial:'ㅣ', final:'ㅁ', syllable:'빔', roman:'bim' },
        // 更多组合...
        // 示范用，实际需要完整生成所有可能组合
    ],
    // Level 3 单词 (带韵尾的2-3音节词)
    words: [
        { word: '학교', hint: '学校', level:3, breakdown:['학','교'] },
        { word: '학생', hint: '学生', level:3, breakdown:['학','생'] },
        { word: '선생님', hint: '老师', level:3, breakdown:['선','생','님'] },
        { word: '사과', hint: '苹果', level:3, breakdown:['사','과'] },
        { word: '바나나', hint: '香蕉', level:3, breakdown:['바','나','나'] },
        { word: '컴퓨터', hint: '电脑', level:3, breakdown:['컴','퓨','터'] },
        { word: '핸드폰', hint: '手机', level:3, breakdown:['핸','드','폰'] },
        { word: '우산', hint: '雨伞', level:3, breakdown:['우','산'] },
        { word: '의자', hint: '椅子', level:3, breakdown:['의','자'] },
        { word: '책상', hint: '桌子', level:3, breakdown:['책','상'] }
    ],
    // 基础语法点
    grammar: [
        {
            id: 'topic-particle',
            name: '主格助词 - 은/는',
            description: '表示主语或主题',
            examples: [
                { sentence: '나는 학생입니다', roman: 'na-neun hakseng', meaning: '我是学生' }
            ]
        },
        {
            id: 'object-particle',
            name: '宾格助词 - 을/를',
            description: '表示宾语',
            examples: [
                { sentence: '사과를 먹어요', roman: 'sa-gwa-reul meogeoyo', meaning: '吃苹果' }
            ]
        },
        {
            id: 'location-particle',
            name: '地点助词 - 에/에서',
            description: '表示地点（行动发生点）',
            examples: [
                { sentence: '학교에 가요', roman: 'hak-gyeo-gayo', meaning: '去学校' }
            ]
        }
    ]
};

// 工具：生成所有可能的音节组合
function generateAllSyllables() {
    const initials = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    const medials = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
    const finals = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

    const syllables = [];
    initials.forEach(initial => {
        medials.forEach(medial => {
            finals.forEach(final => {
                if (final && !isValidFinalCombination(initial, final)) return;
                const syl = initial + medial + final;
                if (syl.length === 2 || (syl.length === 3 && final && final.length===1)) {
                    syllables.push({
                        initial, medial, final,
                        syllable: syl,
                        roman: romanize(syl)
                    });
                }
            });
        });
    });
    return syllables;
}

// 简化的罗马化（实际需完整实现）
function romanize(syllable) {
    const map = {
        'ㄱ':'g','ㅋ':'k','ㄲ':'kk',
        'ㄴ':'n',
        'ㄷ':'d','ㅌ':'t','ㄸ':'tt',
        'ㄹ':'r',
        'ㅁ':'m',
        'ㅂ':'p','ㅍ':'p','ㅃ':'pp',
        'ㅅ':'s','ㅆ':'ss','ㅈ':'j','ㅉ':'jj','ㅊ':'ch',
        'ㅇ':'','ㅎ':'h',
        'ㅏ':'a','ㅐ':'ae','ㅑ':'ya','ㅒ':'yae','ㅓ':'eo','ㅔ':'e','ㅕ':'yeo','ㅖ':'ye',
        'ㅗ':'o','ㅘ':'wa','ㅙ':'wae','ㅚ':'oe','ㅛ':'yo',
        'ㅜ':'u','ㅝ':'wo','ㅞ':'we','ㅟ':'wi','ㅠ':'yu',
        'ㅡ':'eu','ㅢ':'ui','ㅣ':'i'
    };
    let result = '';
    for (let ch of syllable) {
        if (map[ch]) result += map[ch];
    }
    return result;
}

// 简化的韵尾组合验证（实际需要完整规则）
function isValidFinalCombination(initial, final) {
    // 这里简化，实际有复杂规则
    return true;
}

if (typeof window !== 'undefined') {
    window.KOREAN_LEVEL3 = KOREAN_LEVEL3;
    window.generateAllSyllables = generateAllSyllables;
}
