<script setup lang="js">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section id="about" class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
    <h1 class="text-center text-4xl lg:text-5xl font-bold text-black">Who Am I</h1>
    <p class="text-justify mx-auto mt-10 lg:mt-16">Aspiring Software Engineering especially in Backend Engineering. Interest in Object Oriented Programming (OOP) paradigm to build well-structured and easily maintaining and scalable project. Also the reason I moved from Javascript to Java language as primary language while valuing both.</p>

    <div class="mt-6 lg:mt-10 flex flex-col gap-6">
      <h3 class="text-2xl font-bold">Education</h3>
      <div class="flex flex-col md:flex-row gap-10 lg:gap-16">
        <div class="flex-1">
          <p><span class="font-bold">UIN Sultan Syarif Qasim</span> | Pekanbaru, Indonesia</p>
          <p>Informatics Engineering | <span class="font-bold">2020 - 2025</span></p>
          <ul class="mt-4 ml-4 list-disc ">
            <li>Focus on Problem Solving, Design Architecture Software, management Database SQL & NoSQL, and Security.</li>
            <li>Design and Implementation of a Role-Based Access Control (RBAC) System for a Microservices Architecture using Keycloak as university Final Project.</li>
          </ul>
        </div>
        <div class="flex-1">
          <p><span class="font-bold">Bangkit Academy 2024</span> | <span class="font-bold">February - July 2024</span></p>
          <p>Cloud Computing Learning Path</p>
          <ul class="mt-4 ml-4 list-disc">
            <li>Complete an intensive program of over 900 hours focused on Google Cloud Platform, architecture cloud, and DevOps.</li>
            <li>Contribute to the Capstone Project by building API Endpoints for Android client and deploying the Apps on Cloud Run, and using Cloud SQL as Database.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <a href="/Muhammad-Fikri-CV-Backend-Engineering.pdf" target="_blank" ref="noopener noreferrer">
        <BaseButton variant="primary">View CV in New Tab</BaseButton>
      </a>
    </div>
  </section>
</template>

<style scoped>

</style>