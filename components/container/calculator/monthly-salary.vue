<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'
import SalaryService from "#d/salary/SalaryService";

const loading = ref(false)
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
  loading.value = true
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
  loading.value = false
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
  <ui-form-two-cols title="월급 실수령액 계산" :loading="loading" @onSubmit="onSubmit" @onReset="onReset">
    <template #input>
      <ui-input
          title="월급"
          postfix="원"
          v-model="monthlyIncomeModel"
          @input="monthlyIncomeModel = addCommas(monthlyIncomeModel)"
      />

      <ui-input
          title="비과세액"
          postfix="원"
          v-model="deductionAmountModel"
          @input="deductionAmountModel = addCommas(deductionAmountModel)"
      />

      <ui-input
          title="부양 가족 수(본인 포함)"
          postfix="명"
          hint="자녀를 포함한 인원을 입력해주세요."
          v-model="familyCnt"
          @input="familyCnt = addCommas(familyCnt)"
      />

      <ui-input
          title="8세 이상 20세 이하 자녀 수"
          postfix="명"
          v-model="childCnt"
          @input="childCnt = addCommas(childCnt)"
      />
    </template>

    <template #btn>
      <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
      <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />
    </template>

    <template #result>
      <ui-input
          title="월급 실수령액"
          postfix="원"
          v-model="realMonthlySalaryModel"
          readonly
      />
      <hr>
      <ui-input
          title="국민연금"
          postfix="원"
          v-model="pensionTaxModel"
          readonly
      />
      <ui-input
          title="건강보험"
          postfix="원"
          v-model="healthTaxModel"
          readonly
      />
      <ui-input
          title="장기요양보험"
          postfix="원"
          v-model="careTaxModel"
          readonly
      />
      <ui-input
          title="고용보험"
          postfix="원"
          v-model="employmentTaxModel"
          readonly
      />
      <ui-input
          title="소득세"
          postfix="원"
          v-model="taxModel"
          readonly
      />
      <ui-input
          title="지방소득세"
          postfix="원"
          v-model="localTaxModel"
          readonly
      />
    </template>

  </ui-form-two-cols>
</template>
