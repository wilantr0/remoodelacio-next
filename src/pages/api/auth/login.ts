import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { mail, password } = req.body;
    console.log(req.body)

    try {
        const user = await prisma.user.findUnique({
            where: { email:mail },
            select: {
                id: true,
                email: true,
                name: true,
                password: true, // Incluir el campo 'password'
            },
        });
        const pass = await bcrypt.compare(password, user!.password)
        console.log(pass)
        console.log(user)
        console.log(password)
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
            console.log(token)
            const info = jwt.decode(token)
            console.log(info)
            sessionStorage.setItem('token', token)
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
        console.log(error)
    }
}
