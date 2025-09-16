<script setup lang="js">
import { ref, computed } from 'vue';
import TestimonialCard from "~/components/home/TestimonialCard.vue";

import lutfiImg from '~/assets/testimonials/img/lutfi.jpg'
import ajiBImg from '~/assets/testimonials/img/aji-b.jpg'

const allTestimonials = ref([
  {
    name: 'Lutfi',
    job: 'Mobile Dev',
    linkedin: 'https://www.linkedin.com/in/lutfi-aldri/',
    photo: lutfiImg,
    comment: 'Dia seorang survivor sejati, ikhtiar mencari solusi adalah gambarannya!',
  },
  {
    name: 'Aji Bayu Perrmadi\n',
    job: 'Developer',
    linkedin: 'https://www.linkedin.com/in/aji-bayu-permadi-11a5a9214/',
    photo: ajiBImg,
    comment: 'Programmer handal, yang sedang mencari jati diri',
  },
  {
    name: 'Sutiyoso',
    job: 'Programmer Dari Lahir',
    linkedin: '#', // Ganti dengan link asli
    photo: 'https://i.pravatar.cc/150?u=budi', // Ganti dengan foto asli
    comment: 'Sangat berbakat dalam memecahkan masalah kompleks. Kemampuan analitisnya luar biasa dan selalu menjadi andalan dalam tim kami selama di kampus.',
  },
  {
    name: 'Sutrisno',
    job: 'UI/UX Designer',
    linkedin: '#',
    photo: 'https://i.pravatar.cc/150?u=citra',
    comment: 'Memiliki sense of design yang kuat untuk seorang developer. Kolaborasi dengannya dalam proyek bersama sangat menyenangkan dan efisien.',
  },
  {
    name: 'Bobom',
    job: 'DevOps Engineer di Travelola',
    linkedin: '#',
    photo: 'https://i.pravatar.cc/150?u=doni',
    comment: 'Selalu update dengan teknologi terbaru. Dia yang pertama kali memperkenalkan saya pada konsep CI/CD dan containerization. Sangat inspiratif!',
  },

  // Tambahkan testimoni lain di sini
]);

// --- LOGIKA "SEE MORE" ---
const visibleCount = ref(3); // Jumlah item yang ditampilkan awalnya

// Computed property untuk mengambil testimoni yang akan ditampilkan
const visibleTestimonials = computed(() => {
  return allTestimonials.value.slice(0, visibleCount.value);
});

// Computed property untuk mengecek apakah masih ada testimoni yang tersembunyi
const hasMore = computed(() => {
  return visibleCount.value < allTestimonials.value.length;
});

// Fungsi untuk menampilkan semua testimoni
const showAll = () => {
  visibleCount.value = allTestimonials.value.length;
};
</script>

<template>
  <section id="testimony" class="bg-gray-50 py-16">
    <div class="max-w-[1200px] mx-auto px-4">
      <h2 class="text-center text-4xl lg:text-5xl font-bold text-black ">What They Say</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-16">
        <TestimonialCard
            v-for="testimonial in visibleTestimonials"
            :key="testimonial.name"
            v-bind="testimonial"
        />
      </div>

      <div v-if="hasMore" class="mt-12 text-center">
        <button
            @click="showAll"
            class="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Show All
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>