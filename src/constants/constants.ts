const ROKKA_BASE_URL = (organization: string) =>
  `https://${organization}.rokka.io`;

export const ROKKA_ENDPOINTS = {
  album: (name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}/_albums/${name}/all.json`,
  albumFavourites: (name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}/_albums/${name}/favorites.json`,
  render: (hash: string, name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization
      )}/dynamic/upscale-false-sharpen-true/o-o.q-6/${hash}/${name}`,
  download: (hash: string, name: string, organization: string) =>
    `${ROKKA_BASE_URL(organization)}/download/${hash}/${name}`,
};
