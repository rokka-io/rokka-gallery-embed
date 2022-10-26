export interface Image {
  id: string;
  url: string;
  description: string;
}

export interface RokkaResponse {
  items: RokkaImage[];
  total: number;
}

export interface RokkaImage {
  hash: string;
  name: string;
  mimetype: string;
  format: string;
}
