<script setup>

  import {useAsyncData} from "#app";
  import ArticleCard from "~/components/blog/ArticleCard.vue";

  const { data: articles }= await useAsyncData('blog-articles-list', () => {
    return queryCollection('blog')
        .where('isDraft',  '<>', true)
        .order('publishDate', 'DESC')
        .all()
  })
</script>

<template>
  <main class="prose prose-lg  max-w-[1200px] mx-auto min-h-[90vh] px-4 sm:px-6 lg:px-8 py-20">
    <h1>My Blog</h1>
    <p>A collection of my thoughts and tutorials.</p>

    <section v-if="articles" class="not-prose mt-8 grid grid-cols-1 gap-4">
      <ArticleCard
          v-for="article in articles"
          :key="article.path"
          :article="article"
      />
    </section>
  </main>
</template>