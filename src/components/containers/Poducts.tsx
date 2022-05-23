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
      {products.map(({ id, name, medias }) => (
        <Product
          key={id}
          // @ts-ignore
          alt={medias[0].media.altText}
          name={name}
          // @ts-ignore
          url={medias[0].media.url}
        />
      ))}
    </Grid>
  );
};

export default Products;
