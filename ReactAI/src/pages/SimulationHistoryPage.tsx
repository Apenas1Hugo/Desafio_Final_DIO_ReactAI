import { Button } from '../componentes/shared/Button';
import { PageHero } from '../componentes/shared/PageHero';
import { Divider } from '../componentes/shared/Divider';
import { Trash2, Goal, ExternalLink } from 'lucide-react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

export function SimulationHistoryPage() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:py-14 ">
      <PageHero
        title="Histórico de  Simulação"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      <div
        className="
        border-border bg-card shadow-black-20
        flex
        
        w-full
        flex-col
        items-start
        justify-between
        gap-6
        rounded-[22px] border
        p-8
        shadow-2xl
        lg:flex-row
      "
      >
        {/* Ícone */}
        <div
          className="
          bg-muted-primary flex h-14
          w-14 shrink-0
          items-center
          justify-center
          rounded-lg
        "
        >
          <Goal
            className="
            text-primary
            h-[26.67px]
            w-[26.67px]
          "
          />
        </div>

        <div
          className="
          flex flex-1
          flex-col items-center
          justify-center
          gap-6
          md:flex-row md:gap-10
        "
        ></div>
        <div className="w:full flex flex-col items-center lg:items-start">
          <Divider orientation="horizontal" className={isMobile ? '' : 'hidden'} />
          <div className="flex">
            <Button variant="ghost">
              <Trash2 className="text-red-600" />
            </Button>
            <Divider orientation="vertical" />
            <Button variant="secondary">
              <ExternalLink /> Ver detalhes
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SimulationHistoryPage;
