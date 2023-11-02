<script setup lang="ts">
import DescriptionCard from "#c/Common/ui/DescriptionCard.vue";

const descriptionList = {
  first: {
    title: "만나이 계산기 사용 방법",
    desc: "- 한국의 만 나이를 계산하는 계산기입니다. <span class='danger'>현재 날짜 또는 입력하신 날짜를 기준으로 계산합니다.</span>\n" +
        "- 생년월일을 8글자로 입력해주세요. (예: 19990403)" +
        "- 기준날짜는 입력하지 않으시면 오늘 날짜를 기준으로 계산합니다."
  }
}
</script>

<template>
  <description-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
</template>