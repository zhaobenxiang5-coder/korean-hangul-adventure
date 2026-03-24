// ========== Level 3 韩语数据模块 ==========
// 从 korean-level3.js 提取并优化为模块化结构

const KOREAN_LEVEL3 = {
    // 韵尾系统（받침） - 29种
    finals: [
        // 8种基础韵尾
        { code: 'ㄱ', roman: 'k', name: '기역 종성', example: '국', exampleRoman: 'guk' },
        { code: 'ㄴ', roman: 'n', name: '니은 종성', example: '눈', exampleRoman: 'nun' },
        { code: 'ㄷ', roman: 't', name: '디귿 종성', example: '받', exampleRoman: 'bat' },
        { code: 'ㄹ', roman: 'l', name: '리을 종성', example: '발', exampleRoman: 'bal' },
        { code: 'ㅁ', roman: 'm', name: '미음 종성', example: '삼', exampleRoman: 'sam' },
        { code: 'ㅂ', roman: 'p', name: '비읍 종성', example: '입', exampleRoman: 'ip' },
        { code: 'ㅇ', roman: 'ng', name: '응 종성', example: '강', exampleRoman: 'gang' },
        { code: 'ㅎ', roman: 'h', name: '히읗 종성', example: '박', exampleRoman: 'bak' },

        // 紧音（双辅音）
        { code: 'ㄲ', roman: 'k', name: '쌍기역 종성', example: '긁', exampleRoman: 'geuk' },
        { code: 'ㄸ', roman: 't', name: '쌍디귿 종성', example: '땀', exampleRoman: 'ttam' },
        { code: 'ㅃ', roman: 'p', name: '쌍비읍 종성', example: '값', exampleRoman: 'kap' },
        { code: 'ㅆ', roman: 't', name: '쌍시옷 종성', example: '핏', exampleRoman: 'pit' },
        { code: 'ㅉ', roman: 't', name: '쌍지읒 종성', example: '있', exampleRoman: 'it' },

        // 复合韵尾（实际拼合）
        { code: 'ㄳ', roman: 'k', name: 'ㄱㅅ', example: '넓', exampleRoman: 'yeolb' },
        { code: 'ㄵ', roman: 'n', name: 'ㄴㅈ', example: '앉', exampleRoman: 'an' },
        { code: 'ㄶ', roman: 'n', name: 'ㄴㅎ', example: '놓', exampleRoman: 'noh' },
        { code: 'ㄺ', roman: 'k', name: 'ㄹㄱ', example: '밖', exampleRoman: 'bak' },
        { code: 'ㄻ', roman: 'm', name: 'ㄹㅁ', example: '감', exampleRoman: 'kam' },
        { code: 'ㄼ', roman: 'l', name: 'ㄹㅂ', example: '설', exampleRoman: 'seol' },
        { code: 'ㄽ', roman: 'l', name: 'ㄹㅅ', example: '궤', exampleRoman: 'gwe' },
        { code: 'ㄾ', roman: 'l', name: 'ㄹㅌ', example: '핫', exampleRoman: 'hat' },
        { code: 'ㄿ', roman: 'p', name: 'ㄹㅍ', example: '곱', exampleRoman: 'gop' },
        { code: 'ㅀ', roman: 'l', name: 'ㄹㅎ', example: '놀', exampleRoman: 'nol' },
        { code: 'ㅄ', roman: 'p', name: 'ㅂㅅ', example: '값', exampleRoman: 'kap' },
        { code: 'ㅊ', roman: 't', name: '치읓', example: '있', exampleRoman: 'it' },
        { code: 'ㅋ', roman: 'k', name: '키읔', example: '극', exampleRoman: 'geuk' },
        { code: 'ㅌ', roman: 't', name: '티읕', example: '갓', exampleRoman: 'gat' },
        { code: 'ㅍ', roman: 'p', name: '피읖', example: '갑', exampleRoman: 'gap' }
    ],

    // 复杂音节（辅音+元音+韵尾）
    complexSyllables: [
        // ㄱ系韵尾
        { initial:'ㄱ', medial:'ㅏ', final:'ㄱ', syllable:'각', roman:'gak', meaning:'各' },
        { initial:'ㄱ', medial:'ㅓ', final:'ㄱ', syllable:'억', roman:'eok', meaning:'亿' },
        { initial:'ㄱ', medial:'ㅗ', final:'ㄱ', syllable:'옥', roman:'ok', meaning:'玉' },
        { initial:'ㄱ', medial:'ㅜ', final:'ㄱ', syllable:'욕', roman:'yok', meaning:'浴' },
        { initial:'ㄱ', medial:'ㅡ', final:'ㄱ', syllable:'극', roman:'geuk', meaning:'极' },
        { initial:'ㄱ', medial:'ㅣ', final:'ㄱ', syllable:'익', roman:'ik', meaning:'益' },

        // ㄴ系韵尾
        { initial:'ㄷ', medial:'ㅏ', final:'ㄴ', syllable:'단', roman:'dan', meaning:'短' },
        { initial:'ㄷ', medial:'ㅓ', final:'ㄴ', syllable:'던', roman:'deon', meaning:'殿' },
        { initial:'ㄷ', medial:'ㅗ', final:'ㄴ', syllable:'돈', roman:'don', meaning:'돈' },
        { initial:'ㄷ', medial:'ㅜ', final:'ㄴ', syllable:'둔', roman:'dun', meaning:'遁' },
        { initial:'ㄷ', medial:'ㅡ', final:'ㄴ', syllable:'든', roman:'deun', meaning:'等' },

        // ㅁ系韵尾
        { initial:'ㅂ', medial:'ㅏ', final:'ㅁ', syllable:'밤', roman:'bam', meaning:'夜晚' },
        { initial:'ㅂ', medial:'ㅓ', final:'ㅁ', syllable:'범', roman:'beom', meaning:'范' },
        { initial:'ㅂ', medial:'ㅗ', final:'ㅁ', syllable:'봄', roman:'bom', meaning:'春' },
        { initial:'ㅂ', medial:'ㅜ', final:'ㅁ', syllable:'분', roman:'bun', meaning:'分' },
        { initial:'ㅂ', medial:'ㅡ', final:'ㅁ', syllable:'븀', roman:'byeop', meaning:'彆' },

        // ㅇ系韵尾（鼻音）
        { initial:'ㅇ', medial:'ㅏ', final:'ㅇ', syllable:'앙', roman:'ang', meaning:'昂' },
        { initial:'ㅇ', medial:'ㅓ', final:'ㅇ', syllable:'어', roman:'eong', meaning:'应' },
        { initial:'ㅇ', medial:'ㅗ', final:'ㅇ', syllable:'옹', roman:'ong', meaning:'雍' },
        { initial:'ㅇ', medial:'ㅜ', final:'ㅇ', syllable:'웅', roman:'ung', meaning:'雄' },
        { initial:'ㅇ', medial:'ㅡ', final:'ㅇ', syllable:'응', roman:'eung', meaning:'应' },
        { initial:'ㅇ', medial:'ㅣ', final:'ㅇ', syllable:'잉', roman:'ing', meaning:'ing' }
    ],

    // Level 3 词汇（带韵尾的2-3音节词）
    words: [
        // 学校相关 (15个)
        { word: '학교', hint: '学校', level: 3, breakdown: ['학', '교'], meaning: 'school' },
        { word: '학생', hint: '学生', level: 3, breakdown: ['학', '생'], meaning: 'student' },
        { word: '선생님', hint: '老师', level: 3, breakdown: ['선', '생', '님'], meaning: 'teacher' },
        { word: '교실', hint: '教室', level: 3, breakdown: ['교', '실'], meaning: 'classroom' },
        { word: '수업', hint: '课程', level: 3, breakdown: ['수', '업'], meaning: 'class/lesson' },
        { word: '시험', hint: '考试', level: 3, breakdown: ['시', '험'], meaning: 'exam' },
        { word: '과제', hint: '作业', level: 3, breakdown: ['과', '제'], meaning: 'homework' },
        { word: '방학', hint: '假期', level: 3, breakdown: ['방', '학'], meaning: 'vacation' },
        { word: '성적', hint: '成绩', level: 3, breakdown: ['성', '적'], meaning: 'grades' },
        { word: '시간표', hint: '课表', level: 3, breakdown: ['시', '간', '표'], meaning: 'schedule' },
        { word: '도서관', hint: '图书馆', level: 3, breakdown: ['도', '서', '관'], meaning: 'library' },
        { word: '체육관', hint: '体育馆', level: 3, breakdown: ['체', '육', '관'], meaning: 'gym' },
        { word: '급식', hint: '餐食', level: 3, breakdown: ['급', '식'], meaning: 'school meal' },
        { word: '졸업', hint: '毕业', level: 3, breakdown: ['졸', '업'], meaning: 'graduation' },
        { word: '입학', hint: '入学', level: 3, breakdown: ['입', '학'], meaning: 'enrollment' },

        // 日常生活 (15个)
        { word: '식사', hint: '用餐', level: 3, breakdown: ['식', '사'], meaning: 'meal' },
        { word: '아침', hint: '早晨', level: 3, breakdown: ['아', '침'], meaning: 'morning' },
        { word: '점심', hint: '午餐', level: 3, breakdown: ['점', '심'], meaning: 'lunch' },
        { word: '저녁', hint: '晚餐', level: 3, breakdown: ['저', '녁'], meaning: 'dinner' },
        { word: '취침', hint: '睡觉', level: 3, breakdown: ['취', '침'], meaning: 'sleep' },
        { word: '출근', hint: '上班', level: 3, breakdown: ['출', '근'], meaning: 'go to work' },
        { word: '퇴근', hint: '下班', level: 3, breakdown: ['퇴', '근'], meaning: 'leave work' },
        { word: '휴식', hint: '休息', level: 3, breakdown: ['휴', '식'], meaning: 'rest' },
        { word: '운동', hint: '运动', level: 3, breakdown: ['운', '동'], meaning: 'exercise' },
        { word: '쇼핑', hint: '购物', level: 3, breakdown: ['쇼', '핑'], meaning: 'shopping' },
        { word: '요리', hint: '料理', level: 3, breakdown: ['요', '리'], meaning: 'cooking' },
        { word: '청소', hint: '清洁', level: 3, breakdown: ['청', '소'], meaning: 'cleaning' },
        { word: '세탁', hint: '洗衣', level: 3, breakdown: ['세', '탁'], meaning: 'laundry' },
        { word: '구매', hint: '购买', level: 3, breakdown: ['구', '매'], meaning: 'purchase' },
        { word: '결제', hint: '付款', level: 3, breakdown: ['결', '제'], meaning: 'payment' }
    ],

    // 基础语法点（20个）
    grammarPoints: [
        {
            id: 1,
            name: '은/는 vs 이/가',
            description: '主语标记助词：은/는用于主题，이/가用于主语',
            examples: [
                { sentence: '저는 학생이에요.', translation: '我是学生。', breakdown: ['저', '는', '학생', '이', '에', '요'] },
                { sentence: '학생이 왔어요.', translation: '学生来了。', breakdown: ['학생', '이', '왔', '어', '요'] }
            ],
            practice: [
                { type: 'choice', question: '저 ___ 학생이에요.', options: ['은', '는', '이', '가'], answer: '는' },
                { type: 'choice', question: '학생 ___ 왔어요.', options: ['은', '는', '이', '가'], answer: '이' }
            ]
        },
        {
            id: 2,
            name: '을/를',
            description: '宾语标记助词',
            examples: [
                { sentence: '사과를 먹어요.', translation: '吃苹果。', breakdown: ['사과', '를', '먹', '어', '요'] },
                { sentence: '책을 읽어요.', translation: '读书。', breakdown: ['책', '을', '읽', '어', '요'] }
            ],
            practice: [
                { type: 'choice', question: '사과 ___ 먹어요.', options: ['은', '는', '을', '를'], answer: '를' },
                { type: 'choice', question: '책 ___ 읽어요.', options: ['은', '는', '을', '를'], answer: '을' }
            ]
        },
        // 更多语法点将在后续版本添加...
    ],

    // 短文阅读材料（3-5句短文）
    readingPassages: [
        {
            id: 1,
            title: '나의 하루',
            content: '저는 아침에 일어나서 학교에 갑니다. 수업은 오전 10시에 시작합니다. 점심을 먹고 오후 수업을 듣습니다. 집에 돌아가서 숙제를 합니다. 저는 바쁜 하루를 보냅니다.',
            questions: [
                { question: '학생이 어디에 갑니까?', options: ['학교', '회사', '도서관', '집'], answer: '학교' },
                { question: '수업은 몇 시에 시작합니까?', options: ['9시', '10시', '11시', '2시'], answer: '10시' }
            ]
        }
    ]
};

// 导出到全局（与 Level 2 数据兼容）
if (typeof window !== 'undefined') {
    window.KOREAN_LEVEL3 = KOREAN_LEVEL3;
    // 合并到主数据对象（可选）
    if (typeof KOREAN_DATA !== 'undefined') {
        KOREAN_DATA.level3 = KOREAN_LEVEL3;
    }
}
