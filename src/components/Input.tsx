import { HTMLInputTypeAttribute } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onClick?: () => void;
}

const Input = ({
  className = "",
  type = "text",
  placeholder = "",
}: Props): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx("rounded-md active:no-underline", className)}
    />
  );
};

Input.propTypes = {};

export default Input;
