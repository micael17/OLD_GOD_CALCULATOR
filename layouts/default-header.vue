<script setup lang="ts">
const drawerRight = ref(false)
</script>

<template>
  <div>
    <q-header elevated class="row justify-center header">
      <q-toolbar>
        <q-toolbar-title class="title row col">
          <q-item class="link" to="/">
            <q-icon name="calculate" size="xl" style="padding-bottom: 0.1rem;"/>만능계산기
          </q-item>
        </q-toolbar-title>

        <!-- PC 메뉴 -->
        <q-btn-group class="desktop_menu" flat>
          <q-btn flat padding="xs sm" to="/tax" label="부가세 계산기" />
          <q-btn flat padding="xs sm" to="/monthlySalary" label="월급 계산기" />
          <q-btn flat padding="xs sm" to="/annualSalary" label="연봉 계산기" />
          <q-btn flat padding="xs sm" to="/character" label="글자수세기" />
          <q-btn flat padding="xs sm" to="/manAge" label="만나이 계산기" />
          <q-btn flat padding="xs sm" to="/krEnAddr" label="영문주소 변환" />
          <q-btn flat padding="xs sm" to="/pyeong" label="평수 계산기" />
          <q-btn flat padding="xs sm" to="/ip" label="내 ip 주소 확인" />
        </q-btn-group>

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
            <q-list>
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
                  <q-item-label>월급 실수령액 계산기</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="3" to="/annualSalary">
                <q-item-section>
                  <q-item-label>연봉 실수령액 계산기</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="4" to="/manAge">
                <q-item-section>
                  <q-item-label>만나이 계산기</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="5" to="/krEnAddr">
                <q-item-section>
                  <q-item-label>한글-영문 주소변환기</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="6" to="/pyeong">
                <q-item-section>
                  <q-item-label>평수 계산기</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="7" to="/ip">
                <q-item-section>
                  <q-item-label>내 ip 주소 확인</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup tabindex="99" to="/nh">
                <q-item-section>
                  <q-item-label>Nh 계산기</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>
      </q-toolbar>
    </q-header>
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