<script setup lang="ts">
import WeatherService from "#d/weather/WeatherService";
import type {WeatherValue} from "Weather";

const seoul = ref<WeatherValue | undefined>()
const busan = ref<WeatherValue | undefined>()
const inchn = ref<WeatherValue | undefined>()
const daegu = ref<WeatherValue | undefined>()
const daejn = ref<WeatherValue | undefined>()
const gwaju = ref<WeatherValue | undefined>()

seoul.value = await WeatherService.getWeather('SEOUL')
busan.value = await WeatherService.getWeather('BUSAN')
inchn.value = await WeatherService.getWeather('INCHN')
daegu.value = await WeatherService.getWeather('DAEGU')
daejn.value = await WeatherService.getWeather('DAEJN')
gwaju.value = await WeatherService.getWeather('GWAJU')

</script>

<template>
  <div class="container">

    <q-list dense>
      <q-item>
        <q-item-label>실시간 온도</q-item-label>
      </q-item>
      <q-item v-if="seoul && seoul.temperature">
        <q-item-section side>서울</q-item-section>
        <q-item-section>
          <div class="block">
            <q-icon name="thermostat" color="red-5" size="sm" />
            {{ seoul.temperature }}°C
          </div>
        </q-item-section>
      </q-item>

      <q-item v-if="busan && busan.temperature">
        <q-item-section side>부산</q-item-section>
        <q-item-section>
          <div class="block">
            <q-icon name="thermostat" color="red-5" size="sm" />
            {{ busan.temperature }}°C
          </div>
        </q-item-section>
      </q-item>

      <q-item v-if="inchn && inchn.temperature">
        <q-item-section side>인천</q-item-section>
        <q-item-section>
          <div class="block">
            <q-icon name="thermostat" color="red-5" size="sm" />
            {{ inchn.temperature }}°C
          </div>
        </q-item-section>
      </q-item>

      <q-item v-if="daegu && daegu.temperature">
        <q-item-section side>대구</q-item-section>
        <q-item-section>
          <div class="block">
            <q-icon name="thermostat" color="red-5" size="sm" />
            {{ daegu.temperature }}°C
          </div>
        </q-item-section>
      </q-item>

      <q-item v-if="daejn && daejn.temperature">
        <q-item-section side>대전</q-item-section>
        <q-item-section>
          <div class="block">
            <q-icon name="thermostat" color="red-5" size="sm" />
            {{ daejn.temperature }}°C
          </div>
        </q-item-section>
      </q-item>

      <q-item v-if="gwaju && gwaju.temperature">
        <q-item-section side>광주</q-item-section>
        <q-item-section>
          <div class="block">
            <q-icon name="thermostat" color="red-5" size="sm" />
            {{ gwaju.temperature }}°C
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped>

.container {
  width: 200px;
  margin-top: 2%;
  margin-bottom: 2%;
}

@media only screen and (max-width:1500px) {
  .container {
    display: none;
  }
}
</style>