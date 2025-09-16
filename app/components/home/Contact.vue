<script setup lang="js">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
<section id="contact" class="bg-gray-100 lg:min-h-56">
  <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
    <h1 class="text-center text-4xl md:text-5xl font-bold text-black">How to Reach Me</h1>
    <div class="mt-10 lg:mt-16">
      <p>I am actively seeking opportunities to collaborate with anyone with growth mindset. <span class="md:block">Lets connect in:</span></p>
      <div class="mt-6 flex flex-col gap-2">
        <div >
          <a href="https://www.linkedin.com/in/mfikridevapp" target="_blank" class="inline-flex items-center font-semibold text-gray-900 hover:text-gray-600">
            <svg class="mr-2 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.336zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
            </svg>
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/abdullahfikri" target="_blank" class="inline-flex items-center font-semibold text-gray-900 hover:text-gray-600">
            <svg class="mr-2 h-7 w-7" fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.7481 24.9471C24.0901 24.7061 24.9111 22.9501 24.9111 12.9811C24.9111 1.98108 23.9111 0.981079 12.9111 0.981079C1.91113 0.981079 0.911133 1.98108 0.911133 12.9811C0.911133 22.9761 1.73713 24.7151 10.1391 24.9491C10.2121 24.8581 10.2391 24.7441 10.2391 24.6281C10.2391 24.3781 10.2291 21.8121 10.2241 20.9291C7.18713 21.5681 6.54613 19.5101 6.54613 19.5101C6.04913 18.2881 5.33313 17.9621 5.33313 17.9621C4.34213 17.3061 5.40813 17.3191 5.40813 17.3191C6.50413 17.3941 7.08113 18.4101 7.08113 18.4101C8.05513 20.0271 9.63713 19.5601 10.2591 19.2891C10.3581 18.6061 10.6401 18.1391 10.9521 17.8751C8.52713 17.6081 5.97813 16.7001 5.97813 12.6451C5.97813 11.4901 6.40413 10.5461 7.10213 9.80608C6.98913 9.53808 6.61513 8.46208 7.20913 7.00608C7.20913 7.00608 8.12613 6.72108 10.2121 8.09008C11.0831 7.85508 12.0171 7.73808 12.9461 7.73408C13.8731 7.73808 14.8071 7.85508 15.6801 8.09008C17.7651 6.72108 18.6801 7.00608 18.6801 7.00608C19.2761 8.46208 18.9011 9.53808 18.7881 9.80608C19.4881 10.5461 19.9111 11.4901 19.9111 12.6451C19.9111 16.7101 17.3581 17.6051 14.9251 17.8661C15.3171 18.1931 15.6661 18.8391 15.6661 19.8261C15.6661 20.7721 15.6601 22.4451 15.6561 23.5541C15.6541 24.1031 15.6531 24.5131 15.6531 24.6281C15.6531 24.7371 15.6821 24.8521 15.7481 24.9471V24.9471Z" fill="black" fill-rule="evenodd"/></svg>
            Github
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/fikri_amdradeon/" target="_blank" class="inline-flex items-center font-semibold text-gray-900 hover:text-gray-600">
            <svg class="mr-2 h-7 w-7" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
        </div>
        <div>
          <a href="/Muhammad-Fikri-CV-Backend-Engineering.pdf" target="_blank" ref="noopener noreferrer">
            <BaseButton variant="primary">View CV in New Tab</BaseButton>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>