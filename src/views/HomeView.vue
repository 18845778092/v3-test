<template>
  <div ref="el" v-on="obj">test area</div>
  <button @click="toggle = !toggle">toggle</button>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
const toggle = ref(true)
const el = ref()
const fn1 = () => alert('click')
const fn2 = () => alert('mouseenter')
let obj = reactive<any>({})
watch(toggle, (newToggle) => {
  if (newToggle) {
    obj = {}
    obj['click'] = fn1
  } else {
    obj = {}
    obj['mouseenter'] = fn2
  }
})
console.log('commit1')
console.log('commit2')
</script>
