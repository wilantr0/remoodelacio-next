import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") return
    const { email, password, name, role } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword)

    console.log(req.body)
    
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: name,
                role: role
            }
        });
        console.log(user)
        res.status(201).json({ user });
    } catch (error) {
        console.log({error})
        res.status(400).json({ error });
    }
}
