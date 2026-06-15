import { Pill, Baby, Heart, Droplet, Stethoscope, Leaf, Sparkles, Sprout } from "lucide-react";
import { Category } from "../../lib/products";

interface CategoryGridProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

const categoriesData: { key: Category; icon: any; color: string; bg: string }[] = [
  { key: "Medicines", icon: Pill, color: "text-blue-600", bg: "bg-blue-50 hover:bg-blue-100/80" },
  { key: "Baby Care", icon: Baby, color: "text-pink-600", bg: "bg-pink-50 hover:bg-pink-100/80" },
  { key: "Personal Care", icon: Heart, color: "text-purple-600", bg: "bg-purple-50 hover:bg-purple-100/80" },
  { key: "Diabetes Care", icon: Droplet, color: "text-red-600", bg: "bg-red-50 hover:bg-red-100/80" },
  { key: "Healthcare Devices", icon: Stethoscope, color: "text-indigo-600", bg: "bg-indigo-50 hover:bg-indigo-100/80" },
  { key: "Vitamins & Supplements", icon: Leaf, color: "text-green-600", bg: "bg-green-50 hover:bg-green-100/80" },
  { key: "Skin Care", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50 hover:bg-amber-100/80" },
  { key: "Ayurvedic", icon: Sprout, color: "text-emerald-600", bg: "bg-emerald-50 hover:bg-emerald-100/80" },
];

export default function CategoryGrid({ selectedCategory, onSelectCategory }: CategoryGridProps) {
  return (
    <section className="py-12 bg-gray-50/50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Shop by Category</h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Select a category below to filter our high-quality pharmaceutical and healthcare selection.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categoriesData.map(({ key, icon: Icon, color, bg }) => {
            const isSelected = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => {
                  onSelectCategory(isSelected ? null : key);
                  // Scroll to product grid section
                  const gridEl = document.getElementById("catalog");
                  if (gridEl) {
                    gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`flex flex-col items-center justify-center p-5 rounded-2xl transition-all duration-300 border text-center ${bg} ${
                  isSelected
                    ? "border-teal-500 ring-2 ring-teal-500/20 shadow-md scale-[1.03] bg-teal-50/80"
                    : "border-gray-200/60 shadow-sm hover:shadow hover:-translate-y-1 hover:scale-[1.02]"
                }`}
              >
                <div className={`p-3 rounded-full bg-white shadow-sm mb-3 ${color} transition-transform duration-300 hover:rotate-12`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">
                  {key === "Ayurvedic" ? "Ayurvedic Products" : key}
                </span>
              </button>
            );
          })}
        </div>

        {selectedCategory && (
          <div className="mt-8 text-center">
            <button
              onClick={() => onSelectCategory(null)}
              className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-4"
            >
              Reset filters to show all categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
