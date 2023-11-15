
<template>
  <q-page>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md">
        <q-form
            @reset="onReset"
        >
          <h4>평수 변환 계산기</h4>
          <hr>
          <ui-input
              id="inputValue"
              title="평수 또는 제곱미터(㎡) 입력"
              v-model="inputValue"
          />

          <div class="q-pa-md q-gutter-sm row justify-evenly">
            <q-btn label="평수로 변환" @click="convertToPyeong" color="primary" size="lg" class="q-ml-sm" />
            <q-btn label="제곱미터(㎡)로 변환" @click="convertToSquareMeter" color="primary" size="lg" class="q-ml-sm" />
            <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
          </div>

          <ui-input
              v-if="convertedTo === 'pyeong'"
              title="결과: (평)"
              v-model="result"
              readonly
          />
          <ui-input
              v-else
              title="결과: 제곱미터(㎡)"
              v-model="result"
              readonly
          />
        </q-form>
      </div>
    </div>
    <hr>
    <div class="row q-ma-lg">
      <container-desc-pyeong />
    </div>
  </q-page>
</template>

<script setup lang="ts">

const inputValue = ref('')
const convertedTo = ref('')
const result = ref('')

const convertToPyeong = () => { // 1평 = 0.3025제곱미터
  if (inputValue.value !== '') {
    result.value = String(Number(inputValue.value) * 0.3025);
    convertedTo.value = 'pyeong';
  }
}
const convertToSquareMeter = () => {
  if (inputValue.value !== '') {
    result.value = String(Number(inputValue.value) / 0.3025);
    convertedTo.value = 'squareMeter';
  }
}

const onReset = () => {
  inputValue.value = ''
  convertedTo.value = ''
  result.value = ''
}

useHead({
  title: '평수 계산기 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '평수 변환, 평 계산, 평형 계산, 아파트 평수 계산, 아파트 제곱미터, 평 제곱미터 변환, 제곱미터 평 변환, 아파트, 평, 제곱미터, 변환'},
    {name: 'description', content: '평수를 제곱미터로 또는 제곱미터를 평수로 변환하는 계산기입니다.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '평수 계산기 - 만능계산기'},
    {name: 'og:description', content: '평수를 제곱미터로 또는 제곱미터를 평수로 변환하는 계산기입니다.'},
    {name: 'og:url', content: 'https://god-caclulator.com/pyeong'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})
</script>