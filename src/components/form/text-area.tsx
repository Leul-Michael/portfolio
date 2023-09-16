import type { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type TextAreaProps = {
  register: UseFormRegisterReturn<any>
  error: string | undefined
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

const TextArea = (props: TextAreaProps) => {
  const { register, error, ...rest } = props
  return (
    <div className="flex flex-col">
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
      <textarea
        className="resize-y min-h-[200px] p-3 border border-primary/40 h-[50px] rounded-lg bg-transparent outline-none focus:ring-offset-transparent focus:ring-2 focus:ring-offset-1 focus:ring-border"
        {...rest}
        {...register}
      />
    </div>
  )
}

export default TextArea
