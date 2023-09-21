<template>
  <q-page :style-fn="myTweak">
    {{ mainStore.name }}
    {{ mainStore.name }}
    {{ mainStore.name }}
  </q-page>
</template>
<script setup>

import { useMainStore } from '@/store/main.ts'

const mainStore = useMainStore()

const myTweak = (offset) => {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration
  // this is actually what the default style-fn does in Quasar
  console.log('offest is ', offset)
  return {
    border: '1px solid green',
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh'
  }
}

</script>