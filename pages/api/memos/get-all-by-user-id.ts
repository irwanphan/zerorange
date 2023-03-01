import prisma from '@libs/connections/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const query:any = req.query
    const userId:any = query.userId
    
    // get all memos
    if (req.method === 'GET') {
        try {
            const memos = await prisma.memo.findMany({
                where: {
                    // sentBy: userId,
                },
                orderBy: {
                    id: 'desc'
                }
            })
            // console.log(memos)
            return res.status(200).json(memos)
        }
        catch (e) {
            console.log(e)
            return res.status(500).json({ message: `${e}` })
        }
    }
}