import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@libs/connections/prisma'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const query:any = req.query
    const userId:any = query.userId
    
    if (req.method === 'GET') {
        try {
            const existingUser = await prisma.user.findUnique({
                where: { id: userId }
            })
            // console.log(users)
            return res.status(200).json(existingUser)
        }
        catch (e) {
            console.log(e)
            return res.status(500).json({ message: `${e}` })
        }
    }
}