import type { Album, Image, RokkaImage } from '@/classes/types';

const BASE_URL = (organization: string) => `https://${organization}.rokka.io`;
const BASE_STACK = 'dynamic/resize-width-600-upscale-false-sharpen-true';
const DOWNLOAD_STACK = 'dynamic/o-content_disposition-attachment';
const TEASER_IMAGE_COUNT = 4;

const ROKKA_ENDPOINTS = {
  album: (name: string, organization: string) =>
    `${BASE_URL(organization)}/_albums/${name}/all.json`,
  albumFavorites: (name: string, organization: string) =>
    `${BASE_URL(organization)}/_albums/${name}/favorites.json`,
  render: (hash: string, name: string, organization: string) =>
    `${BASE_URL(organization)}/${BASE_STACK}/${hash}/${name}`,
  download: (hash: string, name: string, organization: string) =>
    `${BASE_URL(organization)}/${DOWNLOAD_STACK}/${hash}/${name}`,
};

export const getAlbum = async (
  albumName: string,
  organization: string
): Promise<Album | undefined> => {
  try {
    const allResponse = await fetch(
      ROKKA_ENDPOINTS.album(albumName, organization)
    );
    const favoritesResponse = await fetch(
      ROKKA_ENDPOINTS.albumFavorites(albumName, organization)
    );

    const all = await allResponse.json();
    const favorites = await favoritesResponse.json();

    const allAsImages = rokkaImagesToImages(all.items, organization);
    const favoritesAsImages = rokkaImagesToImages(
      favorites.items,
      organization
    );
    const teaserImages = getTeaserImages(favoritesAsImages, allAsImages);

    return {
      images: allAsImages,
      teaserImages: teaserImages,
    };
  } catch (e) {
    console.error(
      `[Rokka Gallery] Error fetching images from album '${albumName}' in organization '${organization}'. (Error: ${e})`
    );
  }
};

const rokkaImagesToImages = (
  images: RokkaImage[],
  organization: string
): Image[] => {
  return images.map((image) => ({
    id: image.hash,
    url: ROKKA_ENDPOINTS.render(image.hash, image.name, organization),
    description: '',
    download: ROKKA_ENDPOINTS.download(image.hash, image.name, organization),
  }));
};

/**
 * Make sure that always four teaser images are available.
 * Fills up teaser images with images that aren't favorites.
 */
const getTeaserImages = (
  favoriteImages: Image[],
  allImages: Image[],
  imageCount: number = TEASER_IMAGE_COUNT
): Image[] => {
  const favoriteImageIds = favoriteImages.map((img) => img.id);
  return favoriteImages.length < imageCount
    ? favoriteImages.concat(
        allImages
          .filter((img) => !favoriteImageIds.includes(img.id))
          .slice(0, imageCount - favoriteImages.length)
      )
    : favoriteImages.slice(0, imageCount);
};
