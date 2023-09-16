import type { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type InputProps = {
  register: UseFormRegisterReturn<any>
  error: string | undefined
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputProps) => {
  const { register, error, ...rest } = props
  return (
    <div className="flex flex-col gap-2">
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
      <input
        className="max-w-[450px] px-3 border border-primary/40 h-[50px] rounded-lg bg-transparent outline-none focus:ring-offset-transparent focus:ring-2 focus:ring-offset-1 focus:ring-border"
        {...rest}
        {...register}
      />
    </div>
  )
}

export default Input
