<script setup lang="ts">
const descriptionList = {
  first: {
    title: "단축 URL 이란?",
    desc: "단축 URL은 긴 웹 주소(URL)를 짧게 줄여주는 서비스입니다.\n" +
        "긴 URL을 간결한 형태로 변환하여, 더 쉽게 공유하고 기억하기 쉽도록 도와줍니다.\n" +
        "이는 주로 웹사이트 주소를 간략하게 만들어 소셜 미디어, 이메일, 메시지 등에서 링크를 보낼 때 유용하게 활용됩니다.\n" +
        "단축 URL은 짧고 간편한 형태로 원래의 긴 URL로 연결되어 해당 웹 페이지로 이동할 수 있습니다.\n"
  },
  second: {
    title: "예시",
    desc: "예를 들어, 긴 URL인 \"https://www.examplewebsite.com/this/is/a/very/long/url\"을 \n" +
        "단축 URL 서비스를 통해 \"https://short.url/abc123\"과 같이 간결하게 만들어줍니다."
  }
}
</script>

<template>
  <ui-desc-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
  <ui-desc-card :title="descriptionList.second.title" :desc="descriptionList.second.desc" />
</template>