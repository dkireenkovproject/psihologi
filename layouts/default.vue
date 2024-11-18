<template>
  <div>
    <CommonHeader v-if="showHeaderFooter"/>
    <slot />
    <CommonFooter v-if="showHeaderFooter"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const showHeaderFooter = ref(true)

const route = useRoute()

watch(
  () => route.path,
  (newValue) => {
    if ((newValue.startsWith('/questions/') && newValue !== '/questions') || newValue === '/group') {
      showHeaderFooter.value = false
    } 
    else {
      showHeaderFooter.value = true
    }
  },
  { immediate: true }
)
</script>

<style scoped>
</style>
