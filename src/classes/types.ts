export interface Image {
  id: string;
  url: string;
  description: string;
  download: string;
}

export interface RokkaResponse {
  all: RokkaInnerResponse;
  favorites: RokkaInnerResponse;
}

export interface RokkaInnerResponse {
  items: RokkaImage[];
  total: number;
}

export interface RokkaImage {
  hash: string;
  name: string;
  mimetype: string;
  format: string;
}
