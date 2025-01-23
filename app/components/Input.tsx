import { Search } from "lucide-react";

export default function Input() {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
        <Search />
      </span>
      <input
        type="text"
        placeholder="Job title, Salary, or Companies..."
        className="p-3 pl-12 rounded-md w-[470px] h-[60px] outline-none border border-solid border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
      />
    </div>
  );
}
