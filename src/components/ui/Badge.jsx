import PropTypes from "prop-types";

export default function Badge({
  as: Component,
  children,
  size,
  color,
  className,
  ...rest
}) {
  // Dynamic classnames
  const sizeClasses = {
    sm: "text-[0.5625rem]",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };
  const colorClasses = {
    primary: "bg-primary text-primary",
    secondary: "bg-secondary text-secondary",
    success: "bg-success-500 text-success-700 dark:text-success-200",
    error: "bg-error-500 text-error-700 dark:text-error-200",
    warning: "bg-warning-500 text-warning-700 dark:text-warning-200",
    info: "bg-info-500 text-info-700 dark:text-info-200",
    gray: "bg-gray-500 text-gray-700 dark:text-gray-200",
  };

  return (
    <Component
      className={`rounded-default bg-opacity-15 inline-flex items-center justify-center
      py-1.5 px-2 
      font-sans font-semibold uppercase leading-none tracking-widest 
      ${sizeClasses[size]}
      ${colorClasses[color]}
      ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
}

Badge.defaultProps = {
  as: "div",
  children: "Badge",
  size: "sm",
  color: "info",
  className: "",
};

Badge.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
    "gray",
  ]),
  className: PropTypes.string,
};
