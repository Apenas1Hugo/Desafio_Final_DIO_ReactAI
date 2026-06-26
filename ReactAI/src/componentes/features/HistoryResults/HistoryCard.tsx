import { Trash2, Goal, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { type SimulationRecord } from '@/data/simulation';

import { HistoryInfos } from './HistoryInfos';
import { HistoryNameDate } from './HistoryNameDate';
import { HistoryBox } from './HistoryBox';
import { Button } from '@/componentes/shared/Button';
import { Divider } from '@/componentes/shared/Divider';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';


export function HistoryCard() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const { getAllSimulations, deleteSimulation } = useSimulationStorage();
  const [simulations, setSimulations] = useState<SimulationRecord[]>([]);
  const navigate = useNavigate();

  // Carrega todas as simulações ao montar o componente
  useEffect(() => {
    setSimulations(getAllSimulations());
  }, []);

  const handleDelete = (id: string) => {
    deleteSimulation(id);
    setSimulations(getAllSimulations());
  };
  const handleNaviGate = (id: string) => {
    void navigate(`/resultado/${id}`);
    return;
  };

  return (
    <>
      {simulations.length === 0 && (
        <p className="text-muted-foreground">Nenhuma simulação encontrada.</p>
      )}

     {simulations.map((simulation) => (
         <HistoryBox key={simulation.id}>
      {/* Ícone */}
      
      <div className="bg-muted-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
        <Goal className="text-primary h-[26.67px] w-[26.67px]" />
      </div>

      <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:justify-around lg:gap-6">
        {/* Data e nome */}
        <HistoryNameDate nomeMeta={simulation.goalName} data="18/06/2026" />
        {/* Informações do histórico */}

        <HistoryInfos label="Custo da meta" value={simulation.goalAmount} />
        <HistoryInfos label="Prazo" value={simulation.goalDeadline + " meses"} />
        <HistoryInfos label="Economia mensal" value={"R$ "+ simulation.income} />
      </div>

      {/*Buttons*/}

      {/* Para mostrar os botões de ação, como excluir o histórico ou ver detalhes. */}
      <div className="flex w-full flex-col items-center lg:w-auto lg:shrink-0 lg:items-end">
        <Divider orientation="horizontal" className={isMobile ? '' : 'hidden'} />
        <div className="flex">
          <Button variant="ghost"   onClick={() => handleDelete(simulation.id)}>
            <Trash2 className="text-red-600" />
          </Button>
          <Divider orientation="vertical" />
          <Button variant="secondary" onClick={() => handleNaviGate(simulation.id)}>
            <ExternalLink /> Ver detalhes
          </Button>
        </div>
      </div>
    </HistoryBox>
     ))}
      </>
  );
}

export default HistoryCard;
