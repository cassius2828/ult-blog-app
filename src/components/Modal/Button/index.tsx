import React from "react";

const Button = ({
  handleButtonClick,
  children,
}: {
  handleButtonClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 transition hover:border-gray-400 hover:text-gray-800"
    >
      {children}
    </button>
  );
};

export default Button;
