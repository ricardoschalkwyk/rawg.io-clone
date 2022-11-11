import React, { AllHTMLAttributes, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  onClick?: () => void;
}

const Input = ({ className = "", type = "text" }: Props): JSX.Element => {
  return (
    <input
      type={type}
      className={clsx("rounded-md active:no-underline", className)}
    />
  );
};

Input.propTypes = {};

export default Input;
