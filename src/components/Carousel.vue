<script setup lang="ts">
import type { SearchAnime } from '@/types/search-anime.type'

defineProps({
  anime: {
    type: Object as () => SearchAnime | null,
    default: null
  }
})
</script>
<template>
  <div id="carouselExampleIndicators" class="carousel slide" v-if="anime">
    <div class="carousel-indicators">
      <button
        v-for="(anime, animeIndex) in Object.values(anime)"
        :key="animeIndex"
        type="button"
        :data-bs-target="`#carouselExampleIndicators_${animeIndex}`"
        :data-bs-slide-to="animeIndex"
        :class="{ active: animeIndex === 0 }"
        :aria-current="animeIndex === 0 ? 'true' : 'false'"
        :aria-label="`Slide ${animeIndex + 1}`"
      ></button>
    </div>
    <div
      v-for="(anime, animeIndex) in Object.values(anime)"
      :key="animeIndex"
      :id="`carouselExampleIndicators_${animeIndex}`"
      class="carousel-inner"
    >
      <p>{{ animeIndex }}</p>
      <div :class="`carousel-item ${animeIndex === 0 ? 'active' : ''}`">
        <img :src="anime.images.jpg.image_url" class="d-block w-50 img-fluid mx-auto" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#carouselExampleIndicators`"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#carouselExampleIndicators`"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped></style>
