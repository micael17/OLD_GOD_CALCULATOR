<script setup lang="ts">

interface Option {
  value: string,
  label: string
}


const options: Option[] = [{
  value: '일',
  label: '일'
}, {
  value: '주',
  label: '주'
}, {
  value: '개월',
  label: '개월'
}]
const standard = "원"
const principal = ref(0)
const duration = ref(0)
const targetRate = ref(0)
const durationType = ref<"일" | "주" | "월">("일")
const results = ref<any[]>([])

const calculateCompoundInterest = () => {
  const _principal = parseFloat(String(principal.value))
  const _duration = parseInt(String(duration.value))
  const _targetRate = parseFloat(String(targetRate.value))

  if (_principal <= 0 || _duration <= 0 || _targetRate <= 0) {
    results.value = [];
    return;
  }

  results.value = [];
  let currentPrincipal = _principal;
  const rate = 1 + _targetRate / 100;

  for (let i = 0; i < _duration; i++) {
    const profit = currentPrincipal * (rate - 1);
    currentPrincipal *= rate;

    results.value.push({
      principal: currentPrincipal,
      profit,
      profitRate: (currentPrincipal / _principal - 1) * 100,
    });
  }
}
</script>

<template>
  <div>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md">
        <q-form
          @submit="calculateCompoundInterest"
        >
          <h4>복리 계산기</h4>
          <hr>
          <ui-input
              title="투자 원금"
              type="number"
              v-model="principal"
          />
          <div class="row">
            <div class="col-3">
              <ui-input
                  title="기간"
                  type="number"
                  v-model="duration"
              />
            </div>
            <div class="col">
              <ui-select title="" v-model="durationType" :options="options" />
            </div>
          </div>
          <ui-input
              title="목표 수익률(%)"
              type="number"
              v-model="targetRate"
          />

          <div class="q-pa-md q-gutter-sm row justify-evenly">
            <q-btn label="계산" type="submit" color="primary" size="lg"/>
          </div>
        </q-form>
      </div>
    </div>
    <hr>
    <div class="row q-ma-lg justify-center items-start content-start">
      <div class="col q-ma-md result-table" v-if="results.length > 0">
        <table >
          <thead>
          <tr>
            <th>기간</th>
            <th>수익금</th>
            <th>총 금액(원금+수익금)</th>
            <th>수익률</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ index + 1 }}{{ durationType }}</td>
            <td>{{ result.profit.toFixed(0) }}{{ standard }}</td>
            <td>{{ result.principal.toFixed(0) }}{{ standard }}</td>
            <td>{{ result.profitRate.toFixed(2) }}%</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-table {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}

.result-table table {
  width: 100%;
  border-collapse: collapse;
}

.result-table th,
.result-table td {
  text-align: center;
  padding: 4px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.result-table th:first-child,
.result-table td:first-child {
  border-left: 1px solid #ccc;
}

.result-table th:last-child,
.result-table td:last-child {
  border-right: 1px solid #ccc;
}
</style>