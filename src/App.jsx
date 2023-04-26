import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm';

function App() {

  const [tareas, settareas] = useState([]);

  const agregarTarea = (tarea) => {
    settareas([...tareas, tarea])
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TareaForm/>
    </div>
  )
}

export default App
