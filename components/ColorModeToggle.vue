<template>
    <i
      v-if="colorMode.value !== 'system'"
      class="pi cursor-pointer"
      :class="colorMode.value === 'dark' ? 'pi-sun' : 'pi-moon'"
      @click="toggleDarkMode()"
    ></i>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function toggleDarkMode() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>
