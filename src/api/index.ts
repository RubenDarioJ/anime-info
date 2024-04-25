import ApiService from '@/services/main-services/api-service'
import type { Anime } from '@/types/anime.type'
import type { SearchAnime } from '@/types/search-anime.type'
import axios from 'axios';


class AnimeData {
  async getData(params: any | null = null): Promise<{ data: { data: SearchAnime[] } }> {
    const data = {
      route: 'https://api.jikan.moe/v4/anime',
      params
    }

    return ApiService.get(data)
  }

  // async searchData(query: any): Promise<{ data: SearchAnime }> {
  //   // try {
  //   //   const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
  //   //   return response.data;
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   throw error;
  //   // }
  //   const data = {
  //       route: `https://api.jikan.moe/v4/anime?q=${query.value}`,
  //       params: {
  //           // query: ''
  //       }
  //   }
  //   return ApiService.get(data)
  // }
  async getRandom(): Promise<{ data: SearchAnime }> {
    const data = {
        route: 'https://api.jikan.moe/v4/random/anime',
        params: {}
    }
    return ApiService.get(data)
  }
}

export default new AnimeData()
