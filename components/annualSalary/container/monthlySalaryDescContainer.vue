<script setup lang="ts">
import DescriptionCard from "#c/Common/ui/DescriptionCard.vue";

const descriptionList = {
  first: {
    title: "유의사항",
    desc: "- 본 월급 실수령액 계산은 예상 및 참고용으로, <span class='danger'>실제 수령액과 다를 수 있습니다.</span>\n" +
        "- 2023년부터 식대 비과세 한도가 10만 원에서 20만 원으로 변경되었습니다.\n" +
        "- 비과세액은 세금이 부과되지 않는 금액을 뜻합니다.\n" +
        "- <span class='danger'>부양 가족수는 본인을 포함하고, 연 소득 100만원을 초과하지 않는 가족 수를 더하여 입력합니다.</span>\n" +
        "- 예를 들어, 본인과 소득이 없는 배우자가 있고 8세 이상 20세 이하 자녀가 1명인 경우, 부양 가족수는 3명입니다."
  }
}
</script>

<template>
  <description-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
</template>