<script setup lang="ts">

</script>
<template>
  <q-list>
    <q-item clickable v-close-popup tabindex="0" to="/tax">
      <q-item-section>
        <q-item-label>부가세 계산기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="1" to="/character">
      <q-item-section>
        <q-item-label>글자수세기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="2" to="/monthlySalary">
      <q-item-section>
        <q-item-label>월급 실수령액 계산기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="3" to="/annualSalary">
      <q-item-section>
        <q-item-label>연봉 실수령액 계산기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="4" to="/manAge">
      <q-item-section>
        <q-item-label>만나이 계산기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="5" to="/krEnAddr">
      <q-item-section>
        <q-item-label>한글-영문 주소변환기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="6" to="/pyeong">
      <q-item-section>
        <q-item-label>평수 계산기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="7" to="/ip">
      <q-item-section>
        <q-item-label>내 ip 주소 확인</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="8" to="/bmi">
      <q-item-section>
        <q-item-label>BMI(체질량 지수) 계산</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="9" to="/comp-interest">
      <q-item-section>
        <q-item-label>복리 계산기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="10" to="/short-url">
      <q-item-section>
        <q-item-label>단축 URL 만들기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="11" to="/qr">
      <q-item-section>
        <q-item-label>QR 코드 생성기</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup tabindex="99" to="/nh">
      <q-item-section>
        <q-item-label>Nh 계산기</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>