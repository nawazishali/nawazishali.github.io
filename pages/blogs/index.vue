<script setup lang="ts">
const { data: posts } = await useAsyncData('blogs', () => queryCollection('blogs').all())
</script>

<template>
  <div>
    <h1>List of my Blogs</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
