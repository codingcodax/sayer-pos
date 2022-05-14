import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Category } from '@prisma/client';

import prisma from '~/lib/prisma';
import { ChooseCategory } from '~/components/containers';

export const getStaticProps: GetStaticProps = async () => {
  const categories = await prisma.category.findMany();

  return { props: { categories } };
};

interface ProductsProps {
  categories: Category[];
}

const Products: FC<ProductsProps> = ({ categories }) => {
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
