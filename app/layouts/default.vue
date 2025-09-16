<script setup>
import Navbar from '~/components/common/Navbar.vue';
import Footer from '~/components/common/Footer.vue';
</script>

<template>
  <div class="bg-white font-[Inter]">
    <Navbar />
    <slot /> <Footer />
  </div>
</template>