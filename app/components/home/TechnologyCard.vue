<script setup lang="js">
defineProps({
  name: {
    type: String,
    required: true, // Nama teknologi wajib diisi
  },
  logoSrc: {
    type: String,
    required: true, // Path ke logo wajib diisi
  },
});

</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

    <div class="h-16 w-16 mb-4">
      <img :src="logoSrc" :alt="`${name} logo`" class="w-full h-full object-contain" />
    </div>

    <span class="font-semibold text-gray-700">{{ name }}</span>

  </div>
</template>

<style scoped>

</style>