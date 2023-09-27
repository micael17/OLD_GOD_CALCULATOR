<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <input-component
        label="합계 금액"
        hint="부가세를 포함한 최종 금액"
        :value="totalModel"
        @update:modelValue="(newValue) => totalModel = newValue"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

      <input-component
        label="공급가액"
        hint="입력하신 합계 금액에서 부가세액을 뺀 금액"
        :value="supplyModel"
        :disable="true"
      />

      <input-component
        label="부가세액"
        hint="입력하신 합계 금액에 포함된 부가세액"
        :value="taxModel"
        :disable="true"
      />

      <input-component
        label="x"
        hint="지역공급가를 찾기 위해 더한 금액"
        :value="xModel"
        :disable="true"
      />

      <input-component
        label="지역본부단가"
        :value="localModel"
        :disable="true"
      />

      <input-component
        label="농협단가"
        :value="nhModel"
        :disable="true"
      />

      <input-component
        label="지역본부단가 + 부가세"
        :value="localTaxModel"
        :disable="true"
      />

      <input-component
        label="농협단가 + 부가세"
        :value="nhTaxModel"
        :disable="true"
      />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalculationService from '@/domain/calculation/CalculationService'
import InputComponent from '@/pages/Home/component/inputComponent.vue'

const totalModel = ref(0)
const supplyModel = ref(0)
const taxModel = ref(0)
const xModel = ref(0)
const localModel = ref(0)
const nhModel = ref(0)
const localTaxModel = ref(0)
const nhTaxModel = ref(0)


const onSubmit = () => {
  const { supplyValue, taxValue } = CalculationService.getSupplyTaxValue(totalModel.value)

  supplyModel.value = supplyValue
  taxModel.value = taxValue

  const { localValue, localTaxValue, nhValue, nhTaxValue, xValue } = CalculationService.getLocalNhValue(totalModel.value, supplyValue)

  localModel.value = localValue
  localTaxModel.value = localTaxValue
  nhModel.value = nhValue
  nhTaxModel.value = nhTaxValue
  xModel.value = xValue
}

const onReset = () => {
  totalModel.value = 0
  supplyModel.value = 0
  taxModel.value = 0
  xModel.value = 0
  localModel.value = 0
  nhModel.value = 0
  localTaxModel.value = 0
  nhTaxModel.value = 0
}
</script>

<style scoped>

</style>