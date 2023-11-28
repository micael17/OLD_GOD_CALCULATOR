<script setup lang="ts">
import MenuList from "#c/container/links/menuList.vue";

const drawerRight = ref(false)
</script>

<template>
  <div>
    <q-header elevated class="row justify-center header">
      <q-toolbar>
        <q-toolbar-title class="title row col">
          <q-item class="link" to="/">
            <q-icon name="calculate" size="xl" style="padding-bottom: 0.1rem;"/>갓 계산기
          </q-item>
        </q-toolbar-title>

        <div class="desktop_menu">
          <q-btn-dropdown color="white" label="계산기 메뉴" flat>
            <menu-list />
          </q-btn-dropdown>
        </div>

        <!-- 모바일 메뉴 -->
        <q-btn class="mobile_menu" flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        <q-drawer
            class="mobile_menu bg-grey-9"
            side="right"
            v-model="drawerRight"
            overlay
            :width="200"
            :breakpoint="500"
        >
          <q-scroll-area class="fit">
            <menu-list />
          </q-scroll-area>
        </q-drawer>
      </q-toolbar>
    </q-header>
  </div>
</template>

<style scoped>
.header {
  /* background: linear-gradient(135deg, #4e54c8, #8f94fb);  */
  background: #000000;
}

.title {
  font-size: 32px;
  font-weight: bold;
}

/* 모바일 화면 감지 */
@media only screen and (max-width: 949px) {
  .mobile_menu {
    display: inherit;
  }

  .desktop_menu {
    display: none;
  }
}

/* 데스크톱 화면 감지 */
@media only screen and (min-width: 950px) {
  .mobile_menu {
    display: none;
  }

  .desktop_menu {
    display: inherit;
  }
}
</style>