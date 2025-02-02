interface FormInputProps {
  width: string;
  placeholder: string;
}

export default function FormInput({ placeholder, width }: FormInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-[${width}] h-[60px] bg-white p-3 rounded-md`}
    />
  );
}
