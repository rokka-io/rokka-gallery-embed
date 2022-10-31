import type { Image, RokkaImage, RokkaResponse } from '@/classes/types';
import { ROKKA_ENDPOINTS } from '@/constants/constants';

export const useImages = (
  images: RokkaImage[],
  organization: string
): Image[] => {
  return images.map((image) => ({
    id: image.hash,
    url: ROKKA_ENDPOINTS.render(image.hash, image.name, organization),
    description: `${image.mimetype} / ${image.name}`,
    download: ROKKA_ENDPOINTS.download(image.hash, image.name, organization),
  }));
};

export const useFavouriteImages = (
  favouriteImages: Image[],
  allImages: Image[]
): Image[] => {
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

export const useAlbum = async (
  albumName: string,
  organization: string
): Promise<RokkaResponse> => {
  const allResponse = await fetch(
    ROKKA_ENDPOINTS.album(albumName, organization)
  );
  const favoritesResponse = await fetch(
    ROKKA_ENDPOINTS.albumFavourites(albumName, organization)
  );
  return {
    all: await allResponse.json(),
    favorites: await favoritesResponse.json(),
  };
};
