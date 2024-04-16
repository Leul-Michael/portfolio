"use client";

import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import Magenet from "./magenet";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type NextLinkProps = {
  asLink: true;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

type ButtonProps = {
  asLink?: false;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = {
  name: string;
} & (NextLinkProps | ButtonProps);

const Button = (props: Props) => {
  if (props.asLink) {
    const { asLink, className, children, name, ...rest } = props;

    return (
      <Magenet>
        <Link
          data-before-text={name}
          className={cn("btn border border-primary-muted", className ?? "")}
          {...rest}
        >
          {name}
        </Link>
      </Magenet>
    );
  }

  const { asLink, className, name, children, ...rest } = props;
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
  );
};

export default Button;
