<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'
import InputCp from '#c/Tax/ui/cpInput.vue'
import SalaryService from "#d/salary/SalaryService";

const familyCnt = ref("1")
const childCnt = ref("0")
const monthlyIncomeModel = ref("")
const deductionAmountModel = ref(CalculationService.addCommas("200000"))
const annualIncome = ref("")
const taxModel = ref("")
const localTaxModel = ref("")
const pensionTaxModel = ref("")
const healthTaxModel = ref("")
const careTaxModel = ref("")
const employmentTaxModel = ref("")
const realMonthlySalaryModel = ref("")

const addCommas = (value: string) => CalculationService.addCommas(value)

const onSubmit = async () => {
  const mIncome = CalculationService.removeCommas(monthlyIncomeModel.value)
  const dAmount = CalculationService.removeCommas(deductionAmountModel.value)
  const { pensionTax, healthTax, careTax, employmentTax, incomeTax, localIncomeTax, realMonthlySalary } = await SalaryService.getRealSalary({
     monthlySalary: Number(mIncome),
     deductionAmount: Number(dAmount),
     familyCnt: Number(familyCnt.value),
     childCnt:  Number(childCnt.value)
  })

  pensionTaxModel.value = addCommas(String(pensionTax))
  healthTaxModel.value = addCommas(String(healthTax))
  careTaxModel.value = addCommas(String(careTax))
  employmentTaxModel.value = addCommas(String(employmentTax))
  realMonthlySalaryModel.value = addCommas(String(realMonthlySalary))
  taxModel.value = addCommas(String(incomeTax))
  localTaxModel.value = addCommas(String(localIncomeTax))
}

const onReset = () => {
  familyCnt.value = '1'
  childCnt.value = '0'
  monthlyIncomeModel.value = ''
  deductionAmountModel.value = addCommas('200000')
  annualIncome.value = ''
  taxModel.value = ''
  localTaxModel.value = ''
  pensionTaxModel.value = ''
  healthTaxModel.value = ''
  careTaxModel.value = ''
  employmentTaxModel.value = ''
  realMonthlySalaryModel.value = ''
}
</script>

<template>
  <div class="q-pa-md">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
    >
      <h4>월급 실수령액 계산</h4>
      <hr>

      <input-cp
          title="월급"
          v-model="monthlyIncomeModel"
          @input="monthlyIncomeModel = addCommas(monthlyIncomeModel)"
      />

      <input-cp
          title="비과세액"
          v-model="deductionAmountModel"
          @input="deductionAmountModel = addCommas(deductionAmountModel)"
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
          title="월급 실수령액"
          v-model="realMonthlySalaryModel"
          readonly
      />
      <hr>
      <input-cp
          title="국민연금"
          v-model="pensionTaxModel"
          readonly
      />
      <input-cp
          title="건강보험"
          v-model="healthTaxModel"
          readonly
      />
      <input-cp
          title="장기요양보험"
          v-model="careTaxModel"
          readonly
      />
      <input-cp
          title="고용보험"
          v-model="employmentTaxModel"
          readonly
      />
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
    </q-form>
  </div>
</template>
