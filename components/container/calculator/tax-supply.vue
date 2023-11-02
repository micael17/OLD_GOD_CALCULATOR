<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'

const totalModel = ref("0")
const supplyModel = ref("")
const vatModel = ref("0")

const addCommas = (value: string) => CalculationService.addCommas(value)

const onSubmit = (value: string) => {
  // 입력에서 콤마(,) 제거
  const stringWithoutCommas = value.replace(/,/g, '');
  const { vat, total } = CalculationService.getVatTotalFromSupply(Number(stringWithoutCommas))

  vatModel.value = addCommas(String(vat))
  totalModel.value = addCommas(String(total))
}

const onReset = () => {
  totalModel.value = "0"
  supplyModel.value = ""
  vatModel.value = "0"
}
</script>

<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit(supplyModel)"
        @reset="onReset"
    >
      <h4>공급가액으로 계산</h4>
      <hr>

      <ui-input
          title="공급가액"
          postfix="원"
          v-model="supplyModel"
          @input="supplyModel = addCommas(supplyModel)"
      />

      <div class="q-pa-md q-gutter-sm row justify-evenly">
        <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
        <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
      </div>

      <ui-input
          title="합계금액"
          postfix="원"
          v-model="totalModel"
          hint="입력하신 공급가액에 부가세액을 더한 금액"
          readonly
      />

      <ui-input
          title="부가세액"
          postfix="원"
          v-model="vatModel"
          hint="입력하신 공급가액에 부과되는 부가세액"
          readonly
      />

    </q-form>
  </div>
</template>