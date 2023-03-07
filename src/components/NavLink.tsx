import { NavLink as RouterNavLink } from "react-router-dom";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  to: string;
};

function NavLink({
  children,
  className = "text-blue-500 hover:underline",
  onClick,
  to,
}: Props): React.ReactElement {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => clsx(className)}
      onClick={() => {
        onClick?.();
      }}
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
