<script setup lang="ts">
useHead({
  title: '단축 URL 만들기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '단축 URL 만들기,짧은 URL 만들기,단축 URL 변환,짧은 URL 변환'},
    {name: 'description', content: '내 ip 주소를 빠르고 간편하게 확인해보세요. 보통 ip 주소는 공인 ip 또는 퍼블릭 ip를 의미합니다. 내 ip 주소 확인 - 만능계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '내 ip 주소 확인 - 만능계산기'},
    {name: 'og:description', content: '내 ip 주소를 빠르고 간편하게 확인해보세요. 보통 ip 주소는 공인 ip 또는 퍼블릭 ip를 의미합니다. 내 ip 주소 확인 - 만능계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/shortUrl'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})

const originUrl = ref('')
const shortUrl = ref('')
const loading = ref(false)

function validateUrl(str) {
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

  fetch('https://cors-anywhere-jihongkim.koyeb.app/https://openapi.naver.com/v1/util/shorturl', {
    method: 'POST',
    headers: {
      'origin': 'https://god-caclulator.com',
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': 'zGSqm9ZT8a6IngXswpbt',
      'X-Naver-Client-Secret': 'vo3G6oeWK8'
    },
    body: JSON.stringify({
      url: originUrl.value
    })
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
            v-model="originUrl"
            label="원본 URL"
            hint="변환하려는 원본 URL을 입력하세요, ex) http://my-site.com"
            lazy-rules
            :rules="[val => !!val || 'URL을 입력해주세요.']"
          />
          <div class="q-pa-md q-gutter-sm row justify-evenly">
            <q-btn label="변환하기"  @click="getShortUrl" color="primary" size="lg"/>
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
        <ui-desc-white-card />
      </div>
    </div>
  </q-page>
</template>

<style scoped>

</style>