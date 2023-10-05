<template>
  <q-header elevated class="row justify-center items-start content-start" :style="style">
    <q-toolbar>
      <q-toolbar-title>
        계산기
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
  const yellow = '#f7d336'
  const green = '#8ae99c'
  const style = {
    'background': `linear-gradient(15deg, ${yellow}, ${green})`
  }
</script>

<style scoped>

</style>