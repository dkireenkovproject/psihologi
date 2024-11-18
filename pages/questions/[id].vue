<template>
  <div>
    <component :is="PostComponent" />
  </div>
</template>

<script setup lang="ts">
const componentsMap: Record<string, () => Promise<any>> = {
  1: () => import('@/components/questions/posts/QuestionPost1.vue'),
}

const route = useRoute()
const id = String(route.params.id)
const router = useRouter()



const PostComponent = defineAsyncComponent(async () => {
  const componentLoader = componentsMap[id]
  if (componentLoader) {
    return await componentLoader()  
  }
 
  router.push('/') 

})
</script>

<style scoped>
</style>
