import type { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface FormInputProps {
  width: string;
  placeholder: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export interface buttonProps {
  title: string;
  color: string;
  textColor: string;
  border?: string;
  borderColor?: string;
  type: string;
}
