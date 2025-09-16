<script setup>
// Impor semua section Anda di sini
import HomeSection from '~/components/home/HomeSection.vue'
import Stack from '~/components/home/Stack.vue';
import About from '~/components/home/About.vue';
import ProjectSection from '~/components/home/ProjectSection.vue';
import Testimonials from '~/components/home/Testimonials.vue';
import Contact from '~/components/home/Contact.vue';
</script>

<template>
  <main>
    <HomeSection />
    <Stack />
    <About />
    <ProjectSection />
    <Contact />
  </main>
</template>