import { FC } from 'react';

import { Product as ProductType } from '~/@types';
import { Box, Flex, Text, Heading } from '~/components/ui';
import { Products as ProductsContainer } from '~/components/containers';

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

      <ProductsContainer products={products} />
    </Box>
  );
};

export default Products;
