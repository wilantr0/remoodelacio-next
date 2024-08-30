// pages/api/auth/register.js
// import prisma from '@prisma/client' // Asegúrate de que la importación de Prisma sea correcta
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handle (req, res) {
  if (req.method === 'POST') {
    const { email, password, name, role } = req.body
    console.log(req.body)
    try {
      // Verifica si el usuario ya existe
      const existingUser = await prisma.user.findUnique({
        where: { email }
      })
      console.log(existingUser)

      if (existingUser) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado.' })
      }

      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10)

      // Crear nuevo usuario
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          role
        }
      })

      return res.status(201).json(newUser)
    } catch (error) {
      console.error('Error al registrar usuario:', error)
      return res.status(500).json({ error: 'Error del servidor al registrar el usuario.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
