import { chakra } from "@chakra-ui/system";
import VisuallyHidden from "@chakra-ui/visually-hidden";
import { ReactNode } from "react";

export const LinkButton = ({
  children,
  label,
  href,
  target,
  rounded,
  bg,
  hoverColor,
  p,
}: {
  children: ReactNode;
  label?: string;
  href: string;
  target?: string;
  rounded?: string;
  bg?: string;
  hoverColor?: string;
  p?: string;
}) => {
  return (
    <chakra.button
     
      p={p ? p : 0}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={target}
   
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
