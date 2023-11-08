<script setup lang="ts">
import Header from "~/layouts/default-header.vue";
import Footer from "~/layouts/default-footer.vue";
import Right from "~/layouts/default-right.vue"
</script>

<template>
  <q-layout view="hhh lpR fff">
    <Header />
      <q-page-container class="row justify-center">
        <div style="width: 200px; border: 1px solid red; visibility: hidden">test</div>
        <slot />
        <Right />
      </q-page-container>
    <Footer />
  </q-layout>
</template>