<script setup lang="js">

import ProjectButton from "~/components/home/ProjectButton.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import ProjectDescription from "~/components/home/ProjectDescription.vue";
import widuriEstockImg from "~/assets/project/widuri-estock.png";
import skincareImg from "~/assets/project/skincare.png";
import microserviceImg from "~/assets/project/microservice.png";
import voteImg from "~/assets/project/vote.png";
import {computed, ref} from "vue";

const selectedProjectKey = ref("widuriEstock");

const changeCurrentSelectedProject = (currentProject) =>{
  selectedProjectKey.value = currentProject
}

const projects = {
  widuriEstock: {
    projectName: "Widuri E-stock API",
    imgUrl: widuriEstockImg,
    heading: "This is a self-initiated project inspired by process product in and out at my parent shop using Java Spring Boot. This project is used as learning process to make well-structured and scalable API",
    heading2: "Key Features & Concepts Implemented",
    list: [
      {
        heading: "API Development",
        description: "Develop comprehensive API Endpoint for CRUD (Create, Read, Update, Delete) operations on product data."
      },
      {
        heading: "Database Design",
        description: "Designed a scalable relational Database schema from scratch to efficiently store product, category, user, and incoming product information."
      },
      {
        heading: "Testing",
        description: "Implemented Integration test to All Endpoint to ensure code quality, reliability, and correctness."
      },
      {
        heading: "Deployment",
        description: "Containerized the application using Docker and deployed it with NGINX as a reverse proxy for handle the traffic."
      },
    ],
    buttonGithub: {
      url: "https://github.com/abdullahfikri/widuri-estock-backend"
    },
    buttonDemo: {
      url: "https://api.mfikriproject.my.id/projects/estock/v1/docs"
    }

  },
  skinApp: {
    projectName: "Skin Enthusiasm App",
    imgUrl: skincareImg,
    heading: "A mobile application that provides skincare recommendations by analyzing a users facial image with a Machine Learning Model.",
    heading2: "My Key Contributions",
    list: [
      {
        heading: "Authentication System",
        description: "Developed a secure user authentication and authorization system to protect user data and manage access using JWT."
      },
      {
        heading: "API Intermediary",
        description: "Building core  API Endpoints that served as the bridge between the Android client and Machine Learning model."
      },
      {
        heading: "Deploying",
        description: "Deploy the backend app to Google cloud run and Cloud SQL as databases."
      }
    ],
    buttonGithub: {
      url: "https://github.com/24silver/webservice"
    },
  },
  rbac: {
    projectName: "RBAC Design for a Microservices Architecture (University Final ProjectSection)",
    imgUrl: microserviceImg,
    heading: "A final university project focused on designing and implementing a robust security model for a microservices environment. The primary goal was to establish a centralized system for authentication and authorization.",
    heading2: "Leveraging Keycloak as a centralized Identity and Access Management (IAM) platform to handle",
    list: [
      {
        heading: "Authentication",
        description: "Using protocol OpenID Connect (OIDC) to ensure users is authenticated."
      },
      {
        heading: "Authorization",
        description: "Enforce Role Based Access Control (RBAC) to restrict access to specify API endpoints based on user roles."
      },
    ],
    buttonGithub: {
      url: "https://github.com/abdullahfikri/iraise-microservice"
    },
  },
  pollApp: {
    projectName: "Polling App",
    imgUrl: voteImg,
    heading: "A mobile Voting application for Elections. This project is final assignment for Mobile Apps Class in university.",
    heading2: "My Key Contribution",
    list: [
      {
        heading: "Manage Team",
        description: "As the ProjectSection Manager for this project, I managed meeting schedules and delegated tasks to team members according to their individual skills."
      },
      {
        heading: "Backend",
        description: "Developed the backend API to handle requests from the Android application, responsible for processing user and election data."
      },
    ],
    buttonGithub: {
      url: "https://github.com/abdullahfikri/pollapp"
    },
  }
}

const selectedProjectData = computed(() => {
  return projects[selectedProjectKey.value]
})


</script>

<template>
  <section id="project" class="bg-gray-100 lg:min-h-56">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

      <h1 class="mb-16 text-center text-4xl md:text-5xl font-bold text-black">What I Build</h1>
      <div class="hidden md:block">
        <div class="flex flex-col mx-auto gap-5 md:flex-row  w-4/5 mb-4 md:mb-14">
          <div class="flex-1 mx-auto">
            <ProjectButton label="Widuri E-stock API"
                           :is-active="selectedProjectKey==='widuriEstock'"
                           current-project="widuriEstock"
                           @click="changeCurrentSelectedProject"
            />
          </div>
          <p class="text-2xl mx-4 flex-1 text-center none hidden md:inline">|</p>
          <div class="flex-1 mx-auto">
            <ProjectButton label="Skin Enthusiasm App"
                           :is-active="selectedProjectKey==='skinApp'"
                           current-project="skinApp"
                           @click="changeCurrentSelectedProject"

            />
          </div>
          <p class="text-2xl mx-4 flex-1 text-center">|</p>
          <div class="flex-1 mx-auto">
            <ProjectButton label="RBAC Design for a Microservices"
                           :is-active="selectedProjectKey==='rbac'"
                           current-project="rbac"
                           @click="changeCurrentSelectedProject"
            />
          </div>
          <p class="text-2xl mx-4 flex-1 text-center">|</p>
          <div class="flex-1 mx-auto">
            <ProjectButton label="Polling App"
                           :is-active="selectedProjectKey==='pollApp'"
                           current-project="pollApp"
                           @click="changeCurrentSelectedProject"
            />
          </div>

        </div>
        <transition name="fade" mode="out-in">
          <ProjectDescription :key="selectedProjectKey"
                              :project-name="selectedProjectData.projectName"
                              :img-url="selectedProjectData.imgUrl"
                              :heading="selectedProjectData.heading"
                              :heading2="selectedProjectData.heading2"
                              :list="selectedProjectData.list"
                              :button-github="selectedProjectData.buttonGithub"
                              :button-demo="selectedProjectData.buttonDemo"
          />
        </transition>
      </div>

<!--  mobile    -->
      <div class="flex flex-col gap-10 md:hidden" >
        <ProjectDescription v-for="data in projects" :key="data.projectName"
                            :project-name="data.projectName"
                            :img-url="data.imgUrl"
                            :heading="data.heading"
                            :heading2="data.heading2"
                            :list="data.list"
                            :button-github="data.buttonGithub"
                            :button-demo="data.buttonDemo"
        />
      </div>
    </div>
  </section>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Mulai dari 20px di bawah posisi normal */
}.fade-enter-active,
 .fade-leave-active {
   transition: opacity 0.3s ease, transform 0.3s ease;
 }

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Mulai dari 20px di bawah posisi normal */
}
</style>