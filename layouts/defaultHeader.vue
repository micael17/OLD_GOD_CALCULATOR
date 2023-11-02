<script setup lang="ts">
</script>

<template>
  <div>
    <q-header elevated class="row justify-center header">
      <q-toolbar>
        <q-toolbar-title class="title">
          <q-item class="link" to="/">
            <q-icon name="calculate" size="xl" style="padding-bottom: 0.1rem;"/>만능계산기
          </q-item>
        </q-toolbar-title>
        <q-btn-dropdown stretch flat label="메뉴">
          <q-list>
            <q-item-label header class="item-header">
              <q-item clickable v-close-popup tabindex="0" to="/">
                <q-item-section>
                  <div>
                    <q-icon name="calculate" size="sm" />만능
                  </div>
                </q-item-section>
              </q-item>
              <q-separator spaced />
            </q-item-label>
            <q-item clickable v-close-popup tabindex="0" to="/tax">
              <q-item-section>
                <q-item-label>부가세 계산기</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="1" to="/character">
              <q-item-section>
                <q-item-label>글자수세기</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="2" to="/monthlySalary">
              <q-item-section>
                <q-item-label>월급 계산기</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="3" to="/manAge">
              <q-item-section>
                <q-item-label>만나이 계산기</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="99" to="/nh">
              <q-item-section>
                <q-item-label>Nh 계산기</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>
<!--    <div v-if="showMenuList" id="dropdown-menu">
      <a href="#">메뉴 항목 1</a>
      <a href="#">메뉴 항목 2</a>
      <a href="#">메뉴 항목 3</a>
    </div>-->
  </div>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
}

.title {
  font-size: 32px;
  font-weight: bold;
}

.item-header {
  padding-bottom: 0;
}

.link {
  color: inherit;
  text-decoration: none;
}

/*@media only screen and (max-width: 768px) {
  !* 모바일 화면에서 적용할 스타일 설정 *!
  .title {
    font-size: 24px;
    font-weight: normal;
  }

  .desktop-menu {
    display: none;
  }
}

@media only screen and (min-width: 769px) {
  !* 데스크톱 화면에서 적용할 스타일 설정 *!
  .title {
    font-size: 32px;
    font-weight: bold;
  }

  .mobile-menu {
    display: none;
  }
}*/
</style>