import { cn } from "@/lib/utils"
import React from "react"

type Option = {
  id: number
  label: string
}

type SelectOptionProps = {
  options: Option[]
  value: Option | undefined
  onClick: (v: Option) => void
  error?: string
}

const SelectOption = ({
  options,
  value,
  onClick,
  error,
}: SelectOptionProps) => {
  const isSelected = (currentValue: Option) => {
    if (!value) return false
    return currentValue.id === value.id
  }
  return (
    <div className="flex flex-col gap-2">
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
      <div className="flex items-center gap-4 flex-wrap">
        {options.map((option) => (
          <span
            key={option.id}
            className={cn(
              "cursor-pointer px-8 py-[0.6rem] flex items-center justify-center border rounded-full whitespace-nowrap",
              isSelected(option) ? "border-primary/90" : "border-primary/40"
            )}
            onClick={() => onClick(option)}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SelectOption
