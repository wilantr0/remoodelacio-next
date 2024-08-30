import React, { useState } from 'react'
import { Button } from "@components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Badge } from "@components/ui/badge"
import { Textarea } from "@components/ui/textarea"
import { AlertCircle, Clock, X, MessageSquare, Divide } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import NavBar from '@components/LoggedNavBar'
import 'src/styles/globals.css'

// Tipo para representar a un alumno
type Alumno = {
  id: number
  nombre: string
  asistencia: 'presente' | 'retraso' | 'falta' | 'incidencia'
  observaciones: string
  faltas: number
  totalClases: number
}

// Componente principal
export default function AsistenciaPage() {
  // Estado para la lista de alumnos
  const [alumnos, setAlumnos] = useState<Alumno[]>([
    { id: 1, nombre: 'Ana García', asistencia: 'presente', observaciones: '', faltas: 2, totalClases: 20 },
    { id: 2, nombre: 'Carlos Rodríguez', asistencia: 'presente', observaciones: '', faltas: 1, totalClases: 20 },
    { id: 3, nombre: 'María López', asistencia: 'presente', observaciones: '', faltas: 3, totalClases: 20 },
  ])

  // Estado para el modal de observaciones
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState<Alumno | null>(null)
  const [observacionTemp, setObservacionTemp] = useState('')

  // Función para actualizar la asistencia
  const actualizarAsistencia = (id: number, estado: 'presente' | 'retraso' | 'falta' | 'incidencia') => {
    setAlumnos(alumnos.map(alumno => 
      alumno.id === id 
        ? { 
            ...alumno, 
            asistencia: estado, 
            faltas: estado === 'falta' ? alumno.faltas + 1 : alumno.faltas 
          } 
        : alumno
    ))
  }

  // Función para abrir el modal de observaciones
  const abrirModalObservaciones = (alumno: Alumno) => {
    setAlumnoSeleccionado(alumno)
    setObservacionTemp(alumno.observaciones)
  }

  // Función para guardar observaciones
  const guardarObservaciones = () => {
    if (alumnoSeleccionado) {
      setAlumnos(alumnos.map(alumno => 
        alumno.id === alumnoSeleccionado.id ? { ...alumno, observaciones: observacionTemp } : alumno
      ))
      setAlumnoSeleccionado(null)
    }
  }

  // Función para calcular el porcentaje de faltas
  const calcularPorcentajeFaltas = (faltas: number, totalClases: number) => {
    return ((faltas / totalClases) * 100).toFixed(1)
  }

  return (
    <div className="container mx-auto p-4">
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">Control de Asistencia</h1>
      <Table className={undefined}>
        <TableHeader className={undefined}>
          <TableRow className={undefined}>
            <TableHead className={undefined}>Nombre</TableHead>
            <TableHead className={undefined}>Asistencia</TableHead>
            <TableHead className={undefined}>Observaciones</TableHead>
            <TableHead className={undefined}>% Faltas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={undefined}>
          {alumnos.map((alumno) => (
            <TableRow key={alumno.id} className={undefined}>
              <TableCell className={undefined}>{alumno.nombre}</TableCell>
              <TableCell className={undefined}>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant={alumno.asistencia === 'presente' ? 'default' : 'outline'}
                    onClick={() => actualizarAsistencia(alumno.id, 'presente')}
                  >
                    Presente
                  </Button>
                  <Button 
                    size="sm" 
                    variant={alumno.asistencia === 'retraso' ? 'default' : 'outline'}
                    onClick={() => actualizarAsistencia(alumno.id, 'retraso')}
                  >
                    <Clock className="mr-1 h-4 w-4" />
                    Retraso
                  </Button>
                  <Button 
                    size="sm" 
                    variant={alumno.asistencia === 'falta' ? 'default' : 'outline'}
                    onClick={() => actualizarAsistencia(alumno.id, 'falta')}
                  >
                    <X className="mr-1 h-4 w-4" />
                    Falta
                  </Button>
                  <Button 
                    size="sm" 
                    variant={alumno.asistencia === 'incidencia' ? 'default' : 'outline'}
                    onClick={() => actualizarAsistencia(alumno.id, 'incidencia')}
                  >
                    <AlertCircle className="mr-1 h-4 w-4" />
                    Incidencia
                  </Button>
                </div>
              </TableCell>
              <TableCell className={undefined}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => abrirModalObservaciones(alumno)}
                    >
                      <MessageSquare className="mr-1 h-4 w-4" />
                      Observaciones
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Observaciones para {alumno.nombre}</DialogTitle>
                    </DialogHeader>
                    <Textarea 
                      placeholder="Escribe tus observaciones aquí" 
                      value={observacionTemp}
                      onChange={(e) => setObservacionTemp(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <Button onClick={guardarObservaciones}>Guardar Observaciones</Button>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className={undefined}>
                <Badge variant={Number(calcularPorcentajeFaltas(alumno.faltas, alumno.totalClases)) > 20 ? "destructive" : "secondary"}>
                  {calcularPorcentajeFaltas(alumno.faltas, alumno.totalClases)}%
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}