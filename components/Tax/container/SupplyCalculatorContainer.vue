<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'
import InputCp from '#c/Tax/ui/cpInput.vue'

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

      <input-cp
          title="공급가액"
          v-model="supplyModel"
          @input="supplyModel = addCommas(supplyModel)"
      />

      <div class="q-pa-md q-gutter-sm row justify-evenly">
        <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
        <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
      </div>

      <input-cp
          title="합계금액"
          v-model="totalModel"
          hint="입력하신 공급가액에 부가세액을 더한 금액"
          readonly
      />

      <input-cp
          title="부가세액"
          v-model="vatModel"
          hint="입력하신 공급가액에 부과되는 부가세액"
          readonly
      />

    </q-form>
  </div>
</template>