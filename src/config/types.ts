export interface Image {
  id: string;
  src: string;
  srcset: string;
  teaserSrc: string;
  teaserSrcset: string;
  description: string;
  download: string;
}

export interface Album {
  images: Image[];
  teaserImages: Image[];
}

export interface RokkaImage {
  hash: string;
  name: string;
  mimetype: string;
  format: string;
}
