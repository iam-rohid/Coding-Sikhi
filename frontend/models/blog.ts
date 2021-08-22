import { StrapiImageInterface } from "./strapi_image";

export interface BlogInterface {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: CategoryInterface[];
  cover_image: StrapiImageInterface;
  created_at: string;
  created_by: any;
}

export interface CategoryInterface {
  id: string;
  name: string;
}
