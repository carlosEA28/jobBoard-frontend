import type { FormInputProps } from "~/types/types";

export default function FormInput({
  placeholder,
  width,
  type,
  name,
  register,
  rules,
  error,
}: FormInputProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`h-[60px] bg-white p-3 rounded-md outline-none`}
        style={{ width: width }}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
