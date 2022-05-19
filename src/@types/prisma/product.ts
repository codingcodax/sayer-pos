import Media from './media';

type Product = {
  id: number;
  name: string;
  description?: string;
  slug: string;
  typeName?: string;
  categoryName?: string;
  lineName?: string;
  medias?: { media: Media }[];
  createdAt?: string;
  updatedAt?: string;
};

export default Product;
