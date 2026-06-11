import {
  CalendarClock,
  CreditCard,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'

import type { FormStepProps } from '../componentes/features/Simulation/FormStep' // Importa o tipo de propriedades para os passos do formulário de simulação
import type { InsightData } from '@/services/aiService' // Importa o tipo de dados para os insights gerados pela IA com base nos dados da simulação


// Define os passos do formulário de simulação, cada um com um ícone, título, pergunta e propriedades de entrada específicas para coletar os dados necessários para a simulação financeira 
export const simulationFormSteps = [
  {
    id: 'income',
    icon: PiggyBank,
    title: 'Renda mensal bruta',
    question:
      'Quanto é depositado na sua conta todo mês (somando todas as fontes)?',
    inputProps: {
      placeholder: 'ex: 5.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'expenses',
    icon: CreditCard,
    title: 'Custos fixos de vida',
    question:
      'Quanto você gasta mensalmente com custos fixos (aluguel, contas, etc)?',
    inputProps: {
      placeholder: 'ex: 2.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'debts',
    icon: Landmark,
    title: 'Dívidas / parcelas',
    question:
      'Você tem algum valor comprometido com parcelas ou empréstimos mensalmente?',
    inputProps: {
      placeholder: 'ex: 500,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalName',
    icon: Goal,
    title: 'Nome da meta',
    question: 'Qual o objetivo que você deseja alcançar?',
    inputProps: {
      placeholder: 'ex: Viagem para o Japão',
      maxLength: 50,
    },
  },
  {
    id: 'goalAmount',
    icon: Wallet,
    title: 'Custo da meta',
    question: 'Quanto custa realizar esse sonho?',
    inputProps: {
      placeholder: 'ex: 15.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalDeadline',
    icon: CalendarClock,
    title: 'Prazo desejado',
    question: 'Em quantos meses você planeja atingir esse objetivo?',
    inputProps: {
      type: 'number',
      placeholder: 'ex: 12',
      suffix: 'meses',
      min: 1,
      max: 120,
    },
    submitButtonProps: {
      label: 'Gerar simulação',
      emojiIcon: '✨',
    },
  },
]satisfies FormStepProps[]


export type SimulationFormData = Record<
  (typeof simulationFormSteps)[number]['id'],
  string
>
// Define o formato dos dados do formulário de simulação, onde cada campo corresponde a um dos passos do formulário e é do tipo string
export type SimulationRecord = SimulationFormData & {
  id: string
  insight?: InsightData
}