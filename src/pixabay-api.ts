import axios from "axios";
import type { PixabayResponse } from "./types/pixabay";
import { PER_PAGE } from "./pagination";

export const getImagesByQuery = async (query: string, page: number) => {
  const response = await axios.get<PixabayResponse>(
    `https://pixabay.com/api/`,
    {
      params: {
        q: query,
        page,
        per_page: PER_PAGE,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        key: "54412815-1cf96472eb161fc1e7a05d302",
      },
    },
  );
  return response.data;
};
