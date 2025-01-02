<template>
  <section
    class="flex lg:flex-row flex-col-reverse lg:items-center justify-between gap-6 mb-20"
  >
    <div class="w-full lg:w-4/6">
      <h1 class="text-primary-500 text-6xl lg:text-7xl font-bold mb-2">Nawazish Ali</h1>
      <h2 class="text-surface-700 dark:text-surface-200 text-2xl font-bold mb-8">
        Lead Frontend Developer (Javascript | Vue | Nuxt)
      </h2>
      <div class="text-xl font-medium grid gap-2 text-wrap mb-8">
        Highly skilled Senior Frontend Developer with 8+ years of experience in
        crafting and maintaining robust web applications across diverse
        industries (Cloud Security, Restaurant, Airline, Medical, HR). Proven
        ability to adapt to dynamic environments, including successful remote
        work experiences in Canada and Germany. Led a team in a critical project
        for Costco, successfully refactoring and modernizing multiple
        applications. Passionate about developer growth, actively contributing
        to the tech community through leading a freeCodeCamp study group and
        organizing meetups.
      </div>
      <div class="flex flex-row flex-wrap gap-6 items-center justify-start">
        <a
          href="mailto:nawazishaliejaz@gmail.com"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center"
        >
          <i class="pi pi-envelope"></i>
        </a>
        <a
          href="https://github.com/nawazishali"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center"
        >
          <i class="pi pi-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/nawazishaliejaz"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center"
        >
          <i class="pi pi-linkedin"></i>
        </a>
        <div class="flex flex-wrap gap-4">
          <PrimeButton
            icon="pi pi-file-pdf"
            variant="outlined"
            severity="primary"
            label="Download Resume"
            as="a"
            href="/documents/Nawazish Ali CV - Dec 2024.pdf"
            download
          />
          <PrimeButton
            icon="pi pi-calendar"
            variant="outlined"
            severity="primary"
            label="Book a meeting"
            as="a"
            href="https://cal.com/nawazishali"
            target="_blank"
            rel="noopener"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-start">
      <img
        class="rounded-full w-64 aspect-square"
        src="/images/profile-picture.jpg"
        alt="profile-picture"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
