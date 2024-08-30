import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, name, role } = req.body;

    try {
      // Verifica si el usuario ya existe
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya existe' });
      }

      // Encripta la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
      // Crea el nuevo usuario
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          role,
        },
      });
      res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
      console.error('Error al registrar usuario:', error);  // Revisa qué error se imprime aquí
      res.status(500).json({ error: 'Error al registrar el usuario' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
