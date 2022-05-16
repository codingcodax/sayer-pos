import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import prisma from '~/lib/prisma';
import { ChooseType } from '~/components/containers';
import { Grid } from '~/components/ui';

type Product = {
  id: number;
  slug: string;
  name: string;
  typeName: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.type.findMany({
    include: {
      products: {
        select: {
          id: true,
          slug: true,
          name: true,
          typeName: true,
        },
      },
    },
  });

  const types = ['todos'];
  const products: Product[] = [];

  data.map((type) => types.push(type.name));
  data.map((type) => type.products.map((product) => products.push(product)));

  return { props: { types, products } };
};

interface ProductsProps {
  types: string[];
  products: Product[];
}

const Products: NextPage<ProductsProps> = ({ types, products }) => {
  const { query } = useRouter();
  const typeSelected = query.type || 'todos';

  console.log(query);

  return (
    <Grid css={{ gridTemplateColumns: '2fr 1fr' }}>
      <div>
        <ChooseType typeSelected={typeSelected} types={types} />
        <p>Products</p>
      </div>
      <p>Basquet</p>
    </Grid>
  );
};

export default Products;
