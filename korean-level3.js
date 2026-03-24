// Level 3 韩语数据 - 韵尾系统 + 基础语法 + 读写训练
// 包含: 韵尾组合、句子示例、语法点、读写材料

const KOREAN_LEVEL3 = {
    // ========== 韵尾系统 (받침) ==========
    finals: [
        // 8种基础韵尾发音
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
        // 复合韵尾（特殊）
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

    // 复杂音节（辅音+元音+韵尾）- 精选常用组合
    complexSyllables: [
        // ㄱ系韵尾 (가-힣) 常用组合
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
        { initial:'ㄷ', medial:'ㅣ', final:'ㄴ', syllable:'딘', roman:'din', meaning:'din' },
        // ㅁ系韵尾
        { initial:'ㅂ', medial:'ㅏ', final:'ㅁ', syllable:'밤', roman:'bam', meaning:'夜晚' },
        { initial:'ㅂ', medial:'ㅓ', final:'ㅁ', syllable:'범', roman:'beom', meaning:'范' },
        { initial:'ㅂ', medial:'ㅗ', final:'ㅁ', syllable:'봄', roman:'bom', meaning:'春' },
        { initial:'ㅂ', medial:'ㅜ', final:'ㅁ', syllable:'분', roman:'bun', meaning:'分' },
        { initial:'ㅂ', medial:'ㅡ', final:'ㅁ', syllable:'븀', roman:'byeop', meaning:'彆' },
        { initial:'ㅂ', medial:'ㅣ', final:'ㅁ', syllable:'빔', roman:'bim', meaning:'빔' },
        // ㅅ系韵尾（常发[t]音）
        { initial:'ㅅ', medial:'ㅏ', final:'ㅅ', syllable:'삯', roman:'sat', meaning:'삯' },
        { initial:'ㅅ', medial:'ㅓ', final:'ㅅ', syllable:'섯', roman:'seot', meaning:'說' },
        { initial:'ㅅ', medial:'ㅗ', final:'ㅅ', syllable:'솟', roman:'sot', meaning:' sod' },
        // ㅇ系韵尾（鼻音）
        { initial:'ㅇ', medial:'ㅏ', final:'ㅇ', syllable:'앙', roman:'ang', meaning:'昂' },
        { initial:'ㅇ', medial:'ㅓ', final:'ㅇ', syllable:'어', roman:'eong', meaning:'应' },
        { initial:'ㅇ', medial:'ㅗ', final:'ㅇ', syllable:'옹', roman:'ong', meaning:'雍' },
        { initial:'ㅇ', medial:'ㅜ', final:'ㅇ', syllable:'웅', roman:'ung', meaning:'雄' },
        { initial:'ㅇ', medial:'ㅡ', final:'ㅇ', syllable:'응', roman:'eung', meaning:'应' },
        { initial:'ㅇ', medial:'ㅣ', final:'ㅇ', syllable:'잉', roman:'ing', meaning:'ing' },
        // ㅎ系韵尾（送气）
        { initial:'ㅎ', medial:'ㅏ', final:'ㅎ', syllable:'핳', roman:'hah', meaning:'핳' },
        { initial:'ㅎ', medial:'ㅓ', final:'ㅎ', syllable:'赫', roman:'hyeok', meaning:'赫' },
        // 更多实际词汇
        { initial:'ㅂ', medial:'ㅘ', final:'ㄴ', syllable:'반', roman:'ban', meaning:'班' },
        { initial:'ㅂ', medial:'ㅜ', final:'ㄴ', syllable:'분', roman:'bun', meaning:'分' },
        { initial:'ㅅ', medial:'ㅠ', final:'ㄴ', syllable:'순', roman:'sun', meaning:'顺' },
        { initial:'ㄷ', medial:'ㅠ', final:'ㄴ', syllable:'둔', roman:'dun', meaning:'遁' },
        { initial:'ㅈ', medial:'ㅝ', final:'ㄴ', syllable:'전', roman:'jeon', meaning:'前' },
        { initial:'ㅎ', medial:'ㅝ', final:'ㄴ', syllable:'환', roman:'hwan', meaning:'患' }
    ],

    // ========== 实用词汇 (带韵尾的2-3音节词) ==========
    words: [
        // 学校相关
        { word: '학교', hint: '学校', level:3, breakdown:['학','교'], meaning:'school' },
        { word: '학생', hint: '学生', level:3, breakdown:['학','생'], meaning:'student' },
        { word: '선생님', hint: '老师', level:3, breakdown:['선','생','님'], meaning:'teacher' },
        { word: '교실', hint: '教室', level:3, breakdown:['교','실'], meaning:'classroom' },
        { word: '수업', hint: '课程', level:3, breakdown:['수','업'], meaning:'class/lesson' },
        { word: '시험', hint: '考试', level:3, breakdown:['시','험'], meaning:'exam' },
        { word: '과제', hint: '作业', level:3, breakdown:['과','제'], meaning:'homework' },
        { word: '방학', hint: '假期', level:3, breakdown:['방','학'], meaning:'vacation' },
        // 日常生活
        { word: '식사', hint: '用餐', level:3, breakdown:['식','사'], meaning:'meal' },
        { word: '아침', hint: '早晨', level:3, breakdown:['아','침'], meaning:'morning' },
        { word: '점심', hint: '午餐', level:3, breakdown:['점','심'], meaning:'lunch' },
        { word: '저녁', hint: '晚餐', level:3, breakdown:['저','녁'], meaning:'dinner' },
        { word: '취침', hint: '睡觉', level:3, breakdown:['취','침'], meaning:'sleep' },
        { word: '출근', hint: '上班', level:3, breakdown:['출','근'], meaning:'go to work' },
        { word: '퇴근', hint: '下班', level:3, breakdown:['퇴','근'], meaning:'leave work' },
        // 家庭物品
        { word: '가방', hint: '书包', level:3, breakdown:['가','방'], meaning:'bag' },
        { word: '책상', hint: '桌子', level:3, breakdown:['책','상'], meaning:'desk' },
        { word: '의자', hint: '椅子', level:3, breakdown:['의','자'], meaning:'chair' },
        { word: '컴퓨터', hint: '电脑', level:3, breakdown:['컴','퓨','터'], meaning:'computer' },
        { word: '핸드폰', hint: '手机', level:3, breakdown:['핸','드','폰'], meaning:'mobile phone' },
        { word: '텔레비전', hint: '电视', level:3, breakdown:['텔','레','비','전'], meaning:'TV' },
        { word: '에어컨', hint: '空调', level:3, breakdown:['에','어','컨'], meaning:'air conditioner' },
        { word: '냉장고', hint: '冰箱', level:3, breakdown:['냉','장','고'], meaning:'refrigerator' },
        // 交通出行
        { word: '버스', hint: '公交车', level:3, breakdown:['버','스'], meaning:'bus' },
        { word: '지하철', hint: '地铁', level:3, breakdown:['지','하','철'], meaning:'subway' },
        { word: '택시', hint: '出租车', level:3, breakdown:['택','시'], meaning:'taxi' },
        { word: '기차', hint: '火车', level:3, breakdown:['기','차'], meaning:'train' },
        { word: '비행기', hint: '飞机', level:3, breakdown:['비','행','기'], meaning:'airplane' },
        // 兴趣爱好
        { word: '독서', hint: '读书', level:3, breakdown:['독','서'], meaning:'reading' },
        { word: '음악', hint: '音乐', level:3, breakdown:['음','악'], meaning:'music' },
        { word: '영화', hint: '电影', level:3, breakdown:['영','화'], meaning:'movie' },
        { word: '운동', hint: '运动', level:3, breakdown:['운','동'], meaning:'exercise' },
        { word: '게임', hint: '游戏', level:3, breakdown:['게','임'], meaning:'game' }
    ],

    // ========== 基础语法点（20个核心语法） ==========
    grammar: [
        {
            id: 'topic-particle',
            name: '主格助词 - 은/는',
            korean: '은/는',
            description: '标识句子主题，用于对比或强调',
            rules: [
                '以音节结尾（韵尾）→ 用「은」',
                '以元音结尾 → 用「는」'
            ],
            examples: [
                { sentence: '나는 학생입니다', roman: 'na-neun hakseng', meaning: '我是学生' },
                { sentence: '오늘은 추워요', roman: 'oneul-eun chuwoyo', meaning: '今天冷' },
                { sentence: '학생들은 공부해요', roman: 'hagsaeng-deul-eun gongbuhaeyo', meaning: '学生们学习' }
            ],
            commonMistakes: [
                { wrong: '학생은 저가 아닙니다', right: '학생은 저입니다', reason: '主题标记 použité 对比，不用于存在句' }
            ]
        },
        {
            id: 'object-particle',
            name: '宾格助词 - 을/를',
            korean: '을/를',
            description: '标识动作的直接宾语',
            rules: [
                '以音节结尾 → 用「을」',
                '以元音结尾 → 用「를」'
            ],
            examples: [
                { sentence: '사과를 먹어요', roman: 'sa-gwa-reul meogeoyo', meaning: '吃苹果' },
                { sentence: '책을 읽어요', roman: 'chaeg-eul ilgeoyo', meaning: '读书' },
                { sentence: '컴퓨터를 사용해요', roman: 'keompyuteo-reul sayonghaeyo', meaning: '使用电脑' }
            ]
        },
        {
            id: 'location-particle',
            name: '地点助词 - 에/에서',
            korean: '에/에서',
            description: '에：目的地（to）；에서：地点（at/in）',
            rules: [
                '表示方向目的地 → 「에」',
                '表示动作发生地点 → 「에서」',
                '存在句（有/在）→ 「에」'
            ],
            examples: [
                { sentence: '학교에 가요', roman: 'hak-gyeo-gayo', meaning: '去学校' },
                { sentence: '도서관에서 공부해요', roman: 'doseogwan-eseo gongbuhaeyo', meaning: '在图书馆学习' },
                { sentence: '한국에 살아요', roman: 'hanguk-e salayo', meaning: '住在韩国' }
            ]
        },
        {
            id: 'possessive-particle',
            name: '所属助词 - 의',
            korean: '의',
            description: '表示所属关系（的）',
            rules: ['放在名词后表示修饰'],
            examples: [
                { sentence: '나의 책', roman: 'na-ui chaeg', meaning: '我的书' },
                { sentence: '학생의 가방', roman: 'hagsaeng-ui bagang', meaning: '学生的包' }
            ]
        },
        {
            id: 'time-particle',
            name: '时间助词 - 에',
            korean: '에',
            description: '标识时间点',
            rules: ['具体时间点 + 에'],
            examples: [
                { sentence: '아침 7시에 일어나요', roman: 'achim 7-si-e ireonayo', meaning: '早上7点起床' },
                { sentence: '월요일에 학교 가요', roman: 'wolloireu-e hakgyo gayo', meaning: '周一去学校' }
            ]
        },
        {
            id: 'adverbial-particle',
            name: '状语助词 - 로/으로',
            korean: '로/으로',
            description: '表示方式、手段、材料',
            rules: [
                '以元音结尾 → 「로」',
                '以辅音结尾 → 「으로」'
            ],
            examples: [
                { sentence: ' buses로 가요', roman: 'buseuro gayo', meaning: '坐公交车去' },
                { sentence: '한국어로 말해요', roman: 'hanguk-eo-ro malhaeyo', meaning: '用韩语说' }
            ]
        },
        {
            id: 'conjunction-1',
            name: '连接语尾 - 고',
            korean: '-고',
            description: '连接两个动作，表示先后或并列',
            rules: [
                '动词词干 + 「고」',
                '可连接两个完整句子'
            ],
            examples: [
                { sentence: '먹고 자요', roman: 'mok-go jayo', meaning: '吃了睡' },
                { sentence: '학교에 가고 공부해요', roman: 'hakgyo-e gago gongbuhaeyo', meaning: '去学校然后学习' }
            ]
        },
        {
            id: 'conjunction-2',
            name: '连接语尾 - 서',
            korean: '-서',
            description: '表示原因或手段（因为/用）',
            rules: [
                '动词词干 + 「서」',
                '表示原因：因为...',
                '表示方式：用（手段）'
            ],
            examples: [
                { sentence: '피곤해서 자요', roman: 'pigontaeseo jayo', meaning: '因为累所以睡' },
                { sentence: '버스서 가요', roman: 'beoseoseo gayo', meaning: '坐公交去' }
            ]
        },
        {
            id: 'conjunction-3',
            name: '连接语尾 - 지만',
            korean: '-지만',
            description: '表示转折（但是）',
            rules: ['动词/形容词词干 + 「지만」'],
            examples: [
                { sentence: '비가 오지만 가요', roman: 'bi-ga ojiman gayo', meaning: '虽然下雨但去' },
                { sentence: '좋지만 비싸요', roman: 'johjiman bissayo', meaning: '好但是贵' }
            ]
        },
        {
            id: 'past-tense',
            name: '过去时 - 았/었',
            korean: '-았/었',
            description: '表示过去发生的动作',
            rules: [
                '以元音结尾 → 「았」',
                '以辅音结尾 → 「었」',
                '「하다」→ 「했다」'
            ],
            examples: [
                { sentence: '먹었어요', roman: 'meogeosseoyo', meaning: '吃了' },
                { sentence: '갔어요', roman: 'gasseoyo', meaning: '去了' },
                { sentence: '했어요', roman: 'haesseoyo', meaning: '做了' }
            ]
        },
        {
            id: 'future-intention',
            name: '将来意图 - ㄹ 거예요',
            korean: '-ㄹ 거예요',
            description: '表示将来意图（打算/要）',
            rules: [
                '以辅音结尾 → 「ㄹ 거예요」',
                '以元音结尾 → 「ㄹ 거예요」',
                '「하다」→ 「할 거예요」'
            ],
            examples: [
                { sentence: '내일 공부할 거예요', roman: 'naeil gongbuhal geoyeyo', meaning: '明天要学习' },
                { sentence: '먹을 거예요', roman: 'meogeul geoyeyo', meaning: '要吃' }
            ]
        },
        {
            id: 'polite-form',
            name: '敬语基础 - 아요/어요',
            korean: '-아요/-어요',
            description: '日常敬语形式',
            rules: [
                '以元音结尾 → 「아요」',
                '以辅音结尾 → 「어요」'
            ],
            examples: [
                { sentence: '가요', roman: 'gayo', meaning: '去（敬语）' },
                { sentence: '먹어요', roman: 'meogeoyo', meaning: '吃（敬语）' },
                { sentence: '있어요', roman: 'isseoyo', meaning: '有（敬语）' }
            ]
        },
        {
            id: 'negation',
            name: '否定 - 안/못',
            korean: '안/못',
            description: '안：否定事实；못：无法做',
            rules: [
                '动词前 + 「안」→ 不做',
                '动词前 + 「못」→ 不能/无法'
            ],
            examples: [
                { sentence: '안 먹어요', roman: 'an meogeoyo', meaning: '不吃' },
                { sentence: '못 먹어요', roman: 'mot meogeoyo', meaning: '不能吃/吃不了' }
            ]
        },
        {
            id: 'question-particle',
            name: '疑问词 - 까',
            korean: '-까',
            description: '表示疑问（吗）',
            rules: ['动词/形容词词干 + 「까」'],
            examples: [
                { sentence: '가고 싶어요? → 가고 싶어요?', roman: 'gago sipeoyo?', meaning: '想去吗？' },
                { sentence: '학생이에요? → 학생이에요?', roman: 'hagsaeng-ieyo?', meaning: '是学生吗？' }
            ]
        },
        {
            id: 'exist-verb',
            name: '存在动词 - 있다/계시다',
            korean: '있다/계시다',
            description: '있다：有/在（物体）；계시다：有/在（人/尊称）',
            rules: [
                '物品 → 「있다」',
                '人/长辈 → 「계시다」'
            ],
            examples: [
                { sentence: '책이 있어요', roman: 'chaeg-i isseoyo', meaning: '有书' },
                { sentence: '선생님이 계세요', roman: 'seonsaengnim-i gyeseyo', meaning: '老师在' }
            ]
        },
        {
            id: 'direction-verbs',
            name: '方向动词 - 오다/가다',
            korean: '오다/가다',
            description: '오다：来（向说话者）；가다：去（离开说话者）',
            examples: [
                { sentence: '학교에 가요', roman: 'hakgyo-e gayo', meaning: '去学校' },
                { sentence: '집에 와요', roman: 'jibe wayo', meaning: '来我家' }
            ]
        },
        {
            id: 'ability-verb',
            name: '能力表达 - 할 수 있다',
            korean: '할 수 있다',
            description: '表示能力（会/能）',
            rules: ['动词词干 + 「할 수 있다」'],
            examples: [
                { sentence: '한국어할 수 있어요', roman: 'hanguk-eo hal su isseoyo', meaning: '会说韩语' },
                { sentence: '수영할 수 있어요', roman: 'suyeonghal su isseoyo', meaning: '会游泳' }
            ]
        },
        {
            id: 'desire-verb',
            name: '愿望表达 - 고 싶다',
            korean: '-고 싶다',
            description: '表示愿望（想要）',
            rules: ['动词词干 + 「고 싶다」'],
            examples: [
                { sentence: '먹고 싶어요', roman: 'meok-go sipeoyo', meaning: '想吃' },
                { sentence: '가고 싶어요', roman: 'gago sipeoyo', meaning: '想去' }
            ]
        },
        {
            id: 'permission',
            name: '许可 - 도 돼요',
            korean: '-도 돼요',
            description: '表示许可（可以）',
            rules: ['动词 + 「도 돼요」'],
            examples: [
                { sentence: '먹어도 돼요', roman: 'meogeodo doeyo', meaning: '可以吃' },
                { sentence: '가도 돼요', roman: 'gado doeyo', meaning: '可以去' }
            ]
        },
        {
            id: 'obligation',
            name: '義務 - 으세요',
            korean: '-으세요',
            description: '表示义务/应该（应该...）',
            rules: [
                '以元音结尾 → 「세요」',
                '以辅音结尾 → 「으세요」'
            ],
            examples: [
                { sentence: '공부하세요', roman: 'gongbu-haseyo', meaning: '请学习' },
                { sentence: '먹으세요', roman: 'meog-euseyo', meaning: '请吃' }
            ]
        },
        {
            id: 'degree-adverb',
            name: '程度副词 - 아/어요',
            korean: ' Very/Quite + 아/어요',
            description: '修饰形容词，表示程度',
            rules: [
                '形容词 + 「아/어요」表示程度变化'
            ],
            examples: [
                { sentence: '매워요', roman: 'maewoyo', meaning: '很辣' },
                { sentence: '시원해요', roman: 'siwonhaeyo', meaning: '很凉快' }
            ]
        },
        {
            id: 'comparison',
            name: '比较 - 보다',
            korean: '-보다',
            description: '表示比较（比...更）',
            rules: ['名词 + 「보다」表示比较基准'],
            examples: [
                { sentence: '철수가 영희보다 예뻐요', roman: 'cheolsu-ga yeonghui-boda yeppeoyo', meaning: '哲秀比英姬漂亮' }
            ]
        },
        {
            id: 'choice-question',
            name: '选择疑问 - 또는',
            korean: '또는',
            description: '表示选择（或者）',
            rules: ['在选项之间使用「또는」'],
            examples: [
                { sentence: '사과 또는 바나나', roman: 'sagwa tteungeun banana', meaning: '苹果或香蕉' }
            ]
        }
    ],

    // ========== 句子示例（用于拼写和阅读训练） ==========
    sentences: [
        // 简单SOV句子
        { level:3, korean: '나는 학생입니다', roman: 'na-neun hakseng-imnida', meaning: '我是学生' },
        { level:3, korean: '그는 선생님입니다', roman: 'geu-neun seonsaengnim-imnida', meaning: '他是老师' },
        { level:3, korean: '저는 한국어를 공부해요', roman: 'jeo-neun hanguk-eo-reul gongbuhaeyo', meaning: '我学习韩语' },
        { level:3, korean: '학생들은 책을 읽어요', roman: 'hagsaeng-deul-eun chaeg-eul ilgeoyo', meaning: '学生们读书' },
        { level:3, korean: '엄마는 밥을 만들어요', roman: 'eomma-neun bap-eul mandeureoyo', meaning: '妈妈做饭' },
        // 地点状语
        { level:3, korean: '학교에 가요', roman: 'hakgyo-e gayo', meaning: '去学校' },
        { level:3, korean: '도서관에서 공부해요', roman: 'doseogwan-eseo gongbuhaeyo', meaning: '在图书馆学习' },
        { level:3, korean: '집에 돌아와요', roman: 'jibe dora-wayo', meaning: '回家' },
        { level:3, korean: '식당에서 먹어요', roman: 'sikdang-eseo meogeoyo', meaning: '在餐厅吃' },
        // 时间状语
        { level:3, korean: '아침에 일어나요', roman: 'achim-e ireonayo', meaning: '早上起床' },
        { level:3, korean: '저녁에 먹어요', roman: 'jeonyeok-e meogeoyo', meaning: '晚上吃' },
        { level:3, korean: '방학에 여행가요', roman: 'banghak-e yeohaeng-gayo', meaning: '假期去旅行' },
        // 连接两个动作
        { level:3, korean: '学校에 가고 공부해요', roman: 'hakgyo-e gago gongbuhaeyo', meaning: '去学校然后学习' },
        { level:3, korean: '먹고 자요', roman: 'meok-go jayo', meaning: '吃了睡' },
        { level:3, korean: '일하고 휴식해요', roman: 'ilhago hyusikhaeyo', meaning: '工作然后休息' },
        // 过去时
        { level:3, korean: '어제 학교에 갔어요', roman: 'eoje hakgyo-e gasseoyo', meaning: '昨天去学校了' },
        { level:3, korean: '어제 책을 읽었어요', roman: 'eoje chaeg-eul ilgeosseoyo', meaning: '昨天读书了' },
        { level:3, korean: '어제 친구를 만났어요', roman: 'eoje chingureul mannatseoyo', meaning: '昨天见了朋友' },
        // 将来意图
        { level:3, korean: '내일 학교에 갈 거예요', roman: 'naeil hakgyo-e gal geoyeyo', meaning: '明天要去学校' },
        { level:3, korean: '내일 공부할 거예요', roman: 'naeil gongbu-hal geoyeyo', meaning: '明天要学习' },
        // 复数扩展
        { level:3, korean: '가방이 필요해요', roman: 'bagang-i piryohaeyo', meaning: '需要包' },
        { level:3, korean: '물을 마셔요', roman: 'mul-eul masyeoyo', meaning: '喝水' },
        { level:3, korean: '버스를 타요', roman: 'beoseu-reul tayo', meaning: '坐公交' },
        { level:3, korean: '지하철을 타요', roman: 'jihacheol-eul tayo', meaning: '坐地铁' },
        { level:3, korean: '한국어를 공부해요', roman: 'hanguk-eo-reul gongbuhaeyo', meaning: '学习韩语' },
        { level:3, korean: '영화를 봐요', roman: 'yeonghwa-reul bwayo', meaning: '看电影' },
        { level:3, korean: '음악을 들어요', roman: 'eumak-eul deureoyo', meaning: '听音乐' },
        { level:3, korean: '운동해요', roman: 'undonghaeyo', meaning: '运动' },
        { level:3, korean: '게임을 해요', roman: 'gaim-eul haeyo', meaning: '玩游戏' }
    ],

    // ========== 读写训练材料 ==========
    readingPassages: [
        {
            id: 'intro1',
            title: '我的日常生活',
            level: 3,
            text: '저는 학생입니다. 아침에 일어나서 학교에 가요. 학교에서 한국어를 공부해요. 오후에 도서관에서 책을 읽어요. 저녁에 집에 돌아와서 저나 homework를 해요. 그리고 일찍 자요.',
            comprehensionQuestions: [
                { question: '他是做什么的？', options: ['学生','老师','上班族'], answer: 0 },
                { question: '下午去哪里？', options: ['学校','图书馆','家'], answer: 1 },
                { question: '晚上做什么？', options: ['学习','工作','玩游戏'], answer: 3 }
            ]
        },
        {
            id: 'intro2',
            title: '我的家人',
            level: 3,
            text: '우리 가족은 네 명이에요. 아버지, 어머니, 언니, 그리고 저. 아버지는 회사에 가요. 어머니는 집에 있어요. 언니는 대학교에 다녀요. 저는 고등학교에 다녀요.',
            comprehensionQuestions: [
                { question: '家里有几口人？', options: ['3','4','5'], answer: 1 },
                { question: '爸爸去哪里？', options: ['公司','学校','家'], answer: 0 },
                { question: '姐姐在做什么？', options: ['工作','上大学','读高中'], answer: 1 }
            ]
        }
    ],

    // 听写句子（Dictation）
    dictationSentences: [
        { level:3, korean: '안녕하세요', roman: 'annyeonghaseyo', meaning: '你好' },
        { level:3, korean: '감사합니다', roman: 'gamsahamnida', meaning: '谢谢' },
        { level:3, korean: '저는 미국 사람이에요', roman: 'jeo-neun miguk saram-ieyo', meaning: '我是美国人' },
        { level:3, korean: '한국에 왔어요', roman: 'hanguk-e watseoyo', meaning: '来韩国了' },
        { level:3, korean: '한국어를 공부해요', roman: 'hanguk-eo-reul gongbuhaeyo', meaning: '学习韩语' },
        { level:3, korean: '언제 한국어를 공부해요?', roman: 'eonje hanguk-eo-reul gongbuhaeyo?', meaning: '什么时候学习韩语？' }
    ],

    // 翻译练习（中→韩）
    translationExercises: [
        { chinese: '我是学生', korean: '저는 학생입니다' },
        { chinese: '你去学校吗？', korean: '학교에 가요?' },
        { chinese: '我想吃苹果', korean: '사과를 먹고 싶어요' },
        { chinese: '我在图书馆', korean: '도서관에 있어요' },
        { chinese: '他昨天去了', korean: '그는 어제 갔어요' }
    ],

    // 造句生成（给定单词/语法点）
    sentenceGeneration: [
        { given:['学校','去','我'], grammar:'basic', answer: '저는 학교에 가요' },
        { given:['书','读','在图书馆'], grammar:'location', answer: '도서관에서 책을 읽어요' },
        { given:['昨天','吃饭','在家'], grammar:'past', answer: '어제 집에서 먹었어요' },
        { given:['明天','学习','图书馆'], grammar:'future', answer: '내일 도서관에서 공부할 거예요' },
        { given:['韩语','学习','喜欢'], grammar:'desire', answer: '한국어를 공부하고 싶어요' }
    ]
};

// 辅助函数：生成所有可能的音节组合（约 11,172 个）
function generateAllSyllables() {
    const initials = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    const medials = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
    const finals = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

    const syllables = [];
    let count = 0;
    initials.forEach(initial => {
        medials.forEach(medial => {
            finals.forEach(final => {
                if (final && !isValidFinalCombination(initial, final)) return;
                const syl = initial + medial + final;
                // 只有长度 2（无韵尾） 或 3（有韵尾）的组合
                if (syl.length === 2 || (syl.length === 3 && final && final.length===1)) {
                    const roman = romanize(syl);
                    syllables.push({
                        initial, medial, final,
                        syllable: syl,
                        roman: roman,
                        // 预计算发音难度
                        difficulty: calculateDifficulty(initial, medial, final)
                    });
                    count++;
                }
            });
        });
    });

    console.log(`Generated ${count} syllables`);
    return syllables;
}

// 罗马化（更完整实现）
function romanize(syllable) {
    const map = {
        // 声母（初声）
        'ㄱ':'g','ㄲ':'kk','ㅋ':'k',
        'ㄴ':'n',
        'ㄷ':'d','ㄸ':'tt','ㅌ':'t',
        'ㄹ':'r','ㅿ':'r',
        'ㅁ':'m',
        'ㅂ':'p','ㅃ':'pp','ㅍ':'p',
        'ㅅ':'s','ㅆ':'ss',
        'ㅈ':'j','ㅉ':'jj','ㅊ':'ch',
        'ㅇ':'','ㅎ':'h',
        // 韵母（中声）
        'ㅏ':'a','ㅐ':'ae','ㅑ':'ya','ㅒ':'yae','ㅓ':'eo','ㅔ':'e',
        'ㅕ':'yeo','ㅖ':'ye','ㅗ':'o','ㅘ':'wa','ㅙ':'wae','ㅚ':'oe','ㅛ':'yo',
        'ㅜ':'u','ㅝ':'wo','ㅞ':'we','ㅟ':'wi','ㅠ':'yu','ㅡ':'eu','ㅢ':'ui','ㅣ':'i',
        // 韵尾（终声）- 简化处理（只考虑单辅音韵尾）
        'ㄱ':'k','ㄴ':'n','ㄷ':'t','ㄹ':'l','ㅁ':'m','ㅂ':'p','ㅅ':'t','ㅆ':'t',
        'ㅇ':'ng','ㅈ':'t','ㅊ':'t','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h'
    };
    let result = '';
    for (let ch of syllable) {
        if (map[ch]) {
            result += map[ch];
        } else {
            // 复合韵尾处理（简化）
            if (ch.length > 1) {
                // 取第一个发音
                result += map[ch[0]] || '';
            }
        }
    }
    return result;
}

// 简化的韵尾组合验证
function isValidFinalCombination(initial, final) {
    // 实际规则：
    // ㄺ(ㄺ): ㄱ + ㄱ → ㄲ (但通常不这样分)
    // ㄻ: ㄹ + ㅁ
    // ㄼ: ㄹ + ㅂ
    // ㄽ: ㄹ + ㅅ
    // ㄾ: ㄹ + ㅌ
    // ㄿ: ㄹ + ㅍ
    // ㅀ: ㄹ + ㅎ
    // ㄵ: ㄴ + ㅈ
    // ㄶ: ㄴ + ㅎ
    // ㅄ: ㅂ + ㅅ
    // 此处简化：只要在 finals 列表中就允许
    return true;
}

// 计算音节难度（辅助 Level 3 难度调整）
function calculateDifficulty(initial, medial, final) {
    let score = 1; // 基础分
    // 基础辅音和单元音较简单
    if (['ㄱ','ㄴ','ㄷ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅎ'].includes(initial)) score += 0;
    else score += 1; // 紧音/送气音稍难
    if (['ㅏ','ㅓ','ㅗ','ㅜ','ㅡ','ㅣ'].includes(medial)) score += 0;
    else score += 1; // 复合元音稍难
    if (final === '') score += 0;
    else score += 2; // 有韵尾的更难
    return Math.min(score, 5); // 1-5 级
}

if (typeof window !== 'undefined') {
    window.KOREAN_LEVEL3 = KOREAN_LEVEL3;
    window.generateAllSyllables = generateAllSyllables;
    window.romanize = romanize;
    window.isValidFinalCombination = isValidFinalCombination;
}