<script setup lang="ts">
import AgeService from "#d/age/AgeService";

const today = new Date()
const loading = ref(false)
const birthDateModel = ref("")
const refDateModel = ref(AgeService.getValidDateString(today))
const manAgeModel = ref("")

const removeCharacter = (input: string) => {
  return input.replace(/\D/g, "")
}

const onSubmit = async () => {
  loading.value = true

  if (!AgeService.isValidDate(birthDateModel.value)
      || !AgeService.isValidDate(refDateModel.value)) {
    alert('올바른 날짜 형식이 아닙니다.')
  } else {
    const birthDate = AgeService.getDateFromString(birthDateModel.value)
    const refDate = AgeService.getDateFromString(refDateModel.value)
    manAgeModel.value = String(AgeService.calculateKoreanAge(birthDate, refDate))
  }

  loading.value = false
}

const onReset = () => {
  birthDateModel.value = ''
  refDateModel.value = AgeService.getValidDateString(today)
  manAgeModel.value = ''
}
</script>

<template>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
  >
    <h4>만나이 계산기</h4>
    <hr>
    <ui-input
        title="생년월일"
        place-holder="ex)19990123"
        maxlength="8"
        v-model="birthDateModel"
        @input="birthDateModel = removeCharacter(birthDateModel)"
    />

    <ui-input
        title="기준 날짜(기본값: 오늘)"
        maxlength="8"
        v-model="refDateModel"
        @input="refDateModel = removeCharacter(refDateModel)"
    />

    <q-btn label="계산 (엔터)" type="submit" color="primary" size="lg"/>
    <q-btn label="초기화" type="reset" color="white" text-color="black" size="lg" class="q-ml-sm" />

    <ui-input
        title="만 나이"
        v-model="manAgeModel"
        readonly
    />
  </q-form>
</template>
