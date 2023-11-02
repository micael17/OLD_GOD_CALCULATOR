<script setup lang="ts">
import CounterService from "#d/counter/CounterService";

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
  <ui-card>
    <ui-title title="글자수세기" />
    <ui-text-area @update:input-updated="counter" />
    <ui-text-block title="공백 포함 글자수 :" :value="characterCountWithSpaces" />
    <ui-text-block title="공백 미포함 글자수 :" :value="characterCountWithoutSpaces" />
    <ui-text-block title="공백 포함 Bytes :" :value="byteWithSpacesCount" />
    <ui-text-block title="공백 미포함 Bytes :" :value="byteWithoutSpacesCount" />
  </ui-card>
</template>
