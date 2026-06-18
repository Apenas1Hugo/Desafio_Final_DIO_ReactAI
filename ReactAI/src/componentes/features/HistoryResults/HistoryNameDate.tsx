
interface HistoryNameDateProps {
  nomeMeta: string
  data: string
}

export function HistoryNameDate({ nomeMeta, data }: HistoryNameDateProps) {
  return (
    <div className="flex shrink-0 flex-col items-start pt-[0px]">
      <h2 className=" text-foreground text-xl font-semibold sm:text-xl">{nomeMeta}</h2>
       <p className=" text-muted-foreground mb-1 whitespace-nowrap text-sm">{data}</p>
    </div>
  );
}

export default HistoryNameDate;