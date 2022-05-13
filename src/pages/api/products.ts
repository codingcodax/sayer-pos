import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';

const readProducts = async (res: NextApiResponse) => {
  try {
    const products = await prisma.product.findMany();

    return res.status(200).json({ products, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Error reading from database', success: true });
  }
};

const addProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description, slug, typeName, categoryName, lineName } =
    req.body;

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        slug,
        typeName,
        categoryName,
        lineName,
      },
    });

    return res.status(200).json({ newProduct, success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error adding book', success: false });
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'GET') return await readProducts(res);
  if (method === 'POST') return await addProducts(req, res);

  res.status(500).json({ error: 'Method not allowed', success: false });
};

export default handler;
