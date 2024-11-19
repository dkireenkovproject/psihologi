<template>
  <div>
    <BlogPost1 v-if="Number(route.params.id) === 1" />
  </div>
</template>

<script setup lang="ts">
import BlogPost1 from '~/components/blog/posts/BlogPost1.vue';

const route = useRoute();
</script>

<style scoped>
</style>
