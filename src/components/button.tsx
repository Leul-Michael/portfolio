"use client"

import { clsx } from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import Magenet from "./magenet"

type ButtonProps = {
  name: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button = (props: ButtonProps) => {
  const { name, className, ...rest } = props

  return (
    <Magenet>
      <button
        className={clsx(
          "border border-primary-muted rounded-md",
          className ?? ""
        )}
        {...rest}
      >
        {name}
      </button>
    </Magenet>
  )
}

export default Button
