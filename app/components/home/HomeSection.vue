<script setup lang="js">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section id="home" class="max-w-[1200px] mx-auto min-h-[60vh] flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-20 md:py-32">
    <div class="flex flex-col md:flex-row items-center gap-8">
      <div class="lg:flex-1 text-left">
        <p class="text-xl">Hello, I am</p>
        <h1 class="text-4xl md:text-5xl font-bold text-black leading-tight">Muhammad
          <span class="text-white bg-black py-2 px-3 rounded-xl inline-block mt-2">Fikri</span>
        </h1>
        <h3 class="mt-5 md:mt-10 text-2xl md:text-3xl font-bold">Aspiring Backend Engineering</h3>
        <p class="mt-3">Backend Engineer and recent graduate specializing in Java and Spring Boot.</p>

        <div class="mt-8 md:mt-14">
          <div class="flex gap-3.5 mb-4 flex-col w-fit md:flex-row">
            <BaseButton><a href="#project">Look At My Project</a></BaseButton>
            <BaseButton><a href="#contact">My Contact</a></BaseButton>
          </div>
          <a href="/Muhammad-Fikri-CV-Backend-Engineering.pdf" target="_blank" ref="noopener noreferrer">
            <BaseButton variant="secondary">View CV</BaseButton>
          </a>
        </div>
      </div>

      <div class="flex-1 mt-10 md:mt-0 flex justify-end">
        <div class="hidden lg:block w-72 h-72 md:w-[30rem] md:h-[30rem]">
          <img
              src="../../assets/photo.png"
              alt="Photo Muhammad Fikri"
              class="w-full h-full  object-contain "
          >
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>