import { PageHero } from '../componentes/shared/PageHero';
import { HistoryCard } from '../componentes/features/HistoryResults/HistoryCard';

{/* Página para mostrar o histórico de simulações, onde os usuários podem acompanhar seus planos financeiros anteriores. */}
export function SimulationHistoryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:py-14 ">
      
      <PageHero
        title="Histórico de  Simulação"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />
      {/* Para mostrar os cards de histórico, onde cada card representa uma simulação anterior, com informações como data, custo da meta, etc. */}
      <HistoryCard></HistoryCard>
      
    </main>
  );
}

export default SimulationHistoryPage;
