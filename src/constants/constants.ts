const ROKKA_BASE_URL = (organization: string) =>
  `https://${organization}.rokka.io`;
const ROKKA_BASE_STACK = '/dynamic/resize-width-600-upscale-false-sharpen-true';

export const ROKKA_ENDPOINTS = {
  album: (name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}/_albums/${name}/all.json`,
  albumFavourites: (name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}/_albums/${name}/favorites.json`,
  render: (hash: string, name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}${ROKKA_BASE_STACK}/${hash}/${name}`,
  // TODO: No route is available for download yet.
  download: (hash: string, name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}/download/${hash}/${name}`,
};
