const Button = ({
  label,
  onClick,
  isActive,
}: {
  label: any;
  onClick: any;
  isActive: any;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 shadow-lg py-3 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring ${
        isActive ? "bg-violet-600 text-white" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;


