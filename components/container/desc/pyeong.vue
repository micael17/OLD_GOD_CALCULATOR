<script setup lang="ts">
const descriptionList = {
  first: {
    title: "계산 방법",
    desc: "1평 = 3.305785㎡, 1㎡ = 0.3025평"
  },
  second: {
    title: "전용 면적과 공급 면적?",
    desc: "<span class='danger'>전용면적</span>\n" +
        ":전용면적은 해당 주택의 벽 내부를 측정한 면적으로, 거실, 침실, 주방 등 주거 공간에 해당하는 면적을 말합니다. 이는 실제로 사용하는 개인의 공간을 의미합니다.\n" +
        "<span class='danger'>공급면적</span>\n" +
        ":공급면적은 전용면적에 주택 외부 벽면이나 공용 공간(로비, 복도, 엘리베이터, 주차장 등)을 포함한 총 면적을 의미합니다. 공급면적은 아파트를 구매할 때나 전매하거나 임대할 때 계약 면적으로 사용됩니다."
  }
}
</script>

<template>
  <ui-desc-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
  <ui-desc-card :title="descriptionList.second.title" :desc="descriptionList.second.desc" />
</template>