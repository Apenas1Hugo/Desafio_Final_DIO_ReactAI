import { type SimulationFormData, type SimulationRecord } from '@/data/simulation'; // Importa os tipos de dados relacionados à simulação, como os dados do formulário e o formato do registro de simulação
import{ dateNow } from '../utils/dateNow';

const LOCAL_STORAGE_KEY = 'simulation-data'; // Define a chave que será usada para armazenar os dados da simulação no localStorage

export const useSimulationStorage = () => {
  // Função para salvar os dados do formulário de simulação no localStorage, gerando um ID único para cada simulação
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID();
    const date = dateNow();
    const record: SimulationRecord = { ...formData, id, date };

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []; // Recupera os dados salvos anteriormente ou inicializa um array vazio se não houver dados

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...savedData, record]));
    return id;
  };
  // Função para recuperar os dados de uma simulação específica usando seu ID
  const getFormData = (id: string): SimulationRecord | null => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storage) {
      return null;
    }

    // Analisa os dados armazenados e procura o registro de simulação com o ID correspondente, retornando os dados ou null se não for encontrado
    const savedData = JSON.parse(storage) as SimulationRecord[];
    // Procura o registro de simulação com o ID correspondente e retorna os dados, ou null se não for encontrado
    return savedData.find((record) => record.id === id) || null;
  };
  // Função para atualizar os dados de uma simulação existente usando seu ID
  const updateSimulation = (id: string, data: SimulationRecord) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : [];

    const updated = savedData.map((record) => (record.id === id ? { ...data } : record));

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };
  //Função para retornar todos os id's das simulações salvas no localStorage
  const getAllSimulations = (): SimulationRecord[] => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storage) return [];
    return JSON.parse(storage) as SimulationRecord[];
  };
  const deleteSimulation = (id: string) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : [];

    const updated = savedData.filter((record) => record.id !== id);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  // Retorna as funções para salvar, recuperar e atualizar os dados da simulação, permitindo que outros componentes usem esse hook para gerenciar o armazenamento dos dados da simulação
  return { saveFormData, getFormData, updateSimulation, getAllSimulations, deleteSimulation };
};
