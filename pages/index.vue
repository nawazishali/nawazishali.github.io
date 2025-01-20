<template>
  <div class="container max-w-screen-lg px-6 relative pt-24">
    <ColorModeToggle />
    <IntroSection />
    <ProjectsSection />
    <OpenSourceSection />
    <Footer/>
  </div>
</template>

<script setup lang="ts">

let getProjects = async() => {
  let data = await queryCollection('projects').all()
  console.log(data)
}
getProjects()


</script>
