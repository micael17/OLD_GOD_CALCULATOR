<script setup lang="ts">

import LHeader from "~/layouts/LHeader.vue";
import LFooter from "~/layouts/LFooter.vue";
</script>

<template>
  <q-layout view="hhh lpR fff">
    <LHeader />
    <q-page-container class="row justify-center items-start content-start ">
      <slot />
    </q-page-container>
    <LFooter />
  </q-layout>
</template>

<style scoped>

</style>