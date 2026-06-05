import { createBrowserRouter } from "react-router-dom"
import { PiggyBank } from "lucide-react"
import { Button } from "./componentes/shared/Button"

export const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
    <h1>Formulário de Simulação</h1>
    <Button variant="primary" icon={PiggyBank}>clique aqui</Button>
    </>
  },
  {
    path: '/resultado',
    element: <h1>Resultado de Simulação</h1>,
  },
  {
    path: '/historico',
    element: <h1>Histórico de Simulação</h1>,
  },
])