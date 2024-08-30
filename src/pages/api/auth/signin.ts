import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password, name, role } = req.body;
    
    //const hashedPassword = await bcrypt.hash(password, 10);

    console.log(email)

    try {
        const user = await prisma.user.create({
            data: {
                email,
                //password,
                name,
                role
            }
        });
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: 'User already exists' });
    }
}