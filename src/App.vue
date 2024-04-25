<script setup lang="ts">
import { ref  } from 'vue'
import type { SearchAnime } from '@/types/search-anime.type'
import apiServices from '@/api/index'
import NavBar from './components/NavBar.vue'
import CarouselComponent from '@/components/Carousel.vue'

const query = ref('')
const animeList = ref<SearchAnime[]>([])

const loading = ref(false)

const getAnimeList = () => {
  loading.value = true

  apiServices.getData({ q: query.value })
    .then((response) => {
      animeList.value = response.data.data
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <div>
    <NavBar />
    <CarouselComponent />
    <CarouselComponent />
    <CarouselComponent />
    <CarouselComponent />
    <CarouselComponent />
    <div>
      <!-- <img :src="searchAnime?.data.images.jpg.image_url" alt=""> -->
      <form @submit.prevent="getAnimeList">
        <input :disabled="loading" type="text" placeholder="Search" v-model="query">
        <button :disabled="loading" type="submit">{{ loading ? 'Searching' : 'Search' }}</button>
      </form>

      <div v-if="animeList.length" class="results">
        <div
          v-for="item in animeList"
          class="result"
        >
          <img :src="item.images.jpg.image_url" alt="">
          <p>{{ item.title }}</p>
        </div>
      </div>
      <!-- <ul>
        <li v-for="item in anime?.data">{{ item?.title }}</li>
        <li v-for="item in anime?.data">{{ item?.status }}</li>
      </ul> -->
  </div>
  </div>
</template>

<style scoped>
li {
  color: white;
}
</style>
