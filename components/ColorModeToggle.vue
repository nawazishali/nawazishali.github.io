<template>
  <div class="flex justify-end py-10 px-6 absolute top-0 left-0 w-full">
    <i
      v-if="colorMode.value !== 'system'"
      class="pi cursor-pointer"
      :class="colorMode.value === 'dark' ? 'pi-sun' : 'pi-moon'"
      @click="toggleDarkMode()"
    ></i>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function toggleDarkMode() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>
