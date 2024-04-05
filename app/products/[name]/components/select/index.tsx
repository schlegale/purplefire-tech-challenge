import { HiChevronDown } from "react-icons/hi2";

interface Props {
  label: string;
  options: string[];
  className?: string;
}

export default function Select({ label, options, className }: Props) {
  return (
    <div className={`relative w-full ${className}`}>
      <select
        className="w-full appearance-none bg-transparent border-none text-white pr-6"
        aria-label={label}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
        <HiChevronDown />
      </div>
    </div>
  );
}
