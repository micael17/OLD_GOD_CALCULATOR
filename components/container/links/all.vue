<script setup lang="ts">
</script>

<template>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-pa-sm">
      <NuxtLink to="/tax" class="link">
        <ui-image-card iconName="point_of_sale" text-content="부가세 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/monthlySalary" class="link">
        <ui-image-card iconName="local_atm" text-content="월급 실수령액 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/annualSalary" class="link">
        <ui-image-card iconName="local_atm" text-content="연봉 실수령액 계산기" />
      </NuxtLink>
    </div>
  </div>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-pa-sm">
      <NuxtLink to="/character" class="link">
        <ui-image-card iconName="format_size" text-content="글자수 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/manAge" class="link">
        <ui-image-card iconName="person_remove" text-content="만나이 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/krEnAddr" class="link">
        <ui-image-card iconName="home" text-content="한글-영문 주소변환기" />
      </NuxtLink>
    </div>
  </div>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-pa-sm">
      <NuxtLink to="/pyeong" class="link">
        <ui-image-card iconName="swap_horiz" text-content="평수 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/ip" class="link">
        <ui-image-card iconName="dns" text-content="내 ip 주소 확인" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/bmi" class="link">
        <ui-image-card iconName="accessibility_new" text-content="BMI(체질량지수) 계산기" />
      </NuxtLink>
    </div>
  </div>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-pa-sm">
      <NuxtLink to="/comp-interest" class="link">
        <ui-image-card iconName="account_balance" text-content="복리 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
    </div>
    <div class="col q-pa-sm">
    </div>
  </div>
</template>