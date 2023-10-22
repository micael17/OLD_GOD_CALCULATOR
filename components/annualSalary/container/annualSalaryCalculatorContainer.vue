<script setup lang="ts">
import CalculationService from '#d/calculation/CalculationService'
import InputCp from '#c/Tax/ui/cpInput.vue'
import xml2json from "../../../assets/domain/etc/xml2json";

const familyCnt = ref("")
const childCnt = ref("")
const monthlyIncome = ref("")
const annualIncome = ref("")

const addCommas = (value: string) => CalculationService.addCommas(value)

const onSubmit = async () => {

  const data = await xml2json.getTaxData(familyCnt.value, childCnt.value, monthlyIncome.value);
  console.log('data', data)

  // 입력에서 콤마(,) 제거
  const json = xml2json.xmlToJson('<map id=\'\' >\n' +
      '    <map id=\'resultMsg\' >\n' +
      '        <detailMsg></detailMsg>\n' +
      '        <msg></msg>\n' +
      '        <code></code>\n' +
      '        <result>S</result>\n' +
      '    </map>\n' +
      '    <ddcTrgtFmlyCnt>1</ddcTrgtFmlyCnt>\n' +
      '    <chldCnt>0</chldCnt>\n' +
      '    <map id=\'lbrIncSmpTxamtDVO\' >\n' +
      '        <inctx>74350</inctx>\n' +
      '        <searchLstAltDtm></searchLstAltDtm>\n' +
      '        <lclInctx>7430</lclInctx>\n' +
      '        <pmtTxamtSum>81780</pmtTxamtSum>\n' +
      '        <statusValue></statusValue>\n' +
      '    </map>\n' +
      '    <applcYrMmDd>20230228</applcYrMmDd>\n' +
      '    <smpTxamtIncClCd>01</smpTxamtIncClCd>\n' +
      '    <mmSnw>3000000</mmSnw>\n' +
      '</map>')

  if (json) {
    console.log('json: ', json)
  }
}

const onReset = () => {
  familyCnt.value = ''
  childCnt.value = ''
  monthlyIncome.value = ''
  annualIncome.value = ''
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
          v-model="annualIncome"
          readonly
      />
      <input-cp
          title="지방소득세"
          v-model="annualIncome"
          readonly
      />
    </q-form>
  </div>
</template>
