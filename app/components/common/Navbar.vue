<script setup>
import {ref} from "vue";

const isOpen = ref(false);

const menuItems = ref([
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'ProjectSection', href: '#project' },
  { name: 'Testimony', href: '#testimony' },
  { name: 'Contact', href: '#contact' },

])
</script>

<template>
  <nav class="bg-gray-100 text-black sticky top-0 z-50 shadow-sm">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="#home" class="flex items-center">
            <img src="../../assets/logo.png" class="h-16 w-auto" alt="Your Logo">
          </a>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a v-for="item in menuItems" :key="item.name" :href="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              {{item.name}}
            </a>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" type="button"
                  class="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-gray-100 border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a v-for="item in menuItems" :key="item.name" :href="item.href" @click="isOpen = false"
             class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors duration-300">
            {{ item.name }}
          </a>
        </div>
      </div>
    </transition>

  </nav>

</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>