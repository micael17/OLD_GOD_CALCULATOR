<script setup lang="ts">
const descriptionList = {
  first: {
    title: "복리 계산기 사용 방법",
    desc: "- 복리 계산은 투자 기간마다 원금에 이자를 더해 새로운 원금을 계산하고, 이를 통해 수익과 수익률을 파악합니다.\n" +
        "- 사용자가 투자 원금과 기간, 목표 수익률을 입력하면 각 기간별 원금과 수익, 수익률을 표로 나타내어 사용자에게 투자 결과를 제시합니다.\n" +
        "- 이를 통해 사용자는 투자가 어떻게 성장하는지, 얼마만큼의 이익을 얻을 수 있는지 등을 확인할 수 있습니다.\n"
  }
}
</script>

<template>
  <div class="row q-ma-lg">
    <ui-desc-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
  </div>
</template>