<script setup lang="ts">

const route = useRoute();
const {data: article} = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
})

</script>

<template>
  <article class="prose prose-lg max-w-[1200px] mx-auto min-h-[90vh] px-4 sm:px-6 lg:px-8 py-8   lg:py-14">
    <template v-if="article">
      <header class="mb-8">
        <p class="text-sm mb-10 text-gray-400 text-end"
            v-if="article.publishDate">
          Posted on {{ new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}
        </p>
        <h1 class="mb-2 text-4xl font-bold">{{ article.title }}</h1>
        <p v-if="article.subtitle" class="text-xl text-gray-600 italic">{{ article.subtitle }}</p>
      </header>

      <ContentRenderer :value="article" />
    </template>

    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>

  </article>
</template>

<style scoped>

</style>