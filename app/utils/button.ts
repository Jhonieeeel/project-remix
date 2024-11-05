import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type AnchorProps = AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = ButtonHTMLAttributes<HTMLElement>;

export function isAnchor(
  props: AnchorProps | ButtonProps,
): props is AnchorProps {
  return (props as AnchorProps).href !== undefined;
}
