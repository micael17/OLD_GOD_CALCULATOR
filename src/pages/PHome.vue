<template>
  <q-page class="row justify-center items-start content-start" :style-fn="myTweak">
    <div class="col-shrink" style="overflow: auto; min-width: 350px; max-width: 350px;">
      <div class="q-pa-md" style="max-width: 400px">
        <h5>{{ title }}</h5>
        <h6>{{ subTitle }}</h6>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            type="number"
            v-model="totalValue"
            label="합계 금액"
            hint="부가세를 포함한 최종 금액"
            lazy-rules
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>

          <q-input
            filled
            disable
            type="number"
            v-model="supplyValue"
            label="공급가액"
            hint="입력하신 합계 금액에서 부가세액을 뺀 금액"
            lazy-rules
          />

          <q-input
            filled
            disable
            type="number"
            v-model="taxValue"
            label="부가세액"
            hint="입력하신 합계 금액에 포함된 부가세액"
            lazy-rules
          />

          <q-input
            filled
            disable
            type="number"
            v-model="xValue"
            label="x (더한금액)"
            lazy-rules
          />

          <q-input
            filled
            disable
            type="number"
            v-model="localSupplyValue"
            label="지역본부단가"
            lazy-rules
          />

          <q-input
            filled
            disable
            type="number"
            v-model="nhSupplyValue"
            label="농협단가"
            lazy-rules
          />

          <q-input
            filled
            disable
            type="number"
            v-model="localSupplyTaxValue"
            label="지역본부단가 + 부가세"
            lazy-rules
          />

          <q-input
            filled
            disable
            type="number"
            v-model="nhSupplyTaxValue"
            label="농협단가 + 부가세"
            lazy-rules
          />
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string,
  subTitle?: string
}>()

const totalValue = ref(0)
const supplyValue = ref(0)
const taxValue = ref(0)
const xValue = ref(0)
const localSupplyValue = ref(0)
const nhSupplyValue = ref(0)
const localSupplyTaxValue = ref(0)
const nhSupplyTaxValue = ref(0)


const myTweak = (offset: number) => {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh'
  }
}

const onSubmit = () => {
  taxValue.value = Math.floor(totalValue.value * 10 / 110) // 일반적으로 부가세는 원단위 이하 소수점은 버림.
  supplyValue.value = totalValue.value - taxValue.value // 공급가는 합계급액에서 부가세만 빼면 됨.

  //지역공급가 찾기
  let result = 0
  let tmpResult = 0
  for(let x = 0; x < supplyValue.value; x += 10) {
    tmpResult = Math.trunc((supplyValue.value + x) * 0.93)

    if (totalValue.value - result > totalValue.value - tmpResult && tmpResult % 10 === 0) {

      if (supplyValue.value + x > totalValue.value) {
        result = supplyValue.value + x
        xValue.value = x
        break;
      }
    } else {
      result = tmpResult
    }
  }

  localSupplyValue.value = tmpResult
  localSupplyTaxValue.value = Math.trunc(localSupplyValue.value * 1.1)
  nhSupplyValue.value = result
  nhSupplyTaxValue.value = Math.trunc(nhSupplyValue.value * 1.1)
  // nhSupplyValue.value = Math.trunc(localSupplyValue.value * 1.07)
  // nhSupplyTaxValue.value = Math.trunc(nhSupplyValue.value * 1.1)
}

const onReset = () => {
  totalValue.value = 0
}

</script>