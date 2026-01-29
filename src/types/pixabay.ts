export type PixabayImage = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  largeImageURL: string;
  webformatURL: string;
};

export type PixabayResponse = {
  totalHits: number;
  hits: PixabayImage[];
};
