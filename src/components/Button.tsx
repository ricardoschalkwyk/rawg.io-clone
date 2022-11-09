import React, { AllHTMLAttributes } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

interface Props {
  className: string;
  children: string;
  onClick: React.MouseEvent<HTMLElement>;
  bg: string;
}

const Button: React.FC<Props> = ({
  className = "",
  children = "",
  bg = "",
}) => {
  return (
    <button
      className={clsx(
        "rounded-md transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110",
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
