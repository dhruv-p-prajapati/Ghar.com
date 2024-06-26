import PropTypes from "prop-types";

const Button = ({ variant = "primary", children, className, ...props }) => {
  const variants = {
    primary: "bg-[#2b7cff] border-[#2b7cff] hover:text-[#2b7cff] text-white hover:bg-white",
    secondary: "bg-gray-700 border-gray-700 hover:text-gray-700 text-white hover:bg-white",
    success: "bg-green-500 border-green-500 hover:text-green-500 text-white hover:bg-white",
    warning: "bg-yellow-500 border-yellow-500 hover:text-yellow-500 text-white hover:bg-white",
    danger: "bg-red-500 border-red-500 hover:text-red-500 text-white hover:bg-white",
    primaryOutline: "border-[#2b7cff] text-[#2b7cff] hover:bg-[#2b7cff] hover:text-white",
    secondaryOutline: "border-gray-700 hover:bg-gray-700 hover:text-white",
    successOutline: "border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    warningOutline: "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white",
    dangerOutline: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
    whiteOutline: "border-white text-white hover:bg-white hover:text-[#2b7cff]"
  };

  return (
    <button className={`border rounded-md py-1 px-4 font-semibold  text-base duration-300  ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "primaryOutline",
    "secondary",
    "secondaryOutline",
    "success",
    "successOutline",
    "warning",
    "warningOutline",
    "danger",
    "dangerOutline",
    "whiteOutline"
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Button;
