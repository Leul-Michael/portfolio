"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import Wrapper from "./wrapper";
import Button from "./button";
import SvgCurve from "./svg-curve";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [typeof window !== "undefined" && window?.innerWidth <= 600 ? 0 : -400, 0]
  );

  return (
    <motion.footer
      ref={container}
      style={{ y }}
      className="relative z-[1] flex flex-col pt-40 pb-12 bg-accent/80 text-primary-dark"
    >
      <Wrapper className="flex flex-col gap-8">
        <h1 className="text-[2.5rem] font-semibold leading-[0.8]">
          Let&apos;s talk about your next project.
        </h1>
        <Button
          asLink
          name="leulmic18@gmail.com"
          target="_blank"
          rel="noreferrer"
          href="mailto:leulmic18@gmail.com"
          className="self-start secondary border text-primary-dark border-primary-dark px-6 py-2 self-start text-xl lowercase font-bold rounded-full"
        />

        <hr className="h-0 w-full mt-8 border-0" />
        <SvgCurve light />
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <p className="text-[1.5rem] font-bold leading-[0.8] text-primary-dark/80">
            Leul Michael © 2023
          </p>

          <div className="flex items-center gap-4">
            <Button
              asLink
              name="Telegram"
              target="_blank"
              rel="noreferrer"
              href="https://t.me/l_webdev"
              className="secondary border text-primary-dark border-primary-dark px-4 py-1 self-start text-sm capitalize font-bold rounded-full"
            />
            <Button
              asLink
              name="Github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Leul-Michael"
              className="secondary border text-primary-dark border-primary-dark px-4 py-1 self-start text-sm capitalize font-bold rounded-full"
            />
            <Button
              asLink
              name="Linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/leul-michael"
              className="secondary border text-primary-dark border-primary-dark px-4 py-1 self-start text-sm capitalize font-bold rounded-full"
            />
          </div>
        </div>
      </Wrapper>
    </motion.footer>
  );
};

export default Footer;
