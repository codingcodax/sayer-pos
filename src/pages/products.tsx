import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Product } from '~/@types';
import prisma from '~/lib/prisma';
import { Grid } from '~/components/ui';
import {
  ChooseType,
  Products as ProductsContainer,
} from '~/components/containers';

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      typeName: true,
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
  const { query } = useRouter();
  const typeSelected = query.type || 'todos';

  const filteredProducts =
    typeSelected === 'todos'
      ? products
      : products.filter((product) => product.typeName === typeSelected);

  return (
    <Grid css={{ gridTemplateColumns: '2fr 1fr' }}>
      <div>
        <ChooseType typeSelected={typeSelected} types={types} />
        <ProductsContainer products={filteredProducts} type={typeSelected} />
      </div>
      <p>Basquet</p>
    </Grid>
  );
};

export default Products;
