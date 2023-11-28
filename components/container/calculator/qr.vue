<script setup lang="ts">
import { ref } from 'vue'

let QRious
const originUrl = ref('')
const qrCode = ref(null)
const loading = ref(false)

onMounted(async () => {
  const script = document.createElement('script')
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js'
  script.onload = () => {
    QRious = window.QRious
  }
  document.body.appendChild(script)
})

const buttonClickHandler = () => {
  if (!QRious) {
    alert('QR 코드 생성기가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.')
    return
  }

  loading.value = true
  const qr = new QRious({
    value: originUrl.value,
    size: 200, // QR 코드 이미지의 크기를 설정합니다.
  })
  qrCode.value = qr.toDataURL() // QR 코드 이미지를 Data URL로 변환합니다.

  loading.value = false
}
</script>

<template>
  <q-form>
    <h4>QR 코드 생성기</h4>
    <hr>
    <ui-input
        v-model="originUrl"
        title="변환하려는 값을 입력해주세요."
        hint="링크 주소 또는 URL 등 아무거나 입력해주세요. QR 코드 이미지는 마우스 오른쪽 버튼을 눌러 저장하실 수 있습니다."
        lazy-rules
        :rules="[val => !!val || 'URL을 입력해주세요.']"
    />
    <div class="q-pa-md q-gutter-sm row justify-evenly">
      <q-btn label="변환하기"  @click="buttonClickHandler" color="primary" size="lg"/>
    </div>
    <hr>

    <h4 class="relative-position">
      <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      <img v-if="qrCode" :src="qrCode" alt="QR Code" />
    </h4>
  </q-form>
</template>

<style scoped>

</style>