<script setup>
import {ref} from "vue";

const isOpen = ref(false);

const menuItems = ref([
  { name: 'Home', href: '/#home' },
  { name: 'Stack', href: '/#stack' },
  { name: 'Project', href: '/#project' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Blog', href: '/blog'},
  { name: 'CV', href: '/Muhammad-Fikri-CV-Backend-Engineering.pdf' },
])

const socialLinks = ref([
  {
    name: 'Github',
    href: 'https://github.com/abdullahfikri',
    icon: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mfikridevapp',
    icon: `<path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.336zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>`
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/fikri_amdradeon/',
    icon: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>`
  },
])
</script>

<template>
  <nav class="bg-gray-100 text-black sticky top-0 z-50 shadow-sm">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left Side: Contains Desktop Menu. Empty on mobile but necessary for justify-between. -->
        <div class="flex items-center">
          <div class="hidden md:flex items-baseline space-x-4">
            <template v-for="item in menuItems" :key="item.name">
              <a v-if="item.name === 'CV'"
                 :href="item.href"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
                {{ item.name }}
              </a>
              <NuxtLink v-else
                        :to="item.href"
                        class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
                {{ item.name }}
              </NuxtLink>
            </template>
          </div>
        </div>

        <!-- Right Side: Social Icons (Desktop) & Mobile Menu Button -->
        <div class="flex items-center">
          <!-- Social Icons (Desktop) -->
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink v-for="link in socialLinks" :key="link.name" :to="link.href" :target="link.name === 'CV' ? '_self' : '_blank'" rel="noopener noreferrer"
               :aria-label="link.name"
               class="text-gray-600 hover:text-cyan-500 transition-colors duration-300">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                   v-html="link.icon"></svg>
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
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
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-gray-100 border-t border-gray-200" @click.self="isOpen = false">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <template v-for="item in menuItems" :key="item.name">
            <a v-if="item.name === 'CV'"
               :href="item.href"
               target="_blank"
               rel="noopener noreferrer"
               @click="isOpen = false"
               class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors duration-300">
              {{ item.name }}
            </a>
            <NuxtLink v-else :to="item.href" @click="isOpen = false"
                      class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 transition-colors duration-300">
              {{ item.name }}
            </NuxtLink>
          </template>
          <hr class="border-gray-300 my-2">
          <div class="flex justify-center space-x-6 pt-2">
            <NuxtLink v-for="link in socialLinks" :key="link.name" :to="link.href" :target="link.name === 'CV' ? '_self' : '_blank'" rel="noopener noreferrer"
               :aria-label="link.name"
               class="text-gray-600 hover:text-cyan-500 transition-colors duration-300">
              <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
                   v-html="link.icon"></svg>
            </NuxtLink>
          </div>
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