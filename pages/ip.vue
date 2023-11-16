<script setup lang="ts">

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