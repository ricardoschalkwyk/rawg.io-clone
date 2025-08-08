import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onClick?: () => void;
  onChange: (value: string) => void;
  value?: string | undefined;
}

const Input = ({
  id,
  className = "",
  type = "text",
  placeholder = "",
  onChange,
}: Props): JSX.Element => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={clsx("rounded-md active:no-underline", className)}
    />
  );
};

Input.propTypes = {};

export default Input;
