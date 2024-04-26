<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue'
import type { SearchAnime } from '@/types/search-anime.type'
import apiServices from '@/api/index'

const query = defineModel()
const loading = ref(false)

defineProps({
  loading: {
    type: Boolean,
    default: false,
    required: false
  }
})

const emit = defineEmits(['selected'])

const animeList = ref<SearchAnime[]>([])
const show = ref(false)

const getData = () => {
  animeList.value = []
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
      show.value = true
    })
}

const formHandler = (event: Event) => {
  event.preventDefault()
  getData()
}

onMounted(() => {
  window.addEventListener('click', (event) => {
    const inputContent = document.getElementById('input-content')

    if (inputContent && !inputContent.contains(event.target as Node)) {
      show.value = false
    }
  })
})
</script>

<template>
  <div class="search-input">
    <form @submit.prevent="formHandler" class="d-flex" role="search">
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
      <div
        id="input-content"
        class="border bg-white rounded shadow"
        :class="{ show }"
      >
        <div class="list-group list-group-flush">
          <article
            v-for="anime in animeList"
            class="list-group-item list-group-item-action d-flex align-items-center"
            @click="() => emit('selected', anime)"
          >
            <img
              class="rounded"
              :style="{
                width: '50px'
              }"
              :src="anime.images.jpg.image_url" alt=""
            />
            <p class="text-dark m-0 ms-3">{{ anime.title }}</p>
          </article>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
#search-input {
  position: relative;
  z-index: 1000;
}

#input-content {
  position: absolute;
  top: 60px;
  width: 400px;
  max-width: 100%;
  right: 12px;
  visibility: hidden;
  max-height: 500px;
  overflow-y: auto;
  z-index: 1000;
  transition: all 0.3s;
  opacity: 0;
}

#input-content.show {
  visibility: visible;
  top: 56px;
  opacity: 1;
}
</style>
