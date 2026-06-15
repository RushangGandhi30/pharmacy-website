import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Pill } from "lucide-react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white text-[11px] py-1.5 px-4 font-semibold text-center flex items-center justify-center gap-2">
        <span className="bg-white/20 text-[9px] px-2 py-0.5 rounded font-black tracking-wider uppercase backdrop-blur-sm">PROMO</span>
        Use code <span className="underline font-bold">HEALTH10</span> for 10% off on premium healthcare devices!
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Line: Logo, Search, Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3 md:gap-4 border-b border-gray-100 dark:border-slate-900">

          {/* Logo & Mobile Helpline */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="text-2xl font-black tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-teal-600 flex items-center justify-center text-white text-base font-black shadow-md shadow-teal-600/20">
                <Pill className="w-4.5 h-4.5" />
              </div>
              <span>Medi<span className="text-teal-600">Vibe</span></span>
            </Link>

            {/* Helpline number on mobile */}
            <div className="flex items-center md:hidden">
              <Link href="tel:+91221234567" className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-extrabold">+91 22 1234</span>
              </Link>
            </div>
          </div>

          {/* Search Bar in center */}
          <div className="w-full md:flex-1 md:max-w-xl lg:max-w-2xl">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>

          {/* Desktop Right Quick Actions */}
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-600 dark:text-gray-400">
            <Link href="tel:+91221234567" className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-xs">
              <Phone className="w-4 h-4 text-teal-600" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-gray-450 dark:text-gray-500 font-normal">Helpline Support</p>
                <p className="font-bold text-gray-800 dark:text-gray-200">+91 22 1234</p>
              </div>
            </Link>
          </div>

        </div>

        {/* Lower Row: Navigation links */}
        <div className="flex items-center justify-between md:justify-start gap-8 py-2.5 overflow-x-auto text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-450 scrollbar-none">
          <Link
            href="/"
            className={`transition-colors hover:text-teal-600 dark:hover:text-teal-400 pb-0.5 border-b-2 ${pathname === "/" && !searchQuery
                ? "border-teal-600 text-teal-600 dark:text-teal-400 font-bold"
                : "border-transparent"
              }`}
          >
            Home
          </Link>
          <Link
            href="/categories"
            className={`transition-colors hover:text-teal-600 dark:hover:text-teal-400 pb-0.5 border-b-2 ${pathname === "/categories"
                ? "border-teal-600 text-teal-600 dark:text-teal-400 font-bold"
                : "border-transparent"
              }`}
          >
            Shop Categories
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:text-teal-600 dark:hover:text-teal-400 pb-0.5 border-b-2 ${pathname === "/about"
                ? "border-teal-600 text-teal-600 dark:text-teal-400 font-bold"
                : "border-transparent"
              }`}
          >
            About Us & Store Map
          </Link>
        </div>
      </div>
    </header>
  );
}
