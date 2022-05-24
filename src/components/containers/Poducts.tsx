import { FC } from 'react';

import { Product as ProductType } from '~/@types';
import { Grid } from '~/components/ui';
import { Product } from '~/components/atoms';

interface ProductsProps {
  products: ProductType[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '$4' }}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default Products;
