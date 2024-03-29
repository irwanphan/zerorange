import prisma from '@libs/connections/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { sentBy, assignTo, assignToEmail, title, description, userId } = req.body;

            const memo = await prisma.memo.create({
                data: {
                    user: {
                        connect: {
                            id: userId
                        }
                    },
                    sentBy,
                    assignTo,
                    assignToEmail,
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