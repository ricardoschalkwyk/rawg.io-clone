import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bg?: string;
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
