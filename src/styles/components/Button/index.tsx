import React from "react";

interface iPropsButton {
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
  disabled?: boolean | undefined;
}

export const Button = ({
  handleClick,
  type,
  children,
  className,
  disabled,
}: iPropsButton) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};
