"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products as allProducts, Category } from "../../lib/products";
import { Pill, Baby, Heart, Droplet, Stethoscope, Leaf, Sparkles, Sprout, ArrowLeft } from "lucide-react";

interface CategoryMeta {
  icon: any;
  color: string;
  bg: string;
  border: string;
  hoverBg: string;
  desc: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerGradient: string;
}

const categoryDetails: Record<Category, CategoryMeta> = {
  Medicines: {
    icon: Pill,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50/50 dark:bg-blue-950/20",
    border: "border-blue-100 dark:border-blue-900/30",
    hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    desc: "Rx prescription drugs, tablets, health capsules, and generic fever/pain medications.",
    bannerTitle: "Genuine Pharmacy Medicines",
    bannerDesc: "All medicines are checked by certified pharmacists and sourced directly from manufacturers.",
    bannerGradient: "from-blue-600 to-cyan-600",
  },
  "Baby Care": {
    icon: Baby,
    color: "text-pink-650 dark:text-pink-400",
    bg: "bg-pink-50/50 dark:bg-pink-950/20",
    border: "border-pink-100 dark:border-pink-900/30",
    hoverBg: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    desc: "Gentle baby wipes, moisturizing rash creams, talcums, and baby washes.",
    bannerTitle: "Gentle Care for Your Little Ones",
    bannerDesc: "100% safe, paraben-free, and hypoallergenic formulations tested for sensitive skin.",
    bannerGradient: "from-pink-500 to-rose-500",
  },
  "Personal Care": {
    icon: Heart,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50/50 dark:bg-purple-950/20",
    border: "border-purple-100 dark:border-purple-900/30",
    hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
    desc: "Strong herbal hair shampoos, fresh hand washes, and daily hygiene products.",
    bannerTitle: "Personal Hygiene & Care",
    bannerDesc: "Revitalize your daily body routine with premium skincare and personal hygiene supplies.",
    bannerGradient: "from-purple-600 to-indigo-600",
  },
  "Diabetes Care": {
    icon: Droplet,
    color: "text-red-650 dark:text-red-400",
    bg: "bg-red-50/50 dark:bg-red-950/20",
    border: "border-red-100 dark:border-red-900/30",
    hoverBg: "hover:bg-red-50 dark:hover:bg-red-900/20",
    desc: "Blood glucose monitoring test strips, monitoring kits, and calorie-free sugar substitutes.",
    bannerTitle: "Complete Diabetes Management",
    bannerDesc: "Monitor your sugar levels accurately at home with trusted medical brands.",
    bannerGradient: "from-red-500 to-orange-500",
  },
  "Healthcare Devices": {
    icon: Stethoscope,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50/50 dark:bg-indigo-950/20",
    border: "border-indigo-100 dark:border-indigo-900/30",
    hoverBg: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
    desc: "Automatic digital BP monitors, contactless thermometers, and pulse oximeters.",
    bannerTitle: "Precision Healthcare Devices",
    bannerDesc: "Professional grade monitors, oximeters, and diagnostic tools for home checking.",
    bannerGradient: "from-indigo-600 to-blue-700",
  },
  "Vitamins & Supplements": {
    icon: Leaf,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50/50 dark:bg-green-950/20",
    border: "border-green-100 dark:border-green-900/30",
    hoverBg: "hover:bg-green-50 dark:hover:bg-green-900/20",
    desc: "Immunity building Vitamin C tablets, fish oil capsules, and premium protein powders.",
    bannerTitle: "Vitamins & Nutritional Supplements",
    bannerDesc: "Power your energy, strength, and immunity with top tier nutritional supplements.",
    bannerGradient: "from-green-600 to-emerald-600",
  },
  "Skin Care": {
    icon: Sparkles,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50/50 dark:bg-amber-950/20",
    border: "border-amber-100 dark:border-amber-900/30",
    hoverBg: "hover:bg-amber-50 dark:hover:bg-amber-900/20",
    desc: "Anti-aging night creams, broad-spectrum SPF 50 sunscreens, and gentle skin cleansers.",
    bannerTitle: "Dermatologist Tested Skincare",
    bannerDesc: "Hydrate, restore, and shield your skin from pollution and UV rays daily.",
    bannerGradient: "from-amber-500 to-orange-600",
  },
  Ayurvedic: {
    icon: Sprout,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    border: "border-emerald-100 dark:border-emerald-900/30",
    hoverBg: "hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
    desc: "Ashwagandha stress capsules, bringadi hair growth oils, and organic Chyawanprash.",
    bannerTitle: "Natural Ayurvedic Wellness",
    bannerDesc: "Time-tested herbal recipes and pure extracts for natural digestion, strength, and sleep.",
    bannerGradient: "from-emerald-600 to-teal-700",
  },
};

const categoriesList = Object.keys(categoryDetails) as Category[];

export default function CategoriesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  // Check URL query parameters for category
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("select") as Category;
      if (cat && categoriesList.includes(cat)) {
        setActiveCategory(cat);
      }
    }
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      router.push(`/?search=${encodeURIComponent(query)}#catalog`);
    }
  };

  const selectCategory = (cat: Category | null) => {
    setActiveCategory(cat);
    if (cat) {
      router.push(`/categories?select=${encodeURIComponent(cat)}`, { scroll: false });
    } else {
      router.push(`/categories`, { scroll: false });
    }
  };

  // Get active products
  const categoryProducts = activeCategory
    ? allProducts.filter((p) => p.category === activeCategory)
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/20 dark:bg-slate-950">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <main className="flex-grow container mx-auto px-4 lg:px-8 py-8">
        
        {/* Navigation Breadcrumb when a category is active */}
        {activeCategory ? (
          <div className="space-y-6">
            <button
              onClick={() => selectCategory(null)}
              className="inline-flex items-center gap-2 text-xs md:text-sm text-teal-600 hover:text-teal-700 font-bold group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Category Index
            </button>

            {/* Custom Category Banner */}
            <div className={`rounded-3xl bg-gradient-to-r ${categoryDetails[activeCategory].bannerGradient} p-8 text-white shadow-md relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10 max-w-2xl space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  Active Department
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {activeCategory === "Ayurvedic" ? "Ayurvedic Products" : activeCategory}
                </h1>
                <p className="text-xs md:text-sm text-teal-150/90 leading-relaxed font-medium">
                  {categoryDetails[activeCategory].bannerDesc}
                </p>
              </div>
            </div>

            {/* Products catalog list for selected category */}
            <section className="py-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Available Products ({categoryProducts.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* Landing view: Category Cards Directory Grid (Completely different from standard product list!) */
          <div className="space-y-10">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Shop by Departments
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Explore our categorized index of medical supplies and wellness items. Click a department to view products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoriesList.map((cat) => {
                const meta = categoryDetails[cat];
                const Icon = meta.icon;
                const count = allProducts.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => selectCategory(cat)}
                    className={`flex flex-col items-start p-6 bg-white dark:bg-slate-900 border border-gray-200/80 dark:border-slate-800 rounded-2xl shadow-sm text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
                  >
                    {/* Corner accent decorative box */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 dark:bg-slate-850 rounded-bl-full -z-10 transition-colors group-hover:bg-teal-50/20 dark:group-hover:bg-teal-950/20" />

                    {/* Large Colorful Icon */}
                    <div className={`p-3.5 rounded-xl border mb-5 ${meta.color} ${meta.bg} ${meta.border} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-extrabold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {cat === "Ayurvedic" ? "Ayurvedic Products" : cat}
                    </h3>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                      {meta.desc}
                    </p>

                    <div className="flex items-center justify-between w-full border-t border-gray-100 dark:border-slate-800 pt-4 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider group-hover:text-teal-700 dark:group-hover:text-teal-300">
                      <span>Explore Catalog</span>
                      <span className="bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 py-0.5 px-2.5 rounded-full text-[10px]">
                        {count} Items
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
