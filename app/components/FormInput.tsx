import type { FormInputProps } from "~/types/types";

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
      className={`h-[60px] bg-white p-3 rounded-md outline-none`}
      style={{ width: width }}
      value={value}
      onChange={onChange}
    />
  );
}
