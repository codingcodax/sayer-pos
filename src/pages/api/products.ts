import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET')
    return res.status(405).json({ msg: 'Method  not allowed' });

  try {
    const data = await prisma.inquiry.findMany({});
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Something went wrong' });
  }
};

export default handler;
