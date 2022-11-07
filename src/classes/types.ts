export interface Image {
  id: string;
  url: string;
  description: string;
  download: string;
}

export interface Album {
  images: Image[];
  teaser: Image[];
}

export interface RokkaImage {
  hash: string;
  name: string;
  mimetype: string;
  format: string;
}
