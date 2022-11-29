import type { Album, Image, RokkaImage } from '@/classes/types';
import ROKKA_ENDPOINTS from '@/constants/endpoints';

export const useAlbum = async (
  albumName: string,
  organization: string
): Promise<Album> => {
  const allResponse = await fetch(
    ROKKA_ENDPOINTS.album(albumName, organization)
  );
  const favoritesResponse = await fetch(
    ROKKA_ENDPOINTS.albumFavorites(albumName, organization)
  );

  const all = await allResponse.json();
  const favorites = await favoritesResponse.json();

  const allAsImage = useImages(all.items, organization);
  const favoritesAsImage = useImages(favorites.items, organization);
  const fixedLengthTeaserImages = useTeaser(favoritesAsImage, allAsImage);

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
  favoriteImages: Image[],
  allImages: Image[],
  size: number = 4
): Image[] => {
  // Make sure always four teaser images are available
  // Either fills up teaser images with images that aren't favorited
  // Or return the first 4 favorite images
  const favoriteImageIds = favoriteImages.map((img) => img.id);
  return favoriteImages.length < size
    ? favoriteImages.concat(
        allImages
          .filter((img) => !favoriteImageIds.includes(img.id))
          .slice(0, size - favoriteImages.length)
      )
    : favoriteImages.slice(0, size);
};
