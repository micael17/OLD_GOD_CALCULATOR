<script setup lang="ts">
const descriptionList = {
  first: {
    title: "QR 코드란?",
    desc: "QR 코드는 정보를 시각적으로 표현하는 방식으로, 스마트폰 등의 카메라로 스캔하면 포함된 정보를 읽을 수 있는 이차원 바코드입니다."
  },
  second: {
    title: "예시",
    desc: "예를 들어, URL인 \"https://www.examplewebsite.com/this/is/a/very/long/url\"을 \n" +
        "입력하시고 QR 코드를 생성하면, 휴대폰 카메라를 이용해 해당 URL로 이동할 수 있습니다."
  }
}
</script>

<template>
  <ui-desc-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
  <ui-desc-card :title="descriptionList.second.title" :desc="descriptionList.second.desc" />
</template>