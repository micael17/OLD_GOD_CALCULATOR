<script setup lang="ts">
import Header from "~/layouts/defaultHeader.vue";
import Footer from "~/layouts/defaultFooter.vue";
</script>

<template>
  <q-layout view="hhh lpR fff">
    <Header />
    <q-page-container class="row justify-center">
      <slot />
    </q-page-container>
    <Footer />
  </q-layout>
</template>