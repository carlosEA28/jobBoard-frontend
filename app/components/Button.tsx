import { Link } from "react-router";

interface buttonProps {
  title: string;
  color: string;
  textColor: string;
  border?: string;
  borderColor?: string;
}

export default function Button({
  title,
  color,
  textColor,
  border,
  borderColor,
}: buttonProps) {
  return (
    <Link to={"/fazerRota"}>
      <button
        className={`w-[180px] h-[60px] font-semibold border rounded-md ${color} ${textColor} ${border} ${borderColor}`}
      >
        {title}
      </button>
    </Link>
  );
}
