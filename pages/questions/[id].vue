<template>
  <div>
    <QuestionPost1 v-if="Number(route.params.id) === 1" />
  </div>
</template>

<script setup lang="ts">
import QuestionPost1 from '~/components/questions/posts/QuestionPost1.vue';
const route = useRoute();

definePageMeta({
  layout: 'components'
})
</script>

<style scoped>
</style>
