/**
 * nuxt.config.ts 에서 head 부분에서 불러야함
 */
const clientId = 'ca-pub-9353405093450953'
const script = document.createElement('script');
script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
script.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(script)