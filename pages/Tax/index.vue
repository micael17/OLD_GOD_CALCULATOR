<template>
  <q-page class="row justify-center items-start content-start" :style-fn="myTweak">
    <div class="col-shrink">
      <TotalCalculatorContainer />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import TotalCalculatorContainer from "#c/Tax/container/TotalCalculatorContainer.vue";

defineProps<{
  title?: string,
  subTitle?: string
}>()

const myTweak = (offset: number) => {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh'
  }
}
</script>