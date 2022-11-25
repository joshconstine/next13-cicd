import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('in Post')
        console.log(req.body.text)
        const body = JSON.parse(req.body)
        console.log(body)
        const resp = await prisma.comment.create({
            data: {
                user_id: body.user_id,
                restaurant_id: body.restaurant_id,
                rating_id: body.rating_id,
                text: body.text,
            },
        });
    } else if (req.method === 'GET') {
        res.json({ "name": 'joshua' })
    } else {
        // Handle any other HTTP method
    }
}