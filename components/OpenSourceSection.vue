<template>
  <section class="mb-20">
    <h1 class="text-primary-500 text-4xl lg:text-5xl font-bold mb-4">
      Open Source work and contributions
    </h1>
    <h2 class="text-surface-700 dark:text-surface-200 text-xl font-medium mb-8">
      Here are some of my Open Source contributions and projects I am working on for the community.
    </h2>

    <div v-if="!pinnedRepos.length" class="flex justify-center">
      <PrimeProgressSpinner class="w-40 h-40" />
    </div>

    <div v-else class="grid md:grid-cols-2 gap-6">
      <PrimeCard
        v-for="repo in pinnedRepos"
        :key="repo.name"
      >
        <template #content>
          <div class="flex flex-row-reverse justify-between lg:justify-normal items-center lg:flex-row gap-4 mb-4">
            <i class="pi pi-github text-6xl text-surface-400"></i>
            <div>
              <h2 class="text-xl font-bold text-primary-500">
                {{ repo.name }}
              </h2>
              <p class="m-0">
                {{ repo.description }}
              </p>
            </div>
          </div>
          <!-- <div class="flex gap-4 items-center justify-between">
            <a
              :href="repo.link"
              target="_blank"
              rel="noopener"
              v-tooltip="'See it live'"
            >
              <i class="pi pi-link text-primary-500 text-4xl"></i>
            </a>
          </div> -->
        </template>
      </PrimeCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const { pinnedRepos, getGithubPinnedRepos } = useGithubPinnedRepos()

onMounted(async () => {
  getGithubPinnedRepos('nawazishali')
})
</script>
