import type { Image, RokkaImage, RokkaResponse } from '@/classes/types';
import { ROKKA_IMAGE_BASE_URL } from '@/constants/constants';

export const useRokkaImages = (images: RokkaImage[]): Image[] => {
  return images.map((image) => ({
    id: image.hash,
    url: `${ROKKA_IMAGE_BASE_URL}/${image.hash}/${image.name}`,
    description: `${image.mimetype} / ${image.name}`,
  }));
};

export const useFavouriteImages = (
  favouriteImages: Image[],
  allImages: Image[]
): Image[] => {
  console.log(favouriteImages.length)
  // Make sure always four teaser images are available
  // Either fills up teaser images with images that aren't favourited
  // Or return the first 4 favourite images
  const favouriteImageIds = favouriteImages.map((img) => img.id);
  return favouriteImages.length < 4
    ? favouriteImages.concat(
        allImages
          .filter((img) => !favouriteImageIds.includes(img.id))
          .slice(0, favouriteImages.length - 4)
      )
    : favouriteImages.slice(0, 4);
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
