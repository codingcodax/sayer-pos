import { FC } from 'react';

import { Product as ProductType } from '~/@types';
import { Product } from '~/components/atoms';
import { Box, Text, Heading, Grid } from '~/components/ui';

interface ProductsProps {
  products: ProductType[];
  type: string | string[];
}

const Products: FC<ProductsProps> = ({ products, type }) => {
  return (
    <Box>
      <Box>
        <Heading as='h2' css={{ textTransform: 'capitalize' }}>
          {type}
        </Heading>
        <Text>{products.length}</Text>
      </Box>

      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$4' }}>
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
    </Box>
  );
};

export default Products;
