import type { Image } from "./image.type";
import type { Title } from "./title.type";

export interface Anime {
  mal_id: string;
  url: string;
  images: Image;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  episodes: number;
  status: string;
  airing: boolean;
}