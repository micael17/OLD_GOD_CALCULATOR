<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div>
      <slot name="title" />
    </div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="number"
        v-model="totalValue"
        label="합계 금액"
        hint="부가세를 포함한 최종 금액"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'cpForm',
  setup () {
    const totalValue = ref(null)
    const accept = ref(false)

    return {
      totalValue,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style scoped>

</style>