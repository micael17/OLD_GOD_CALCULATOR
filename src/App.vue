<template>
  <component :is="layout" msg="Vite + Vue" />
</template>
<script setup lang="ts">
import LMain from '@/layouts/LMain.vue'
import type { Component } from 'vue'

const layout: Component = LMain
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
