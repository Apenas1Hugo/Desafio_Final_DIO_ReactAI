import { PageHero } from '../componentes/shared/PageHero';
import { HistoryCard } from '../componentes/features/HistoryResults/HistoryCard';

export function SimulationHistoryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:py-14 ">
      <PageHero
        title="Histórico de  Simulação"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />
      <HistoryCard></HistoryCard>
    </main>
  );
}

export default SimulationHistoryPage;
