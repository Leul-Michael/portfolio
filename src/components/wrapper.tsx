import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

type WrapperProps = {
  children: ReactNode
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Wrapper = (props: WrapperProps) => {
  const { children, className, ...rest } = props
  return (
    <div
      className={clsx(
        "max-w-screen-2xl mx-auto md:px-10 px-5",
        className ?? ""
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Wrapper
