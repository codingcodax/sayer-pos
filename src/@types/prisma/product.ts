import Media from './media';
import Size from './size';

type Product = {
  id: number;
  name: string;
  description?: string;
  slug: string;
  typeName?: string;
  categoryName?: string;
  lineName?: string;
  medias?: { media: Media }[];
  sizes?: { size: Size }[];
  createdAt?: string;
  updatedAt?: string;
};

export default Product;
