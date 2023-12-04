// plugins/i18n.ts

import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
import ko from '~/locales/ko.json'
import en from '~/locales/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
    // 브라우저 언어를 감지하고 언어 설정하기
    const browserLang = typeof window !== 'undefined' ? window.navigator.language : 'en'; // 기본값은 영어로 설정

    const messages = {
        ko,
        en
    };

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: browserLang,
        messages
    })

    vueApp.use(i18n)
})