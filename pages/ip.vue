<script setup lang="ts">
useHead({
  title: '내 ip 주소 확인 - 만능계산기',
  meta: [
    {name: 'author', content: 'JHK'},
    {name: 'keywords', content: '내 ip 주소 확인, ip 주소 확인, ip 주소, 공인 ip, 퍼블릭 ip, public ip, ip 확인, 주소'},
    {name: 'description', content: '내 ip 주소를 빠르고 간편하게 확인해보세요. 보통 ip 주소는 공인 ip 또는 퍼블릭 ip를 의미합니다. 내 ip 주소 확인 - 만능계산기에서 확인하세요.'},
    {name: 'og:locale', content: 'ko_KR'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: '내 ip 주소 확인 - 만능계산기'},
    {name: 'og:description', content: '내 ip 주소를 빠르고 간편하게 확인해보세요. 보통 ip 주소는 공인 ip 또는 퍼블릭 ip를 의미합니다. 내 ip 주소 확인 - 만능계산기에서 확인하세요.'},
    {name: 'og:url', content: 'https://god-caclulator.com/ip'},
    {name: 'og:site_name', content: '만능 계산기'},
  ],
})

const ip = ref('')

onMounted(async () => {
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        ip.value = data.ip;
      })
})
</script>

<template>
  <q-page>
    <ui-title title="현재 IP 주소 확인 (=공인 IP, Public IP)" />
    <hr>
    <h4>
      {{ ip }}
    </h4>
    <ui-desc-white-card />
  </q-page>
</template>

<style scoped>

</style>