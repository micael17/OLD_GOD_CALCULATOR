<template>
  <q-header elevated class="text-white" :style="style" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </q-toolbar>

    <!--
    <q-tabs align="left">
      <q-route-tab to="/page1" label="Page One" />
      <q-route-tab to="/page2" label="Page Two" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
    -->
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