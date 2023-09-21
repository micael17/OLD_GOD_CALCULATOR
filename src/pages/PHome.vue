<template>
  <q-page>
    {{ mainStore.name }}
  </q-page>
</template>
<script setup>

import { useMainStore } from '@/store/main.ts'

const mainStore = useMainStore()

</script>