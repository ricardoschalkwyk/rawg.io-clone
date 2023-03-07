type Props = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

function Icon({ icon, className, ...props }: Props) {
  const IconComponent = icon;
  return <IconComponent className={className} {...props} />;
}

export default Icon;
