import { Link } from "react-router";

interface buttonProps {
  title: string;
  color: string;
  textColor: string;
}

export default function Button({ title, color, textColor }: buttonProps) {
  return (
    <Link to={"/fazerRota"}>
      <button
        className={`w-[180px] h-[60px] font-semibold rounded-md`}
        style={{ backgroundColor: color, color: textColor }}
      >
        {title}
      </button>
    </Link>
  );
}
