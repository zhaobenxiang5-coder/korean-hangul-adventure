// Level 2 韩语字母数据
// 包含: 14个辅音 + 11个复合音 + 示例音节

const HANGUL_LEVEL2 = {
    // 基础辅音 (14个)
    consonants: [
        { id: 'ㄱ', name: '기역', roman: 'g/k', sound: 'k', description: '舌根音，像"g"或"k"' },
        { id: 'ㄲ', name: '쌍기역', roman: 'kk', sound: 'kk', description: '紧音，发音加强' },
        { id: 'ㄴ', name: '니은', roman: 'n', sound: 'n', description: '舌尖音，像"n"' },
        { id: 'ㄷ', name: '디귿', roman: 'd/t', sound: 't', description: '舌尖音，像"d"或"t"' },
        { id: 'ㄸ', name: '쌍디귿', roman: 'tt', sound: 'tt', description: '紧音，发音加强' },
        { id: 'ㄹ', name: '리을', roman: 'r/l', sound: 'r', description: '闪音，轻弹舌尖' },
        { id: 'ㅁ', name: '미음', roman: 'm', sound: 'm', description: '双唇音，像"m"' },
        { id: 'ㅂ', name: '비읍', roman: 'b/p', sound: 'p', description: '双唇音，像"b"或"p"' },
        { id: 'ㅃ', name: '쌍비읍', roman: 'pp', sound: 'pp', description: '紧音，发音加强' },
        { id: 'ㅅ', name: '시옷', roman: 's', sound: 's', description: '齿间音，像"s"' },
        { id: 'ㅆ', name: '쌍시옷', roman: 'ss', sound: 'ss', description: '紧音，发音加强' },
        { id: 'ㅇ', name: '이응', roman: 'ng/silent', sound: 'ng', description: '鼻音，作为韵尾时发音，开头时不发音' },
        { id: 'ㅈ', name: '지읒', roman: 'j', sound: 'ch', description: '塞擦音，像"j"或"ch"' },
        { id: 'ㅉ', name: '쌍지읒', roman: 'jj', sound: 'jj', description: '紧音，发音加强' },
        { id: 'ㅊ', name: '치읓', roman: 'ch', sound: 'ch', description: '加送气，像"ch"' },
        { id: 'ㅋ', name: '키읔', roman: 'k', sound: 'k', description: '加送气，像"k"' },
        { id: 'ㅌ', name: '티읕', roman: 't', sound: 't', description: '加送气，像"t"' },
        { id: 'ㅍ', name: '피읖', roman: 'p', sound: 'p', description: '加送气，像"p"' },
        { id: 'ㅎ', name: '히읗', roman: 'h', sound: 'h', description: '声门擦音，像"h"' }
    ],
    // 复合辅音 (5个 - 实际为韵尾形式)
    finals: [
        { id: 'ㄱ', name: '기역', sound: 'k', description: '作为韵尾，发音短促' },
        { id: 'ㅋ', name: '키읔', sound: 'k', description: '作为韵尾，发音短促' },
        { id: 'ㄲ', name: '쌍기역', sound: 'k', description: '作为韵尾，发音短促' },
        { id: 'ㅂ', name: '비읍', sound: 'p', description: '作为韵尾，发音短促' },
        { id: 'ㅍ', name: '피읖', sound: 'p', description: '作为韵尾，发音短促' },
        { id: 'ㅅ', name: '시옷', sound: 't', description: '作为韵尾，发音像t' },
        { id: 'ㅆ', name: '쌍시옷', sound: 't', description: '作为韵尾，发音像t' },
        { id: 'ㅈ', name: '지읒', sound: 't', description: '作为韵尾，发音像t' },
        { id: 'ㅊ', name: '치읓', sound: 't', description: '作为韵尾，发音像t' },
        { id: 'ㅌ', name: '티읕', sound: 't', description: '作为韵尾，发音像t' },
        { id: 'ㄴ', name: '니은', sound: 'n', description: '作为韵尾，鼻音n' },
        { id: 'ㅁ', name: '미음', sound: 'm', description: '作为韵尾，鼻音m' },
        { id: 'ㅇ', name: '이응', sound: 'ng', description: '作为韵尾，鼻音ng' },
        { id: 'ㄹ', name: '리을', sound: 'l', description: '作为韵尾，边音l' }
    ],
    // 常用音节示例 (辅音+元音组合)
    syllables: [
        // ㄱ + 元音
        { initial: 'ㄱ', medial: 'ㅏ', syllable: '가', roman: 'ga' },
        { initial: 'ㄱ', medial: 'ㅓ', syllable: '거', roman: 'geo' },
        { initial: 'ㄱ', medial: 'ㅗ', syllable: '고', roman: 'go' },
        { initial: 'ㄱ', medial: 'ㅜ', syllable: '구', roman: 'gu' },
        { initial: 'ㄱ', medial: 'ㅡ', syllable: '그', roman: 'geu' },
        { initial: 'ㄱ', medial: 'ㅣ', syllable: '기', roman: 'gi' },
        // ㄴ + 元音
        { initial: 'ㄴ', medial: 'ㅏ', syllable: '나', roman: 'na' },
        { initial: 'ㄴ', medial: 'ㅓ', syllable: '너', roman: 'neo' },
        { initial: 'ㄴ', medial: 'ㅗ', syllable: '노', roman: 'no' },
        { initial: 'ㄴ', medial: 'ㅜ', syllable: '누', roman: 'nu' },
        { initial: 'ㄴ', medial: 'ㅡ', syllable: '느', roman: 'neu' },
        { initial: 'ㄴ', medial: 'ㅣ', syllable: '니', roman: 'ni' },
        // ㄷ + 元音
        { initial: 'ㄷ', medial: 'ㅏ', syllable: '다', roman: 'da' },
        { initial: 'ㄷ', medial: 'ㅓ', syllable: '더', roman: 'deo' },
        { initial: 'ㄷ', medial: 'ㅗ', syllable: '도', roman: 'do' },
        { initial: 'ㄷ', medial: 'ㅜ', syllable: '두', roman: 'du' },
        { initial: 'ㄷ', medial: 'ㅡ', syllable: '드', roman: 'deu' },
        { initial: 'ㄷ', medial: 'ㅣ', syllable: '디', roman: 'di' },
        // ㅁ + 元音
        { initial: 'ㅁ', medial: 'ㅏ', syllable: '마', roman: 'ma' },
        { initial: 'ㅁ', medial: 'ㅓ', syllable: '머', roman: 'meo' },
        { initial: 'ㅁ', medial: 'ㅗ', syllable: '모', roman: 'mo' },
        { initial: 'ㅁ', medial: 'ㅜ', syllable: '무', roman: 'mu' },
        { initial: 'ㅁ', medial: 'ㅡ', syllable: '므', roman: 'meu' },
        { initial: 'ㅁ', medial: 'ㅣ', syllable: '미', roman: 'mi' },
        // ㅂ + 元音
        { initial: 'ㅂ', medial: 'ㅏ', syllable: '바', roman: 'ba' },
        { initial: 'ㅂ', medial: 'ㅓ', syllable: '버', roman: 'beo' },
        { initial: 'ㅂ', medial: 'ㅗ', syllable: '보', roman: 'bo' },
        { initial: 'ㅂ', medial: 'ㅜ', syllable: '부', roman: 'bu' },
        { initial: 'ㅂ', medial: 'ㅡ', syllable: '브', roman: 'beu' },
        { initial: 'ㅂ', medial: 'ㅣ', syllable: '비', roman: 'bi' },
        // ㅅ + 元音
        { initial: 'ㅅ', medial: 'ㅏ', syllable: '사', roman: 'sa' },
        { initial: 'ㅅ', medial: 'ㅓ', syllable: '서', roman: 'seo' },
        { initial: 'ㅅ', medial: 'ㅗ', syllable: '소', roman: 'so' },
        { initial: 'ㅅ', medial: 'ㅜ', syllable: '수', roman: 'su' },
        { initial: 'ㅅ', medial: 'ㅡ', syllable: '스', roman: 'seu' },
        { initial: 'ㅅ', medial: 'ㅣ', syllable: '시', roman: 'si' },
        // ㅇ + 元音 (作为声母)
        { initial: 'ㅇ', medial: 'ㅏ', syllable: '아', roman: 'a' },
        { initial: 'ㅇ', medial: 'ㅓ', syllable: '어', roman: 'eo' },
        { initial: 'ㅇ', medial: 'ㅗ', syllable: '오', roman: 'o' },
        { initial: 'ㅇ', medial: 'ㅜ', syllable: '우', roman: 'u' },
        { initial: 'ㅇ', medial: 'ㅡ', syllable: '으', roman: 'eu' },
        { initial: 'ㅇ', medial: 'ㅣ', syllable: '이', roman: 'i' },
        // ㅈ + 元音
        { initial: 'ㅈ', medial: 'ㅏ', syllable: '자', roman: 'ja' },
        { initial: 'ㅈ', medial: 'ㅓ', syllable: '저', roman: 'jeo' },
        { initial: 'ㅈ', medial: 'ㅗ', syllable: '조', roman: 'jo' },
        { initial: 'ㅈ', medial: 'ㅜ', syllable: '주', roman: 'ju' },
        { initial: 'ㅈ', medial: 'ㅡ', syllable: '즈', roman: 'jeu' },
        { initial: 'ㅈ', medial: 'ㅣ', syllable: '지', roman: 'ji' },
        // ㅊ + 元音
        { initial: 'ㅊ', medial: 'ㅏ', syllable: '차', roman: 'cha' },
        { initial: 'ㅊ', medial: 'ㅓ', syllable: '처', roman: 'cheo' },
        { initial: 'ㅊ', medial: 'ㅗ', syllable: '초', roman: 'cho' },
        { initial: 'ㅊ', medial: 'ㅜ', syllable: '추', roman: 'chu' },
        { initial: 'ㅊ', medial: 'ㅡ', syllable: '츠', roman: 'cheu' },
        { initial: 'ㅊ', medial: 'ㅣ', syllable: '치', roman: 'chi' },
        // ㅋ + 元音
        { initial: 'ㅋ', medial: 'ㅏ', syllable: '카', roman: 'ka' },
        { initial: 'ㅋ', medial: 'ㅓ', syllable: '커', roman: 'keo' },
        { initial: 'ㅋ', medial: 'ㅗ', syllable: '코', roman: 'ko' },
        { initial: 'ㅋ', medial: 'ㅜ', syllable: '쿠', roman: 'ku' },
        { initial: 'ㅋ', medial: 'ㅡ', syllable: '크', roman: 'keu' },
        { initial: 'ㅋ', medial: 'ㅣ', syllable: '키', roman: 'ki' },
        // ㅌ + 元音
        { initial: 'ㅌ', medial: 'ㅏ', syllable: '타', roman: 'ta' },
        { initial: 'ㅌ', medial: 'ㅓ', syllable: '터', roman: 'teo' },
        { initial: 'ㅌ', medial: 'ㅗ', syllable: '토', roman: 'to' },
        { initial: 'ㅌ', medial: 'ㅜ', syllable: '투', roman: 'tu' },
        { initial: 'ㅌ', medial: 'ㅡ', syllable: '트', roman: 'teu' },
        { initial: 'ㅌ', medial: 'ㅣ', syllable: '티', roman: 'ti' },
        // ㅍ + 元音
        { initial: 'ㅍ', medial: 'ㅏ', syllable: '파', roman: 'pa' },
        { initial: 'ㅍ', medial: 'ㅓ', syllable: '퍼', roman: 'peo' },
        { initial: 'ㅍ', medial: 'ㅗ', syllable: '포', roman: 'po' },
        { initial: 'ㅍ', medial: 'ㅜ', syllable: '푸', roman: 'pu' },
        { initial: 'ㅍ', medial: 'ㅡ', syllable: '프', roman: 'peu' },
        { initial: 'ㅍ', medial: 'ㅣ', syllable: '피', roman: 'pi' },
        // ㅎ + 元音
        { initial: 'ㅎ', medial: 'ㅏ', syllable: '하', roman: 'ha' },
        { initial: 'ㅎ', medial: 'ㅓ', syllable: '허', roman: 'heo' },
        { initial: 'ㅎ', medial: 'ㅗ', syllable: '호', roman: 'ho' },
        { initial: 'ㅎ', medial: 'ㅜ', syllable: '후', roman: 'hu' },
        { initial: 'ㅎ', medial: 'ㅡ', syllable: '흐', roman: 'heu' },
        { initial: 'ㅎ', medial: 'ㅣ', syllable: '히', roman: 'hi' }
    ]
};

// 导出供使用
if (typeof window !== 'undefined') {
    window.HANGUL_LEVEL2 = HANGUL_LEVEL2;
}
