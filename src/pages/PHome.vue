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
        </q-form>
      </div>
    </div>
    <div class="col-shrink offset-1" style="overflow: auto; min-width: 350px; max-width: 350px;">
      <cp-form />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import CpForm from '@/components/cpForm.vue'
import { ref } from 'vue'

defineProps<{
  title?: string,
  subTitle?: string
}>()

const totalValue = ref(0)
const supplyValue = ref(0)
const taxValue = ref(0)


const myTweak = (offset) => {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh'
  }
}

const onSubmit = () => {
  taxValue.value = Math.floor(totalValue.value * 10 / 110) // 일반적으로 부가세는 원단위 이하 소수점은 버림.
  supplyValue.value = totalValue.value - taxValue.value // 공급가는 합계급액에서 부가세만 빼면 됨.
}

const onReset = () => {
  totalValue.value = 0
}

</script>