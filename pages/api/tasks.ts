import { TaskProps } from '@libs/components/BlockTasks';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { type } from 'os';

const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { image, title, description, price } = req.body;

            const task = await prisma.task.create({
                data: {
                    image,
                    title,
                    description,
                    price
                },
            });
            res.status(200).json(task);
        } catch (e) {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res
            .status(405)
            .json({ message: `HTTP method ${req.method} is not supported.` });
    }
}