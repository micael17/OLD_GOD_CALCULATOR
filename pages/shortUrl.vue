<script setup lang="ts">
useHead({
  title: '단축 URL 만들기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '단축 URL 만들기,짧은 URL 만들기,단축 URL 변환,짧은 URL 변환,네이버 단축 URL'},
    {name: 'description', content: '입력한 주소를 짧게 변환해주는 URL 변환기 입니다. 네이버 API를 사용했습니다. 단축 URL 만들기 - 만능계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '단축 URL 만들기 - 만능계산기'},
    {name: 'og:description', content: '입력한 주소를 짧게 변환해주는 URL 변환기 입니다. 네이버 API를 사용했습니다. 단축 URL 만들기 - 만능계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/shortUrl'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})

const originUrl = ref('')
const shortUrl = ref('')
const loading = ref(false)

// 클릭 횟수를 쿠키에서 가져오는 함수
function getClickCountFromCookie() {
  const clickCountCookie = document.cookie
      .split(';')
      .find(cookie => cookie.trim().startsWith('clickCount='));

  if (clickCountCookie) {
    return parseInt(clickCountCookie.split('=')[1]);
  }

  return 0;
}

// 클릭 횟수를 쿠키에 설정하는 함수 (유효기간 5분)
function setClickCountToCookie(count: number) {
  const now = new Date();
  now.setTime(now.getTime() + 5 * 60 * 1000); // 현재 시간에서 5분 후의 시간 설정
  document.cookie = `clickCount=${count}; expires=${now.toUTCString()}`;
}


function buttonClickHandler() {
  const clickCount = getClickCountFromCookie();

  if (clickCount >= 10) {
    alert('10회 이상 클릭하셨습니다. 5분 후에 다시 시도해주세요.');
    return; // 클릭 횟수가 10회 이상이면 더 이상 처리하지 않습니다.
  }

  getShortUrl()

  // 클릭 횟수 증가 및 쿠키에 저장
  const updatedClickCount = clickCount + 1;
  setClickCountToCookie(updatedClickCount);
}

function validateUrl(str: string) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?'+ // port
      '(\\/[-a-z\\d%_.~+]*)*'+ // path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if (!!pattern.test(str)) {
    return true;
  } else {
    alert('올바른 URL을 입력해주세요.');
    return false;
  }
}
const getShortUrl = () => {
  loading.value = true

  if (!validateUrl(originUrl.value)) {
    loading.value = false;
    return;
  }

  const myServer = 'https://port-0-cors-5mk12alpglyfww.sel5.cloudtype.app'
  const api = 'https://openapi.naver.com/v1/util/shorturl'

  fetch(`${myServer}/${api}?url=${originUrl.value}`, {
    method: 'GET',
    headers: {
      'origin': 'https://god-caclulator.com',
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': 'zGSqm9ZT8a6IngXswpbt',
      'X-Naver-Client-Secret': 'vo3G6oeWK8'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('data: ', data)
    shortUrl.value = data.result.url;
  }).catch(e => {
    console.log(e)
  }).finally(() => loading.value = false)
}
</script>

<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col">
        <q-form>
          <h4>단축 URL 만들기</h4>
          <hr>
          <ui-input
              title=""
            v-model="originUrl"
            label="원본 URL"
            hint="변환하려는 원본 URL을 입력하세요, ex) http://my-site.com."
            lazy-rules
            :rules="[val => !!val || 'URL을 입력해주세요.']"
          />
          <div class="q-pa-md q-gutter-sm row justify-evenly">
            <q-btn label="변환하기"  @click="buttonClickHandler" color="primary" size="lg"/>
          </div>
          <hr>

          <h4 class="relative-position">
            <q-inner-loading :showing="loading">
              <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
            {{ shortUrl }}
          </h4>
        </q-form>
      </div>
    </div>
    <div class="row q-ma-lg">
      <div class="col">
      </div>
    </div>
  </q-page>
</template>

<style scoped>

</style>