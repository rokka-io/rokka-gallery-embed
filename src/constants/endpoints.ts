const BASE_URL = (organization: string) => `https://${organization}.rokka.io`;
const BASE_STACK = 'dynamic/resize-width-600-upscale-false-sharpen-true';
const DOWNLOAD_STACK = 'dynamic/o-content_disposition-attachment';

export default {
  album: (name: string, organization: string) =>
    `${BASE_URL(organization)}/_albums/${name}/all.json`,
  albumFavorites: (name: string, organization: string) =>
    `${BASE_URL(organization)}/_albums/${name}/favorites.json`,
  render: (hash: string, name: string, organization: string) =>
    `${BASE_URL(organization)}/${BASE_STACK}/${hash}/${name}`,
  download: (hash: string, name: string, organization: string) =>
    `${BASE_URL(organization)}/${DOWNLOAD_STACK}/${hash}/${name}`,
};
