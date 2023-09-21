<template>
  <q-layout view="hHh Lpr fFf">
    <LHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <LFooter />
  </q-layout>
</template>

<script setup>
import LHeader from '@/layouts/LHeader.vue'
import LFooter from '@/layouts/LFooter.vue'
</script>