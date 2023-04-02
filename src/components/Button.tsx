import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bg?: string;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  className = "",
  children = "",
  bg = "",
  type = "button",
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={clsx("rounded-md", className, bg)}
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
