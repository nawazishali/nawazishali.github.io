<template>
  <footer>
    <PrimeDivider />
    <div
      class="flex flex-col md:flex-row justify-between items-center py-6 gap-4"
    >
      <div class="text-center md:text-left">
        <p class="mb-2">
          Designed and Developed by
          <a
            href="https://github.com/nawazishali"
            class="text-primary-500"
            target="_blank"
            rel="noopener"
          >
            Nawazish Ali
          </a>
        </p>
        <p>
          Made with Nuxt, PrimeVue and TailwindCSS
        </p>
        <!-- <p>
          Design inspiration:
          <a
            href="https://nomangul.com"
            target="_blank"
            rel="noopener"
            >Noman</a
          >
          &
          <a
            href="https://murk.dev"
            target="_blank"
            rel="noopener"
            >Murk</a
          >
        </p> -->
      </div>

      <div class="flex items-center gap-4">
        <a
          href="https://github.com/nawazishali/nawazishali.github.io"
          target="_blank"
          rel="noopener"
          class="hover:text-primary-500"
        >
          <i class="pi pi-github text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/nawazishaliejaz"
          target="_blank"
          rel="noopener"
          class="hover:text-primary-500"
        >
          <i class="pi pi-linkedin text-2xl"></i>
        </a>
        <a
          href="https://twitter.com/Nawazishaliejaz"
          target="_blank"
          rel="noopener"
          class="hover:text-primary-500"
        >
          <i class="pi pi-twitter text-2xl"></i>
        </a>
      </div>
    </div>

    <div class="text-center py-4 text-sm text-gray-600 dark:text-gray-400">
      © {{ new Date().getFullYear() }} Nawazish Ali. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
