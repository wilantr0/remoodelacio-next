import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

// Tu función existente para rutas protegidas
export default function protectedHandler(req, res) {
  // Aquí puedes mantener la lógica existente

  // Añadir lógica para verificar la cookie
  const { authToken } = parse(req.headers.cookie || '');

  if (!authToken) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  try {
    // Verificar si el token es válido
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    
    // Mantén las funcionalidades existentes y añade lo necesario con la verificación
    res.status(200).json({ message: `Bienvenido ${decoded.username}` });

  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }

  // Otros manejos que ya tenías en tu función
}
