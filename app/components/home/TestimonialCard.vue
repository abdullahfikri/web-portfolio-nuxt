<script setup lang="js">
defineProps({
  photo: { type: String, required: true },
  name: { type: String, required: true },
  job: { type: String, required: true },
  linkedin: { type: String, required: true },
  comment: { type: String, required: true },
});

</script>

<template>
  <div class="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
    <div class="flex items-center pb-4">
      <img :src="photo" :alt="name" loading="lazy" class=" h-16 w-16 md:h-20 md:w-20 rounded-full object-cover shadow-sm" />
      <div class="ml-4">
        <p class="font-bold text-gray-900">{{ name }}</p>
        <p class="text-sm text-gray-500">{{ job }}</p>
      </div>
    </div>

    <p class="flex-grow text-gray-600 italic content-center">"{{ comment }}"</p>

    <div class="mt-4 border-t pt-4">
      <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600">
        <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.336zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>