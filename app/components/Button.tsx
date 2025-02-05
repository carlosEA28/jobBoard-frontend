import { Link } from "react-router";
import type { buttonProps } from "~/types/types";

export default function Button({
  title,
  color,
  textColor,
  border,
  borderColor,
  onClick,
}: buttonProps) {
  return (
    <Link to={"#"}>
      <button
        onClick={onClick}
        className={`w-[180px] h-[60px] font-semibold border rounded-md ${color} ${textColor} ${border} ${borderColor}`}
      >
        {title}
      </button>
    </Link>
  );
}
