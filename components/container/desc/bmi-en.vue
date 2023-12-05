<script setup lang="ts">
const descriptionList = {
  first: {
    title: "How to read BMI Index",
    desc: "- BMI (Body Mass Index, BMI) is also known as the body mass index.\n" +
        "- <span class='danger'>You calculate it by dividing your weight (lbs) by the square of your height (inches).</span>\n" +
        "- However, BMI has limitations as it only considers weight and height, not reflecting muscle mass, genetic factors, body composition, etc.\n" +
        "- There are various body types and health statuses for various reasons, so the body mass index is not the only measure to evaluate an individual's health."
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
              <label>BMI</label><label class="dv1">18.5</label><label class="dv2">25</label><label>30</label>
              <ul class="clearfix">
                <li class="low-weight">Underweight</li>
                <li class="regular">Normal weight</li>
                <li class="overweight">Overweight</li>
                <li class="obesity">Obese</li>
              </ul>
              <label>Weight</label>
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