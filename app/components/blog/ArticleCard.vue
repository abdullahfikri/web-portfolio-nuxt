<script setup lang="ts">

defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: any) => {
      return value.title
          && value.publishDate
          && value.path
          && value.description
          && Array.isArray(value.tags) && value.tags.length > 0;
    }
  }
});

</script>

<template>
  <section class="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
    <div class="p-6">
      <div class="flex items-center justify-between gap-4 mb-1 md:mb-0">
        <NuxtLink :to="article.path">
          <h2 class="mb-3 text-xl font-semibold text-gray-900 smooth-underline">
            {{ article.title }}
          </h2>
        </NuxtLink>
        <p class="mb-2 text-sm text-gray-500 flex-1 md:flex-none flex-shrink-0">
          {{ new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}
        </p>
      </div>
      <p v-if="article.description" class="mb-5 text-base text-gray-600 line-clamp-2">
        {{ article.description }}
      </p>
      <div v-if="article.tags && article.tags.length" class="flex flex-wrap gap-2">
        <span v-for="tag in article.tags" :key="tag" class="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          #{{ tag.toLowerCase() }}
        </span>
      </div>
    </div>

  </section>


</template>

<style scoped>
.smooth-underline {
  display: inline-block;
  position: relative;
}

.smooth-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -4px; /* Adjust this value to change the distance from the text */
  left: 0;
  background-color: currentColor;
  transform-origin: bottom right;
  transition: transform 0.2s ease-out;
}

a:hover .smooth-underline::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>