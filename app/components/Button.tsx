import { Link } from "react-router";

interface buttonProps {
  title: string;
  color: string;
  textColor: string;
  border?: string;
  borderColor?: string;
  type?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  title,
  color,
  textColor,
  border,
  borderColor,
  onClick,
}: buttonProps) {
  return (
    <Link to={"/signin"}>
      <button
        onClick={onClick}
        className={`w-[180px] h-[60px] font-semibold border rounded-md ${color} ${textColor} ${border} ${borderColor}`}
      >
        {title}
      </button>
    </Link>
  );
}
