import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Product } from '~/@types';
import prisma from '~/lib/prisma';
import { Box, Grid } from '~/components/ui';
import {
  ChooseType,
  Products as ProductsSection,
  ProductToAdd,
} from '~/components/sections';

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      slug: true,
      typeName: true,
      sizes: { include: { size: true } },
      medias: { include: { media: { select: { url: true, altText: true } } } },
    },
  });

  const typeRaw = await prisma.type.findMany({});

  const types = ['todos'];

  typeRaw.map((type) => types.push(type.name));

  return { props: { types, products } };
};

interface ProductsProps {
  types: string[];
  products: Product[];
}

const Products: NextPage<ProductsProps> = ({ types, products }) => {
  const {
    query: { type, product },
  } = useRouter();
  const typeSelected = type || 'todos';

  const filteredProducts =
    typeSelected === 'todos'
      ? products
      : products.filter((product) => product.typeName === typeSelected);

  const productSelected = products.filter((p) => p.slug === product)[0];

  return (
    <Grid css={{ gridTemplate: 'auto 1fr / 1fr 1fr 1fr' }}>
      <Box css={{ gridArea: '1 / 1 / 2 / 3', overflowX: 'hidden' }}>
        <ChooseType typeSelected={typeSelected} types={types} />
      </Box>
      <Box css={{ gridArea: '2 / 1 / 3 / 3' }}>
        <ProductsSection products={filteredProducts} type={typeSelected} />
      </Box>
      {product && (
        <Box css={{ gridArea: '1 / 2 / 3 / 3', zIndex: 2 }}>
          <ProductToAdd product={productSelected} />
        </Box>
      )}
      <Box css={{ gridArea: '1 / 3 / 3 / 4' }}>
        <p>Basquet</p>
      </Box>
    </Grid>
  );
};

export default Products;
