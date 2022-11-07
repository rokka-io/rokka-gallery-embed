import type { Album, Image, RokkaImage } from '@/classes/types';
import { ROKKA_ENDPOINTS } from '@/constants/endpoints';

export const useAlbum = async (
  albumName: string,
  organization: string
): Promise<Album> => {
  const allResponse = await fetch(
    ROKKA_ENDPOINTS.album(albumName, organization)
  );
  const favouritesResponse = await fetch(
    ROKKA_ENDPOINTS.albumFavourites(albumName, organization)
  );

  const all = await allResponse.json();
  const favourites = await favouritesResponse.json();

  const allAsImage = useImages(all.items, organization);
  const favouritesAsImage = useImages(favourites.items, organization);
  const fixedLengthTeaserImages = useTeaser(favouritesAsImage, allAsImage);

  return {
    images: allAsImage,
    teaser: fixedLengthTeaserImages,
  };
};

const useImages = (images: RokkaImage[], organization: string): Image[] => {
  return images.map((image) => ({
    id: image.hash,
    url: ROKKA_ENDPOINTS.render(image.hash, image.name, organization),
    description: `${image.mimetype} / ${image.name}`,
    download: ROKKA_ENDPOINTS.download(image.hash, image.name, organization),
  }));
};

const useTeaser = (
  favouriteImages: Image[],
  allImages: Image[],
  size: number = 4
): Image[] => {
  // Make sure always four teaser images are available
  // Either fills up teaser images with images that aren't favourited
  // Or return the first 4 favourite images
  const favouriteImageIds = favouriteImages.map((img) => img.id);
  return favouriteImages.length < size
    ? favouriteImages.concat(
        allImages
          .filter((img) => !favouriteImageIds.includes(img.id))
          .slice(0, size - favouriteImages.length)
      )
    : favouriteImages.slice(0, size);
};
