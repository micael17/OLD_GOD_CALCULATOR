<script setup lang="ts">
  const desc1 = '이 페이지를 통해 현재 사용 중인 PC의 IP 주소 및 위치 정보를 확인할 수 있습니다.\n' +
      '      사무실과 같은 기업은 대부분 공인 IP를 사용하여 IP가 고정됩니다.\n' +
      '      그러나 일반 가정집은 유동 IP를 사용하기 때문에 IP가 변경될 수 있습니다.\n' +
      '      이 기능으로 IP 주소의 변경 여부를 확인해보세요!'
</script>

<template>
  <div class="desc-white-card">
    <div class="definition" v-html="desc1"/>
    <p class="note">
      이 페이지는 사용자의 IP 주소 및 위치 정보를 수집하지 않습니다.
    </p>
  </div>
</template>

<style scoped>
.desc-white-card {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.definition {
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 20px;
  white-space: pre-line; /* 연속적인 공백은 하나로 표시되며 줄바꿈은 적용됩니다. */
}

p {
  text-align: justify;
  margin-bottom: 20px;
}

.note {
  margin-top: 30px;
  font-size: 0.9em;
  color: #ff0000;
}
</style>