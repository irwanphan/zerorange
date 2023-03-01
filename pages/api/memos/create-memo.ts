import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { sentBy, assignTo, title, description } = req.body;

            const memo = await prisma.memo.create({
                data: {
                    sentBy,
                    assignTo,
                    title,
                    description
                },
            });

            console.log(memo)
            res.status(200).json(memo);
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: `${e}` });
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res
            .status(405)
            .json({ message: `HTTP method ${req.method} is not supported.` });
    }
}