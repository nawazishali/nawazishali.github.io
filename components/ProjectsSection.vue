<template>
  <section class="mb-20">
    <h1 class="text-primary-500 text-4xl lg:text-5xl font-bold mb-4">
      Projects
    </h1>
    <h2 class="text-surface-700 dark:text-surface-200 text-xl font-medium mb-8">
      Here is a list of some of the awesome projects I have worked with.
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      <PrimeCard
        v-for="project in projects"
        :key="project.name"
      >
        <template #content>
          <div class="flex flex-row-reverse lg:flex-row gap-4 mb-4">
            <img
              :src="project.imageUrl"
              class="mr-2 aspect-square w-20 h-20 lg:h-32 lg:w-32 rounded-3xl"
              alt="project-image"
            />
            <div>
              <a :href="project.link" target="_blank" rel="noopener">
                <h2 class="text-xl font-bold text-primary-500">
                  {{ project.name }}
                </h2>
              </a>
              <p class="m-0">
                {{ project.description }}
              </p>
            </div>
          </div>
          <div class="flex gap-2 mb-4 flex-wrap">
            <PrimeChip :label="skill" v-for="skill in project.builtWith" />
          </div>
          <div class="flex gap-4 items-center justify-between">
            <p class="font-bold">{{project.invlovement}} • {{project.Job}}</p>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              v-tooltip.left="'See it live'"
            >
              <i class="pi pi-link text-surface-400 hover:text-primary-500 text-6xl"></i>
            </a>
          </div>
        </template>
      </PrimeCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const { projects } = useProjects();
</script>
