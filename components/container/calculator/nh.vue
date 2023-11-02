<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'

const totalModel = ref("")
const supplyModel = ref("0")
const vatModel = ref("0")
const xModel = ref("0")
const localModel = ref("0")
const nhModel = ref("0")
const localVatModel = ref("0")
const nhVatModel = ref("0")


const addCommas = (value: string) => CalculationService.addCommas(value)

const onSubmit = () => {
  // 입력에서 콤마(,) 제거
  const totalWithoutCommas = CalculationService.removeCommas(totalModel.value)
  const supplyWithoutCommas = CalculationService.removeCommas(totalModel.value)

  const { supplyValue, vatValue } = CalculationService.getSupplyVatFromTotal(Number(totalWithoutCommas))
  const { localValue, localVatValue, nhValue, nhVatValue, xValue } = CalculationService.getLocalNhValue(Number(totalWithoutCommas), Number(supplyWithoutCommas))

  supplyModel.value = addCommas(String(supplyValue))
  vatModel.value = addCommas(String(vatValue))
  localModel.value = addCommas(String(localValue))
  localVatModel.value = addCommas(String(localVatValue))
  nhModel.value = addCommas(String(nhValue))
  nhVatModel.value = addCommas(String(nhVatValue))
  xModel.value = addCommas(String(xValue))
}

const onReset = () => {
  totalModel.value = ""
  supplyModel.value = "0"
  vatModel.value = "0"
  xModel.value = "0"
  localModel.value = "0"
  nhModel.value = "0"
  localVatModel.value = "0"
  nhVatModel.value = "0"
}
</script>

<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
    >
      <h4>농협-지역 계산</h4>
      <hr>

      <ui-input
          title="합계금액"
          v-model="totalModel"
          @input="totalModel = addCommas(totalModel)"
      />

      <div class="q-pa-md q-gutter-sm row justify-evenly">
        <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
        <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
      </div>

      <ui-input
          title="공급가액"
          v-model="supplyModel"
          hint="입력하신 합계 금액에서 부가세액을 뺀 금액"
          readonly
      />

      <ui-input
          title="부가세액"
          v-model="vatModel"
          hint="입력하신 합계 금액에 포함된 부가세액"
          readonly
      />

      <ui-input
          title="x"
          v-model="xModel"
          hint="지역공급가를 찾기 위해 더한 금액"
          readonly
      />

      <ui-input
          title="지역본부단가"
          v-model="localModel"
          readonly
      />

      <ui-input
          title="농협단가"
          v-model="nhModel"
          readonly
      />

      <ui-input
          title="지역본부단가 + 부가세"
          v-model="localVatModel"
          readonly
      />

      <ui-input
          title="농협단가 + 부가세"
          v-model="nhVatModel"
          readonly
      />
    </q-form>
  </div>
</template>
