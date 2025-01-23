<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blogs').path(route.path).first()
})

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})
</script>

<template>
  <ContentRenderer v-if="post" :value="post" />
  <div v-else>Home not found</div>
</template>
