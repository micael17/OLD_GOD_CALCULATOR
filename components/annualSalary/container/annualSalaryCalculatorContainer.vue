<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'
import InputCp from '#c/Tax/ui/cpInput.vue'
import Xlsx from "#d/etc/xlsx";

const familyCnt = ref("")
const childCnt = ref("")
const monthlyIncome = ref("")
const annualIncome = ref("")
const taxModel = ref("")
const localTaxModel = ref("")
const totalTaxModel = ref("")

const addCommas = (value: string) => CalculationService.addCommas(value)

const onSubmit = async () => {
  const mIncome = CalculationService.removeCommas(monthlyIncome.value)
  const { tax, localTax, totalTax } = await Xlsx.getResult(Number(mIncome), Number(familyCnt.value), Number(childCnt.value))

  taxModel.value = addCommas(String(tax))
  localTaxModel.value = addCommas(String(localTax))
  totalTaxModel.value = addCommas(String(totalTax))
}

const onReset = () => {
  familyCnt.value = ''
  childCnt.value = ''
  monthlyIncome.value = ''
  annualIncome.value = ''
  taxModel.value = ''
  localTaxModel.value = ''
  totalTaxModel.value = ''
}
</script>

<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
    >
      <h4>월급으로 연봉계산</h4>
      <hr>

      <input-cp
          title="월급"
          v-model="monthlyIncome"
          @input="monthlyIncome = addCommas(monthlyIncome)"
      />

      <input-cp
          title="부양 가족 수(본인 포함)"
          v-model="familyCnt"
      />

      <input-cp
          title="20세 이하 자녀 수"
          v-model="childCnt"
      />

      <div class="q-pa-md q-gutter-sm row justify-evenly">
        <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
        <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
      </div>

      <input-cp
          title="소득세"
          v-model="taxModel"
          readonly
      />
      <input-cp
          title="지방소득세"
          v-model="localTaxModel"
          readonly
      />
      <input-cp
          title="총소득세"
          v-model="totalTaxModel"
          readonly
      />
    </q-form>
  </div>
</template>
