import { FC } from 'react';

import { Product as ProductType } from '~/@types';
import { Product } from '~/components/atoms';
import { Box, Flex, Text, Heading, Grid } from '~/components/ui';

interface ProductsProps {
  products: ProductType[];
  type: string | string[];
}

const Products: FC<ProductsProps> = ({ products, type }) => {
  return (
    <Box>
      <Flex align='center' css={{ mb: '$6' }} justify='space-between'>
        <Heading
          as='h2'
          css={{ textTransform: 'capitalize' }}
          variant='sub-title'
        >
          {type}
        </Heading>
        <Text variant='secondary-text'>{products.length} Resultados</Text>
      </Flex>

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
