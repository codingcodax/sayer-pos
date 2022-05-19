import Image from 'next/image';
import { FC } from 'react';

import { Grid, Center, Text } from '~/components/ui';

interface ProductProps {
  name: string;
  url: string;
  alt: string;
}

const Product: FC<ProductProps> = ({ name, url, alt }) => {
  return (
    <Grid
      css={{
        p: '$4',
        bg: '$appBackground',
        borderRadius: '$md',
        rowGap: '$4',
        cursor: 'pointer',

        '&:hover>p': {
          color: '$primary9',
        },
      }}
    >
      <Center>
        <Image alt={alt} height={160} src={url} width={160} />
      </Center>
      <Text css={{ textAlign: 'center', transition: '$normal' }}>{name}</Text>
    </Grid>
  );
};

export default Product;
