import Image from 'next/image';
import { useRouter } from 'next/router';

import { Product as ProductType } from '~/@types/';
import { Grid, Center, Text } from '~/components/ui';
import { Link } from '~/components/atoms';

const Product = ({ name, medias, slug }: ProductType) => {
  const {
    query: { type },
  } = useRouter();

  return (
    <Link href={`?type=${type}&product=${slug}`}>
      <Grid
        as='a'
        css={{
          p: '$4',
          textDecoration: 'none',
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
          <Image
            // @ts-ignore
            alt={medias[0].media.altText}
            height={160}
            // @ts-ignore
            src={medias[0].media.url}
            width={160}
          />
        </Center>
        <Text css={{ textAlign: 'center', transition: '$normal' }}>{name}</Text>
      </Grid>
    </Link>
  );
};

export default Product;
