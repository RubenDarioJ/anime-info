<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { RandomAnime } from '@/types/random-anime.type'
import apiServices from '@/api/index'

// defineProps({
  // loading: {
  //   type: Boolean,
  //   default: false,
  //   required: false
  // },
  // items: {
  //   type: Array as () => RandomAnime[],
  //   default: [],
  //   required: true
  // }
// })
const id = crypto.randomUUID()
const loading = ref(false)
const items = ref<RandomAnime[]>([])
onMounted(() => {
  for (let i = 0; i < 3; i++) {
    apiServices.getRandom()
      .then((response) => {
        const anime = response.data.data
        items.value.push(anime)

        if (i === 2) {
          loading.value = false
        }
      })
  }
})
</script>

<template>
  <div>
    <div class="loading text-white" v-if="loading">
      Cargando...
    </div>
    <div v-else :id="`random-anime-carousel-${id}`" class="carousel slide">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(anime, index) in items"
          :key="`anime-${index}`"
          :class="`carousel-item ${index === 0 ? 'active' : ''}`"
        >
          <img
            :src="anime.images.webp.large_image_url"
            class="d-block w-100 rounded"
            loading="lazy"
            :alt="anime.title"
          >
        </div>
      </div>
      <button class="carousel-control-prev" type="button" :data-bs-target="`#random-anime-carousel-${id}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#random-anime-carousel-${id}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  height: 500px;
}

.carousel-item img {
  height: 100% !important;
  object-fit: contain;
}
</style>
