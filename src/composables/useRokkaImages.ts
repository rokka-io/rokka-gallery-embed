import type { Image, RokkaImage, RokkaResponse } from '@/classes/types';
import { ROKKA_IMAGE_BASE_URL } from '@/constants/constants';

export const useRokkaImages = (images: RokkaImage[]): Image[] => {
  return images.map((image) => ({
    id: image.hash,
    url: `${ROKKA_IMAGE_BASE_URL}/${image.hash}/${image.name}`,
    description: `${image.mimetype} / ${image.name}`,
  }));
};

export const useRokkaAlbum = async (
  baseUrl: string,
  albumName: string
): Promise<RokkaResponse> => {
  const allResponse = await fetch(`${baseUrl}/${albumName}/all.json`);
  const favoritesResponse = await fetch(
    `${baseUrl}/${albumName}/favorites.json`
  );
  return {
    all: await allResponse.json(),
    favorites: await favoritesResponse.json(),
  };
};
