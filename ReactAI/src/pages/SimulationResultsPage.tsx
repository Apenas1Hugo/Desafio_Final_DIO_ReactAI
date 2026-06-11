import { AIInsightsCard } from '@/componentes/features/SimulationResults/AIInsightCardProps'; // Importa o componente para exibir os insights gerados pela IA com base nos dados da simulação
import { Card } from '@/componentes/features/SimulationResults/Card'; // Importa o componente para exibir os cartões de informações financeiras
import { PageHero } from '@/componentes/shared/PageHero'; // Importa o componente para exibir o título e subtítulo da página
import { useSimulationStorage } from '@/hooks/useSimulationStorage'; // Importa o hook para acessar os dados da simulação
import { calcMonthlySavings } from '@/utils/simulation'; // Importa a função para calcular a economia mensal necessária
import { CalendarClock, CreditCardIcon, Goal, Landmark, PiggyBank, Wallet } from 'lucide-react'; 
import { useParams } from 'react-router-dom';



export function SimulationResultsPage() {
  const { id } = useParams<{ id: string }>()
  const { getFormData } = useSimulationStorage() // Usa o hook para acessar a função que recupera os dados da simulação
  
  const data = id ? getFormData(id) : null; // Recupera os dados da simulação usando o ID da URL

  if (!data) {
    return <p>Simulação não encontrada.</p>;
  }

  const monthlySavings = calcMonthlySavings(data);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Resultado da sua simulação"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card icon={Goal} label="Custo da Meta" value={data.goalAmount} subtitle={data.goalName} />
        <Card
          icon={CalendarClock}
          label="Prazo"
          value={`${data.goalDeadline} meses`}
          subtitle="Prazo para atingir a meta"
        />
        <Card
          variant="primary"
          icon={PiggyBank}
          label="Economia mensal"
          value={`R$ ${monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle="Economia mensal necessária"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <AIInsightsCard simulationId={data.id} />
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Card
            icon={Wallet}
            label="Renda mensal"
            value={data.income}
            subtitle="Renda total bruta por mês"
          />
          <Card
            icon={CreditCardIcon}
            label="Custos Fixos de Vida"
            value={data.expenses}
            subtitle="Gastos essenciais por mês"
          />
          <Card
            icon={Landmark}
            label="Dívidas / Parcelas"
            value={data.debts}
            subtitle="Valor comprometido em parcelas/depósito"
          />
        </div>
      </div>
    </main>
  );
}