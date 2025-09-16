<script setup lang="js">

import TechnologyCard from "~/components/home/TechnologyCard.vue";

import dockerLogo from "~/assets/tech_logo/docker.png";
import javaLogo from "~/assets/tech_logo/java.png";
import jenkinsLogo from "~/assets/tech_logo/jenkins.png";
import jsLogo from "~/assets/tech_logo/js.svg";
import mongodbLogo from "~/assets/tech_logo/mongodb.svg";
import mysqlLogo from "~/assets/tech_logo/mysql.png";
import nodejsLogo from "~/assets/tech_logo/nodejs.svg";
import redisLogo from "~/assets/tech_logo/redis.svg";
import springLogo from "~/assets/tech_logo/spring.png";
import vueLogo from "~/assets/tech_logo/vue.svg";
import {ref} from "vue";

const technologies = ref([
  {name: 'Java', logo: javaLogo},
  {name: 'JavaScript', logo: jsLogo},
  {name: 'Spring Boot', logo: springLogo},
  {name: 'Vue', logo: vueLogo},
  {name: 'NodeJS', logo: nodejsLogo},
  {name: 'MySQL', logo: mysqlLogo},
  {name: 'MongoDB', logo: mongodbLogo},
  {name: 'Redis', logo: redisLogo},
  {name: 'Docker', logo: dockerLogo},
  {name: 'Jenkins', logo: jenkinsLogo},
]);

</script>

<template>
  <section class="bg-gray-100 lg:min-h-56">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col gap-16">
      <h1 class="text-center text-4xl md:text-5xl font-bold text-black">What Tech I Use</h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <TechnologyCard
            v-for="tech in technologies"
            :key="tech.name"
            :name="tech.name"
            :logo-src="tech.logo"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>