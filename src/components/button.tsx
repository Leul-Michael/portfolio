"use client"

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import Magenet from "./magenet"
import { cn } from "@/lib/utils"

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
        data-before-text={name}
        className={cn("btn border border-primary-muted", className ?? "")}
        {...rest}
      >
        {name}
      </button>
    </Magenet>
  )
}

export default Button
