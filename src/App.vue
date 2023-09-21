<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script setup lang="ts">
import LMain from '@/layouts/LMain.vue'
import type { Component } from 'vue'
const layout: Component = LMain
</script>
<style scoped>
</style>
