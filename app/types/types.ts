export interface FormInputProps {
  width: string;
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface buttonProps {
  title: string;
  color: string;
  textColor: string;
  border?: string;
  borderColor?: string;
  type?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
