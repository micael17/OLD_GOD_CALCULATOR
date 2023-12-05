<template>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-ma-md">
      <q-form
          @submit="calculateBMI"
      >
        <h4>BMI(Body Mass Index) Calculator</h4>
        <q-tabs v-model="tab" active-color="primary" indicator-color="primary">
          <q-tab name="us" label="US Units" active-class="active-tab" />
          <q-tab name="metric" label="Metric Units" active-class="active-tab" />
        </q-tabs>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="us">
            <ui-input
                title="Weight (pounds)"
                type="number"
                v-model="weight"
            />
            <ui-input
                title="Height (feet)"
                type="number"
                v-model="heightFeet"
            />
            <ui-input
                title="Height (inches)"
                type="number"
                v-model="heightInches"
            />
          </q-tab-panel>
          <q-tab-panel name="metric">
            <ui-input
                title="Weight (kg)"
                type="number"
                v-model="weightMetric"
            />
            <ui-input
                title="Height (cm)"
                type="number"
                v-model="heightMetric"
            />
          </q-tab-panel>
        </q-tab-panels>

        <div class="q-pa-md q-gutter-sm row justify-evenly">
          <q-btn label="Calculate (Enter)" type="submit" color="primary" size="lg"/>
        </div>

        <div>
          <ui-text-block title="BMI Index: " :value="bmi" />
          <ui-text-block title="Measurement Result: " :value="getBMIDescription(bmi)" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const weight = ref(0) // weight in pounds
const heightFeet = ref(0) // height in feet
const heightInches = ref(0) // height in inches
const weightMetric = ref(0) // weight in kg
const heightMetric = ref(0) // height in cm
const bmi = ref<string | number>(0)
const tab = ref('us')

const calculateBMI = () => {
  const weightValue = weight.value || 0;
  const heightFeetValue = heightFeet.value || 0;
  const heightInchesValue = heightInches.value || 0;
  const weightMetricValue = weightMetric.value || 0;
  const heightMetricValue = heightMetric.value || 0;

  if (tab.value === 'us') {
    const totalHeightInInches: number = Number(heightFeetValue * 12) + Number(heightInchesValue);
    bmi.value = ((weightValue * 703) / (totalHeightInInches * totalHeightInInches)).toFixed(1);
  } else {
    const heightInMeter = heightMetricValue / 100; // convert height from cm to meter
    bmi.value = (weightMetricValue / (heightInMeter * heightInMeter)).toFixed(1);
  }
}

const getBMIDescription = (bmi: string | number) => {
  const intBmi = Number(bmi)
  // BMI 범주 설명
  if (intBmi < 18.5) {
    return 'Underweight';
  } else if (intBmi < 25) {
    return 'Normal weight';
  } else if (intBmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
</script>

<style scoped>
.active-tab {
  font-weight: bold;
}
/* ... */
</style>