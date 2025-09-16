<script setup lang="js">

import BaseButton from "~/components/ui/BaseButton.vue";

const props = defineProps({
  projectName: {
    type: String,
    required: true
  },
  imgUrl: {
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  heading2: {
    type: String,
    required: true
  },
  list: {
    type: Array,
    required: true
  },
  buttonGithub: {
    type: Object,
    required: false,
    default: null
  },
  buttonDemo: {
    type: Object,
    required: false,
    default: null
  }
});


</script>

<template>
  <div>
    <h3 class="block text-xl font-bold md:hidden">{{props.projectName}}</h3>
    <div class=" flex justify-between gap-24">
      <img :src="props.imgUrl" alt="Widuri E-stock API" class="hidden lg:block lg:w-96 h-72">
      <div>
        <p>{{ props.heading }}</p>
        <p class="mt-3  md:mt-6 md:mb-2 font-bold">{{ props.heading2 }}:</p>
        <ul  class="mt-1 md:mt-4 ml-4 list-disc">
          <li v-for="list in props.list"><span class="font-bold">{{list.heading}}:</span> {{list.description}}</li>
        </ul>
        <div class="mt-5 flex gap-4">
          <a :href="buttonGithub?.url" target="_blank"><BaseButton v-if="buttonGithub">Github</BaseButton></a>
          <a :href="buttonDemo?.url" target="_blank"><BaseButton variant="secondary" v-if="buttonDemo">Live Demo</BaseButton></a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>