import React from "react"
import Wrapper from "./wrapper"
import Button from "./button"
import SvgCurve from "./svg-curve"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col pt-40 pb-12">
      <Wrapper className="flex flex-col gap-8">
        <h1 className="text-[2.5rem] font-semibold leading-[0.8]">
          Let&apos;s talk about your next project.
        </h1>
        <Link
          target="_blank"
          rel="noreferrer"
          href="mailto:leulmic18@gmail.com"
        >
          <Button
            name="leulmic18@gmail.com"
            className="text-accent/90 border-accent/90 px-6 py-2 self-start text-xl capitalize font-semibold rounded-full"
          />
        </Link>

        <hr className="h-0 w-full mt-8 border-0" />
        <SvgCurve />
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <p className="text-[1.5rem] font-semibold leading-[0.8] text-primary-muted/60">
            Leul Michael © 2023
          </p>

          <div className="flex items-center gap-4">
            <Link target="_blank" rel="noreferrer" href="https://t.me/l_webdev">
              <Button
                name="Telegram"
                className="text-primary-muted px-4 py-1 self-start text-sm capitalize font-semibold rounded-full"
              />
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Leul-Michael"
            >
              <Button
                name="Github"
                className="text-primary-muted px-4 py-1 self-start text-sm capitalize font-semibold rounded-full"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/leul-michael"
            >
              <Button
                name="Linkedin"
                className="text-primary-muted px-4 py-1 self-start text-sm capitalize font-semibold rounded-full"
              />
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
