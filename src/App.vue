<script setup lang="ts">
import { ref, computed  } from 'vue'
import type { Anime } from '@/types/anime.type'
import type { SearchAnime } from '@/types/search-anime.type'
import apiServices from '@/api/index'

const anime = ref<Anime | null>(null)
const query = ref({
  query: ''
});
const searchAnime = ref<SearchAnime | null>(null);

apiServices.getData().then((response) => {
  console.log(response)
  anime.value = response.data
})

apiServices.searchData({ query }).then((response) => {
  console.log(response)
  searchAnime.value = response.data
})

</script>

<template>
  <div>
    <!-- <img :src="searchAnime?.data.images.jpg.image_url" alt=""> -->
    <form @submit.prevent="apiServices.searchData({ query: query })">
      <input type="text" placeholder="Search" v-model="query">
      <button type="submit">Search</button>
    </form>
    <div class="results" v-if="searchAnime">
      <div class="result" v-for="item in searchAnime?.data.length > 0 ? searchAnime?.data : anime?.data">
        <img :src="item?.images.jpg.image_url" alt="">
        <p>{{ item?.episodes }}</p>
      </div>
    </div>
    <ul>
      <li v-for="item in anime?.data">{{ item?.title }}</li>
      <li v-for="item in anime?.data">{{ item?.status }}</li>
    </ul>
  </div>
</template>

<style scoped>
li {
  color: white;
}
</style>
