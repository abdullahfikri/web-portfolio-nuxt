<script setup>


import {computed} from "vue";

const props = defineProps({
  variant: {
    type: String,
    // Validator
    validator: (value) => ['primary', 'secondary'].includes(value),
    default: 'primary', // Gaya default jika tidak ada variant yang diberikan
  },
});

const buttonClass = computed(() => {
  const baseClasses = 'px-4 md:px-3 py-3 md:py-4 rounded-md font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer';

  if (props.variant === 'primary') {
    // Varian 1: Background hitam, teks putih
    return `${baseClasses} bg-black text-white hover:bg-gray-800 focus:ring-gray-500`;
  }

  if (props.variant === 'secondary') {
    // Varian 2: Background putih, teks hitam, dengan border
    return `${baseClasses} bg-white text-black border-2 border-black hover:bg-gray-100 focus:ring-gray-800`;
  }

  return baseClasses;
});

</script>

<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>