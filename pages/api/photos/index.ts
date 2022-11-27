import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body)
        const resp = await prisma.photos.create({
            data: {
                user_id: body.user_id,
                restaurant_id: body.restaurant_id,
                url: body.url

            },
        });
        res.status(200).json(body)
    } else {
        // Handle any other HTTP method
    }
}