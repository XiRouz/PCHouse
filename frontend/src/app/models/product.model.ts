export interface ProductModelServer {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  images: string;
}

export interface CategoryModelServer {
  id: number;
  title: string;
}

export interface ServerResponse {
  count: number;
  products: ProductModelServer[];
}

export interface CategoriesServerResponse {
  count: number;
  categories: CategoryModelServer[];
}
