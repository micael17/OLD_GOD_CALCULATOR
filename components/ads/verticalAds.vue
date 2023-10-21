<script setup lang="ts">
onMounted(async () => {
  try {
    ;(window.adsbygoogle_vertical = window.adsbygoogle_vertical || []).push({})
    console.log('v', window.adsbygoogle_vertical)
  } catch (error) {
    console.error('Adsbygoogle error is ', error)
  }
})
</script>

<template>
  <ins class="adsbygoogle_vertical"
       style="display:block"
       data-ad-slot="4616211519"
       data-ad-client="ca-pub-9353405093450953"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</template>

<style scoped>

</style>