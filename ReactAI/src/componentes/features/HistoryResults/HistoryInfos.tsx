
interface HistoryInfosProps {
  label: string
  value: string
}
 // Componente para exibir informações do histórico, como custo da meta, valor investido e valor atual
export function HistoryInfos({ label, value }: HistoryInfosProps) {
  return (
    <div className="flex shrink-0 flex-col items-start">
      <p className="text-muted-foreground mb-1 whitespace-nowrap text-sm">{label}</p>
      <h3 className="text-foreground text-xl font-semibold sm:text-xl">{value}</h3>
    </div>
  );
}

export default HistoryInfos;