interface HistoryBoxProps {
  children: React.ReactNode
}

export function HistoryBox({ children }: HistoryBoxProps) {
  return (
    <div
      className="
        border-border bg-card shadow-black-20
        flex
        w-full
        flex-col
        items-start
        justify-between
        gap-4
        rounded-[22px] border
        p-6
        shadow-2xl
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-4
        lg:p-6
        mt-5
      "
    >
      {children}
    </div>
  )
}