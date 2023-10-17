<template>
  <q-page>
    <div class="row justify-center items-start content-start">
      <div class="col-shrink">
        <TotalCalculatorContainer />
      </div>
      <div class="col-shrink">
        <SupplyCalculatorContainer />
      </div>
    </div>
    <div class="row justify-center">
      <TaxDescriptionContainer />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import TotalCalculatorContainer from "#c/Tax/container/TotalCalculatorContainer.vue";
import SupplyCalculatorContainer from "#c/Tax/container/SupplyCalculatorContainer.vue";
import TaxDescriptionContainer from "#c/Common/container/TaxDescriptionContainer.vue";

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