export interface StrapiImageInterface {
  id: number;
  alternativeText: string;
  caption: string;
  name: string;
  height: number;
  width: number;
  size: number;
  url: string;

  formats: {
    thumbnail: {
      name: string;
      height: number;
      width: number;
      size: number;
      url: string;
    };
    large: {
      name: string;
      height: number;
      width: number;
      size: number;
      url: string;
    };
    medium: {
      name: string;
      height: number;
      width: number;
      size: number;
      url: string;
    };
    small: {
      name: string;
      height: number;
      width: number;
      size: number;
      url: string;
    };
  };
}
