import { GetStaticProps } from 'next';

import prisma from '~/lib/prisma';
import { ChooseCategory } from '~/components/containers';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await prisma.category.findMany();

  return { props: { categories } };
};

const Products = ({ categories }) => {
  console.log(categories);

  return (
    <div>
      <ChooseCategory />
      <p>Products</p>
      <p>Basquet</p>
    </div>
  );
};

export default Products;
