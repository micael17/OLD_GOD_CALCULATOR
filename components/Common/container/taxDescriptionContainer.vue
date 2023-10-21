<script setup lang="ts">
import DescriptionCard from "#c/Common/ui/DescriptionCard.vue";

const descriptionList = {
  tax: {
    title: "부가세란?",
    desc: "부가세액은 상품이나 서비스에 부과되는 세금의 일부로, 공급가액을 기반으로 계산됩니다. " +
        "부가세액은 주로 부가가치세(VAT)라고도 불리며, 판매세(Sales Tax)라고 하는 국가도 있습니다. " +
        "부가세액은 소비자가 지불하는 부분으로, 판매자가 수집하여 국가에 납부합니다. " +
        "부가세액 계산 방법은 다음과 같습니다.\n" +
        " : 부가세액 = 공급가액 x 부가세율\n" +
        "예를 들어, 공급가액이 100,000원이라면 부가세액은 10,000원입니다. (한국 부가세는 10%)"
  },
  supply: {
    title: '공급가란?',
    desc: '공급가액은 상품 또는 서비스의 가격이나 가치를 나타내는 금액으로, 이것은 부가가치세(VAT) 또는 판매세(Sales Tax)를 계산하는 기준이 되는 금액입니다. ' +
        '공급가액은 세금이 적용되기 전의 제품 또는 서비스의 가격을 나타냅니다.\n' +
        '예를 들어, 만약 물건의 공급가액이 100,000원이라면, 이것은 세금이 부과되기 전의 상품 또는 서비스의 실제 가격을 나타냅니다. 부가세나 판매세를 추가하여 최종 합계금액을 계산할 때 이 공급가액을 사용합니다.'
  },
  total: {
    title: '합계금액이란?',
    desc: '합계금액은 상품 또는 서비스의 총 비용으로, 공급가액과 부가세액을 합친 금액입니다. ' +
        '합계금액은 소비자가 실제로 지불해야 하는 총 금액입니다. 부가세액을 포함한 합계금액은 다음과 같이 계산됩니다.\n' +
        ' : 합계금액 = 공급가액 + 부가세액\n' +
        '공급가액이 100,000원이고 부가세액이 10,000원이었다면 합계금액은 110,000원입니다.'
  }
}
</script>

<template>
  <div>
    <description-card :title="descriptionList.tax.title" :desc="descriptionList.tax.desc" />
  </div>
  <div>
    <description-card :title="descriptionList.supply.title" :desc="descriptionList.supply.desc" />
  </div>
  <div>
    <description-card :title="descriptionList.total.title" :desc="descriptionList.total.desc" />
  </div>
</template>