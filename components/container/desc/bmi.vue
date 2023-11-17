<script setup lang="ts">
const descriptionList = {
  first: {
    title: "BMI 지수 보는 법",
    desc: "- BMI(Body Mass Index, BMI)는 체질량 지수라고도 합니다.\n" +
        "- <span class='danger'>자신의 몸무게(kg)를 키의 제곱(m)으로 나누어 계산합니다.</span>\n" +
        "- 하지만, BMI는 단순히 몸무게와 키만 고려하므로 근육량, 유전적 요인, 신체 구성 등을 반영하지 못하는 한계가 있습니다.\n" +
        "- 여러 가지 이유로 다양한 체형과 건강상태가 있기 때문에, 체질량지수는 개인의 건강을 평가하는 유일한 척도는 아닙니다."
  }
}
</script>

<template>
  <div class="row q-ma-lg">
    <ui-card>
      <template #default>
            <div class="form col">
              <ul>
                <li>
                  <label>BMI</label><label class="dv1">18.5</label><label class="dv2">23</label><label>25</label>
                  <ul class="clearfix">
                    <li class="low-weight">저체중</li>
                    <li class="regular">정상</li>
                    <li class="overweight">과체중</li>
                    <li class="obesity">비만</li>
                  </ul>
                  <label>체중</label>
                </li>
              </ul>
            </div>
      </template>
    </ui-card>
    <ui-desc-card :title="descriptionList.first.title" :desc="descriptionList.first.desc" />
  </div>
</template>

<style scoped>
  .form ul { padding-left: 0 }
  .form li {list-style: none}
  .form label		{ font-size:15px; font-weight:700; margin-right:12px}
  .form span		{ font-size:16px}
  .form dl			{ margin:10px 0 18px 0}
  .form dt,
  .form dd			{ float:left; display:inline-block; font-size:14px}
  .form dt			{ width:20%}
  .form dd			{ width:80%; font-weight:700; color:#eb4f3a}
  .form li,
  .form li label	{ font-size:13px; font-weight:700}
  .form li label	{ display:inline-block; width:21%}
  .form li label.dv1{ width:20.5%}
  .form li label.dv2{ width:16.5%}
  .form li li		{ float:left; width:25%; height:35px; color:#fff; line-height:35px; text-align:center}
  .form li li.low-weight{ width:25%; background-color:#329ae3}
  .form li li.regular{ width:20%; background-color:#95c520}
  .form li li.overweight{ width:18%; background-color:#ee942a}
  .form li li.obesity{ width:36.9%; background-color:#f15232}
</style>