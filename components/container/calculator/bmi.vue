<script setup lang="ts">

const weight = ref(0)
const height = ref(0)
const bmi = ref<string | number>(0)

const calculateBMI = () => {
  if (height.value && weight.value) {
    const heightInMeter = height.value / 100; // 신장을 미터로 변환
    bmi.value = (weight.value / (heightInMeter * heightInMeter)).toFixed(1);
  } else {
    bmi.value = 0;
    alert('신장과 몸무게를 입력해주세요!');
  }
}

const getBMIDescription = (bmi: string | number) => {
  const intBmi = Number(bmi)
  // BMI 범주 설명
  if (intBmi < 18.5) {
    return '저체중';
  } else if (intBmi < 23) {
    return '정상';
  } else if (intBmi < 25) {
    return '과체중';
  } else {
    return '비만';
  }
}
</script>

<template>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-ma-md">
      <q-form
        @submit="calculateBMI"
      >
        <h4>BMI 지수 계산</h4>
        <ui-input
            title="몸무게(kg)"
            type="number"
            v-model="weight"
        />
        <ui-input
            title="키(cm)"
            type="number"
            v-model="height"
        />

        <div class="q-pa-md q-gutter-sm row justify-evenly">
          <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
        </div>

        <div>
          <ui-text-block title="BMI 지수: " :value="bmi" />
          <ui-text-block title="측정 결과: " :value="getBMIDescription(bmi)" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped>

</style>