<script setup lang="ts">
import CpTitle from "#c/Common/ui/cpTitle.vue";
import CpCard from "#c/Common/ui/cpCard.vue";
import CpTextArea from "#c/Common/ui/cpTextArea.vue";
import CounterService from "#d/counter/CounterService";
import TextBlock from "#c/Counter/ui/textBlock.vue";

const characterCountWithSpaces = ref(0)
const characterCountWithoutSpaces = ref(0)
const byteWithSpacesCount = ref(0)
const byteWithoutSpacesCount = ref(0)

const counter = (inputText: string) => {
  characterCountWithSpaces.value = CounterService.countCharacters(inputText, true);
  characterCountWithoutSpaces.value = CounterService.countCharacters(inputText, false);

  byteWithSpacesCount.value = CounterService.countBytes(inputText, true)
  byteWithoutSpacesCount.value = CounterService.countBytes(inputText, false)
}
</script>

<template>
  <cp-card>
    <cp-title title="글자수세기" />
    <cp-text-area @update:input-updated="counter" />
    <text-block title="공백 포함 글자수 :" :value="characterCountWithSpaces" />
    <text-block title="공백 미포함 글자수 :" :value="characterCountWithoutSpaces" />
    <text-block title="공백 포함 Bytes :" :value="byteWithSpacesCount" />
    <text-block title="공백 미포함 Bytes :" :value="byteWithoutSpacesCount" />
  </cp-card>
</template>
