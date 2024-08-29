import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          password, // Recuerda encriptar la contraseña antes de guardarla
          name,
        },
      });
      res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ error: 'Error al registrar el usuario' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
