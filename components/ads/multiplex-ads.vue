<script setup lang="ts">
import { nextTick } from 'vue'

onMounted(async () => {
  await nextTick()

  try {
    ;(window.adsbygoogle_multi = window.adsbygoogle_multi || []).push({})
    console.log(window.adsbygoogle_multi)
  } catch (error) {
    console.error('Adsbygoogle error is ', error)
  }
})

</script>

<template>
  <ins class="adsbygoogle_multi"
       style="display:block"
       data-ad-format="autorelaxed"
       data-ad-client="ca-pub-9353405093450953"
       data-ad-slot="7302084604"></ins>
</template>