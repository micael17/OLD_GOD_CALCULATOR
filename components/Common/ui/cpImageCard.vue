<template>
  <div class="card">
    <q-icon class="card-logo" :name=iconName size="xl" />
    <div class="card-text">
      {{ textContent }}
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    iconName: string
    textContent: string
  }>()
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #ffffff;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.card-logo {
  max-width: 100%;
  height: auto;
}

.card-text {
  margin-top: 16px;
}
</style>