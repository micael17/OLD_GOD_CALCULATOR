<script setup lang="ts">
</script>

<template>
  <q-footer elevated class="row justify-center items-start content-start bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <div class="footer">Copyright © {{ $t('title')}}. All rights reserved.</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<style scoped>
@media (max-width: 768px) {
  .footer {
    font-size: 12px;
    font-weight: normal;
  }
}
</style>