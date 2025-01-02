<template>
  <div class="flex justify-end py-10">
    <i
      class="pi cursor-pointer"
      :class="colorMode.preference === 'dark' ? 'pi-sun' : 'pi-moon'"
      @click="toggleDarkMode()"
    ></i>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function toggleDarkMode() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}
</script>
