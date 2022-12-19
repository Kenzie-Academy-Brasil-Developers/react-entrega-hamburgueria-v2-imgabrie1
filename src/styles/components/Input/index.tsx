import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface iPropsInput {
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  name?: string | undefined;
  value?: string | undefined;
  className?: string | undefined;
  register?: UseFormRegisterReturn;
  id?: string | undefined;
}

export const Input = ({
  handleChange,
  type,
  placeholder,
  name,
  value,
  className,
  register,
  id,
}: iPropsInput) => {
  return (
    <>
      <input
        id={id}
        onChange={handleChange}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        className={className}
        {...register}
      />
    </>
  );
};
