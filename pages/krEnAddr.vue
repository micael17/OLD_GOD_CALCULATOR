<script setup lang="ts">
import AddrService from "#d/addr/AddrService";
import type {AddrResult} from "Addr";

const loading = ref(false)
const inputAddrModel = ref("")
const resultModel = ref<AddrResult>({} as AddrResult)


const onSubmit = async () => {
  loading.value = true
  const result = await AddrService.getAddrFromKrToEn(inputAddrModel.value)
  if (result) {
    resultModel.value = result
  }

  loading.value = false
}

const onReset = () => {
  inputAddrModel.value = ''
  resultModel.value = {} as AddrResult
}


useHead({
  title: '영문주소 변환기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '영문주소 변환, 한글주소 변환, 영문주소, 영어주소, 주소 변환, 주소, 검색'},
    {name: 'description', content: '한국의 주소를 영문으로 변환해주는 변환기. 지번주소, 도로명 주소, 우편번호를 검색할 수 있습니다.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '영문주소 변환기 - 만능계산기'},
    {name: 'og:description', content: '한국의 주소를 영문으로 변환해주는 변환기. 지번주소, 도로명 주소, 우편번호를 검색할 수 있습니다.'},
    {name: 'og:url', content: 'https://god-caclulator.com/krEnAddr'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})
</script>

<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md">
        <q-form
            @submit="onSubmit"
            @reset="onReset"
        >
          <h4>한글-영문 주소 변환기</h4>
          <hr>

          <ui-input
              :disabled="loading"
              title="한글 주소 입력"
              v-model="inputAddrModel"
          />
          <ui-enter-init-btn submit-label="검색(엔터)" />
        </q-form>
      </div>
    </div>
    <div class="row q-ma-lg">
      <div class="col q-ma-md">
        <ui-card
          v-for="(juso, idx) in resultModel.juso"
          :key="idx"
        >
          <ui-text-block title="우편번호(ZIP Code) :" :value="juso.zipNo" />
          <ui-text-block title="한글 주소 :" :value="juso.korAddr" />
          <ui-text-block title="영문 지번 주소 :" :value="juso.jibunAddr" />
          <ui-text-block title="영문 도로명 주소 :" :value="juso.roadAddr" />
        </ui-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>

</style>