import { FC } from 'react';
import Image from 'next/image';

import { Product } from '~/@types';
import { Box, Grid, Heading, Text } from '~/components/ui';

interface ProductToAddProps {
  product: Product;
}

const ProductToAdd: FC<ProductToAddProps> = ({
  product: { name, description, medias, sizes },
}) => {
  console.log(sizes);

  return (
    <Box css={{ p: '$8', h: '$full', bg: '$appBackground' }}>
      <Grid css={{ gridTemplateColumns: 'auto 1fr' }} direction='horizontal'>
        <Image
          // @ts-ignore
          alt={medias[0].media.altText}
          height={100}
          // @ts-ignore
          src={medias[0].media.url}
          width={100}
        />
        <Heading variant='sub-title'>{name}</Heading>
      </Grid>
      <Text css={{ mt: '$6', mb: '$2' }}>Descripcion</Text>
      <Text
        css={{
          display: '-webkit-box',
          color: '$lowContrastText',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        }}
      >
        {description}
      </Text>

      <Text>Elige un tamano</Text>
    </Box>
  );
};

export default ProductToAdd;
