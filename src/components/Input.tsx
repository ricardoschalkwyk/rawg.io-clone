import { HTMLInputTypeAttribute } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onClick?: () => void;
  onChange: (value: string) => void;
  value?: string | undefined;
}

const Input = ({
  className = "",
  type = "text",
  placeholder = "",
  onChange,
}: Props): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={clsx("rounded-md active:no-underline", className)}
    />
  );
};

Input.propTypes = {};

export default Input;
