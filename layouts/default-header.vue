<script setup lang="ts">
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
        <q-btn-dropdown stretch flat label="메뉴">
          <q-list>
            <q-item clickable v-close-popup tabindex="0" to="/">
              <q-item-section>
                <q-item-label header class="item-header">
                  <q-icon name="calculate" size="sm"/>
                  <div class="header-label"> 만능계산기</div>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
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
            <q-item clickable v-close-popup tabindex="2" to="/annualSalary">
              <q-item-section>
                <q-item-label>연봉 실수령액 계산기</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="3" to="/manAge">
              <q-item-section>
                <q-item-label>만나이 계산기</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="4" to="/krEnAddr">
              <q-item-section>
                <q-item-label>한글-영문 주소변환기</q-item-label>
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
  padding: 0;
}

.header-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

</style>