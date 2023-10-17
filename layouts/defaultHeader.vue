<script setup lang="ts">
  const yellow = '#f7d336'
  const green = '#8ae99c'
  const style = {
    'background': `linear-gradient(15deg, ${yellow}, ${green})`
  }
</script>

<template>
  <q-header elevated class="row justify-center items-start content-start header">
    <q-toolbar>
      <q-toolbar-title class="title">
        만능 계산기
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  text-align: center;
}

.title {
  font-size: 32px;
  font-weight: bold;
}
</style>