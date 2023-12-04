// types/i18n.d.ts

// locales/ko.json에 대한 타입 정의
export type KoreanMessages = {
    title: string;
    // 다른 키들...
};

// locales/en.json에 대한 타입 정의
export type EnglishMessages = {
    title: string;
    // 다른 키들...
};

// 모든 언어에 대한 메시지 타입을 합친 타입 정의
export type I18nMessages = KoreanMessages & EnglishMessages;