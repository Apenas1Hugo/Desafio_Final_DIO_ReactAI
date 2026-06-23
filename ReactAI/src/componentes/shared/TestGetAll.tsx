import { useEffect, useState } from 'react'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { type SimulationRecord } from '@/data/simulation'
import { useNavigate } from 'react-router-dom';

// Componente para testar a obtenção de todas as simulações
export function TesteGetAll() {
  const { getAllSimulations, deleteSimulation } = useSimulationStorage()
  const [simulations, setSimulations] = useState<SimulationRecord[]>([])
  const navigate = useNavigate();

  // Carrega todas as simulações ao montar o componente
  useEffect(() => {
    setSimulations(getAllSimulations())
  }, [])


  const handleDelete = (id: string) => {
    deleteSimulation(id)
    setSimulations(getAllSimulations())
  }
  const handleNaviGate = (id: string) => {
      void navigate(`/resultado/${id}`);
      return;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Simulações salvas: {simulations.length}</h1>

      {simulations.length === 0 && (
        <p className="text-muted-foreground">Nenhuma simulação encontrada.</p>
      )}

      {simulations.map((simulation) => (
        <div key={simulation.id} className="border rounded-lg p-4 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">ID: {simulation.id}</p>
          <p>Meta: {simulation.goalName}</p>
          <p>Valor: {simulation.goalAmount}</p>
          <p>Renda: {simulation.income}</p>
          <button
            onClick={() => handleDelete(simulation.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg w-fit"
          >
            Deletar
          </button>
          <button
            onClick={() => handleNaviGate(simulation.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg w-fit"
          >
            Buscar Resultados
          </button>
        </div>
      ))}
    </div>
  )
}

export default TesteGetAll