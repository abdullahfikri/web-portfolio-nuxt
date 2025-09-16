<script setup lang="js">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  currentProject: String
});

const emits = defineEmits(['click']);



</script>

<template>
  <button  :class="['inline-block font-bold hover:text-cyan-400 hover:border-b-4 hover:cursor-pointer hover:border-cyan-400 pb-2',
      isActive ? 'text-cyan-400 border-cyan-400 border-b-4' : ''
  ]"
  @click.stop="emits('click', currentProject)"
  >
    {{label}}
  </button>
</template>

<style scoped>

</style>