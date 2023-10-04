<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

      <q-input
        filled
        type="number"
        v-model="totalModel"
        label="합계 금액"
        hint="부가세를 포함한 최종 금액"
        lazy-rules
      />

      <q-btn label="계산" type="submit" color="primary"/>
      <q-btn label="초기화" type="reset" color="primary" flat class="q-ml-sm" />

      <q-input
        filled
        type="number"
        v-model="supplyModel"
        label="공급가액"
        hint="입력하신 합계 금액에서 부가세액을 뺀 금액"
        readonly
      />

      <q-input
        filled
        type="number"
        v-model="taxModel"
        label="부가세액"
        hint="입력하신 합계 금액에 포함된 부가세액"
        readonly
      />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalculationService from '@/domain/calculation/CalculationService'

const totalModel = ref(0)
const supplyModel = ref(0)
const taxModel = ref(0)


const onSubmit = () => {
  const { supplyValue, taxValue } = CalculationService.getSupplyTaxValue(totalModel.value)

  supplyModel.value = supplyValue
  taxModel.value = taxValue
}

const onReset = () => {
  totalModel.value = 0
  supplyModel.value = 0
  taxModel.value = 0
}
</script>

<style scoped>

</style>