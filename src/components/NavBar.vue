<script setup lang="ts">
import { ref } from 'vue'
import apiServices from '@/api/index'
import type { SearchAnime } from '@/types/search-anime.type'
import SeachInput from '@/components/SeachInput.vue'

const query = ref('')
const animeList = ref<SearchAnime[]>([])

const loading = ref(false)

const selectAnime = (anime: SearchAnime) => {
  console.log('selectAnime', anime)
}

const getAnimeList = () => {
  loading.value = true

  apiServices
    .getData({ q: query.value })
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
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">KawaiiDatabase</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Latest</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Manga
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>

        <!-- <form @submit.prevent="getAnimeList" class="d-flex" role="search">
          <input
            :disabled="loading"
            type="text"
            v-model="query"
            class="form-control me-1"
            placeholder="Search Anime, Manga, and more..."
            aria-label="Search"
          />
          <button :disabled="loading" type="submit" class="btn btn-outline-success">
            <i class="bi bi-search"></i>
          </button>
        </form> -->
        <SeachInput v-model="query" @selected="selectAnime" :loading="false" />

      </div>
    </div>
  </nav>
  <div class="navbar-underline"></div>
  <div v-if="animeList.length" class="results">
    <ul>
      <li>Found {{ animeList.length }} results for {{ query }}</li>
    </ul>
    <div v-for="item in animeList" class="result">
      <img :src="item.images.jpg.image_url" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<style scoped>
.input-group-prepend {
  margin-right: 5px;
}

a {
  color: white;
}

.navbar-underline {
  position: relative;
}

.navbar-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 0.1px solid rgb(88, 88, 88);
}
li {
  color: white;
  list-style-type: none;
}
</style>
