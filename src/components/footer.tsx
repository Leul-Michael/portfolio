import React from "react"
import Wrapper from "./wrapper"
import Button from "./button"
import SvgCurve from "./svg-curve"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col pt-40 pb-12 bg-accent/80 text-primary-dark">
      <Wrapper className="flex flex-col gap-8">
        <h1 className="text-[2.5rem] font-semibold leading-[0.8]">
          Let&apos;s talk about your next project.
        </h1>
        <Link
          target="_blank"
          rel="noreferrer"
          href="mailto:leulmic18@gmail.com"
          className="self-start"
        >
          <Button
            name="leulmic18@gmail.com"
            className="secondary border-2 text-primary-dark border-primary-dark px-6 py-2 self-start text-xl capitalize font-bold rounded-full"
          />
        </Link>

        <hr className="h-0 w-full mt-8 border-0" />
        <SvgCurve light />
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <p className="text-[1.5rem] font-bold leading-[0.8] text-primary-dark/80">
            Leul Michael © 2023
          </p>

          <div className="flex items-center gap-4">
            <Link target="_blank" rel="noreferrer" href="https://t.me/l_webdev">
              <Button
                name="Telegram"
                className="secondary border-2 text-primary-dark border-primary-dark px-4 py-1 self-start text-sm capitalize font-bold rounded-full"
              />
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Leul-Michael"
            >
              <Button
                name="Github"
                className="secondary border-2 text-primary-dark border-primary-dark px-4 py-1 self-start text-sm capitalize font-bold rounded-full"
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/leul-michael"
            >
              <Button
                name="Linkedin"
                className="secondary border-2 text-primary-dark border-primary-dark px-4 py-1 self-start text-sm capitalize font-bold rounded-full"
              />
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
