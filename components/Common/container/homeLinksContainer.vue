<script setup lang="ts">
import CpImageCard from "#c/Common/ui/cpImageCard.vue";
</script>

<template>
  <div class="row q-ma-lg justify-center items-start content-start">
    <div class="col q-pa-sm">
      <NuxtLink to="/tax" class="link">
        <cp-image-card iconName="point_of_sale" text-content="부가세 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/monthlySalary" class="link">
        <cp-image-card iconName="local_atm" text-content="월급 실수령액 계산기" />
      </NuxtLink>
    </div>
    <div class="col q-pa-sm">
      <NuxtLink to="/character" class="link">
        <cp-image-card iconName="format_size" text-content="글자수 계산기" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
}
</style>