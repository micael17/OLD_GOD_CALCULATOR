<script setup lang="ts">
import Header from "~/layouts/default-header.vue";
import Footer from "~/layouts/default-footer.vue";
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