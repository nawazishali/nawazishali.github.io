<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <PrimeButton label="Toggle Dark Mode" @click="toggleDarkMode()" />
    <div class="text-4xl">abcd</div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
function toggleDarkMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
    // document.documentElement.classList.toggle('dark-mode');
}
</script>