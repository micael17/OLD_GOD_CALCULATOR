<script setup lang="ts">
  const yellow = '#f7d336'
  const green = '#8ae99c'
  const style = {
    'background': `linear-gradient(15deg, ${yellow}, ${green})`
  }

  const drawerRight = ref(false)
</script>

<template>
  <q-header elevated class="row justify-center header">
    <q-toolbar>
      <q-toolbar-title class="title">
        계산기
      </q-toolbar-title>
      <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />

      <q-drawer
          side="right"
          v-model="drawerRight"
          show-if-above
          bordered
          :width="200"
          :breakpoint="500"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section>Single line item</q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Item with caption</q-item-label>
                <q-item-label caption>Caption</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label overline>OVERLINE</q-item-label>
                <q-item-label>Item with caption</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
}

.title {
  font-size: 32px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
    font-weight: bold;
  }
}
</style>