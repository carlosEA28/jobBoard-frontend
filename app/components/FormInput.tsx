import { useState } from "react";

interface FormInputProps {
  width: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  placeholder,
  width,
  onChange,
  value,
  type,
}: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-[${width}] h-[60px] bg-white p-3 rounded-md outline-none`}
      value={value}
      onChange={onChange}
    />
  );
}
