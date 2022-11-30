import type { Album, Image, RokkaImage } from '@/config/types';
import { TEASER_IMAGE_COUNT, TEASER_IMAGE_RATIO } from '@/config/constants';
import { uniq } from 'lodash-es';

const BASE_URL = (organization: string) => `https://${organization}.rokka.io`;
const DOWNLOAD_STACK = 'dynamic/o-content_disposition-attachment';
const BASE_SETTINGS = 'options-autoformat-true';

const ROKKA_ENDPOINTS = {
  album: (name: string, organization: string) =>
    `${BASE_URL(organization)}/_albums/${name}/all.json`,
  albumFavorites: (name: string, organization: string) =>
    `${BASE_URL(organization)}/_albums/${name}/favorites.json`,
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
  return images.map(
    (image): Image => ({
      id: image.hash,
      teaserSrc: getCroppedImageSrc(
        image.hash,
        organization,
        400,
        TEASER_IMAGE_RATIO,
        image.name
      ),
      teaserSrcset: getCroppedImageSrcset(
        image.hash,
        organization,
        [100, 200, 300, 400, 600, 800],
        TEASER_IMAGE_RATIO,
        image.name
      ),
      src: getResizedImageSrc(image.hash, organization, 1000, image.name),
      srcset: getResizedImageSrcset(
        image.hash,
        organization,
        [600, 1000, 1500],
        image.name
      ),
      description: '',
      download: ROKKA_ENDPOINTS.download(image.hash, image.name, organization),
    })
  );
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

export const addWidthsForHigherDprs = (widths: number[]): number[] => {
  const widthsWithHigherDprs = widths.reduce(
    (combinedWidths: number[], width: number) => [
      ...combinedWidths,
      width,
      width * 2,
    ],
    []
  );
  return uniq(widthsWithHigherDprs).sort((a: number, b: number) => a - b);
};

export const getCroppedImageSrc = (
  hash: string,
  organization: string,
  width: number,
  ratio: number,
  filename?: string
): string => {
  const height = Math.ceil(width * ratio);
  const sizeParams = `resize-width-${width}-height-${height}--crop-width-${width}-height-${height}-mode-ratio`;

  return `${BASE_URL(organization)}/dynamic/${
    BASE_SETTINGS ? `${BASE_SETTINGS}--` : ''
  }${sizeParams}/${hash}${filename ? `/${encodeURI(filename)}` : ''}`;
};

export const getCroppedImageSrcset = (
  hash: string,
  organization: string,
  widths: number[],
  ratio: number,
  filename?: string
): string => {
  return addWidthsForHigherDprs(widths)
    .map(
      (width) =>
        `${getCroppedImageSrc(
          hash,
          organization,
          width,
          ratio,
          filename
        )} ${width}w`
    )
    .join(', ');
};

export const getResizedImageSrc = (
  hash: string,
  organization: string,
  width: number,
  filename?: string
): string => {
  const sizeParams = `resize-width-${width}`;

  return `${BASE_URL(organization)}/dynamic/${
    BASE_SETTINGS ? `${BASE_SETTINGS}--` : ''
  }${sizeParams}/${hash}${filename ? `/${encodeURI(filename)}` : ''}`;
};

export const getResizedImageSrcset = (
  hash: string,
  organization: string,
  widths: number[],
  filename?: string
): string => {
  return addWidthsForHigherDprs(widths)
    .map(
      (width) =>
        `${getResizedImageSrc(hash, organization, width, filename)} ${width}w`
    )
    .join(', ');
};
