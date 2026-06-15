import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search for medicines, vitamins, medical devices..." }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-full border border-gray-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all placeholder-gray-400 dark:placeholder-gray-500 text-sm md:text-base backdrop-blur-sm"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
