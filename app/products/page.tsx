"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import { products as allProducts, Category } from "../../lib/products";
import { SlidersHorizontal, ArrowUpDown, RefreshCw } from "lucide-react";

export default function BrowsePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "discount">("default");
  const [isLoading, setIsLoading] = useState(false);

  // Read search parameter from URL on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search");
      if (search) {
        setSearchQuery(search);
      }
      const cat = params.get("category") as Category;
      if (cat && [
        "Medicines", "Baby Care", "Personal Care", "Diabetes Care", 
        "Healthcare Devices", "Vitamins & Supplements", "Skin Care", "Ayurvedic"
      ].includes(cat)) {
        setSelectedCategory(cat);
      }
    }
  }, []);

  // Trigger skeleton loader on filter changes for smooth feedback
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, sortBy]);

  // Handle Search Input inside Header
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Filter & Sort Logic
  const processedProducts = useMemo(() => {
    // 1. Filter
    let items = allProducts.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // 2. Sort
    if (sortBy === "price-asc") {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      items = [...items].sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
      items = [...items].sort((a, b) => {
        const discountA = (a.mrp - a.price) / a.mrp;
        const discountB = (b.mrp - b.price) / b.mrp;
        return discountB - discountA;
      });
    }

    return items;
  }, [searchQuery, selectedCategory, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSortBy("default");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/20">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <main className="flex-grow container mx-auto px-4 lg:px-8 py-8">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Browse Products</h1>
          <p className="mt-2 text-sm text-gray-500">
            Find medicines and healthcare equipment with sorting and quick filter parameters.
          </p>
        </div>

        {/* Filters and Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3 bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-6 lg:sticky lg:top-40">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="flex items-center gap-2 font-bold text-gray-800 text-sm">
                <SlidersHorizontal className="w-4 h-4 text-teal-600" /> Filters
              </span>
              {(selectedCategory || searchQuery || sortBy !== "default") && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category</h4>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left text-xs md:text-sm py-2 px-3 rounded-lg font-semibold transition ${
                    selectedCategory === null
                      ? "bg-teal-50 text-teal-700 font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  All Categories
                </button>
                {([
                  "Medicines", "Baby Care", "Personal Care", "Diabetes Care", 
                  "Healthcare Devices", "Vitamins & Supplements", "Skin Care", "Ayurvedic"
                ] as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left text-xs md:text-sm py-2 px-3 rounded-lg font-semibold transition ${
                      selectedCategory === cat
                        ? "bg-teal-50 text-teal-700 font-bold border-l-2 border-teal-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat === "Ayurvedic" ? "Ayurvedic Products" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort By
              </h4>
              <div className="space-y-1.5">
                {[
                  { value: "default", label: "Default Popularity" },
                  { value: "price-asc", label: "Price: Low to High" },
                  { value: "price-desc", label: "Price: High to Low" },
                  { value: "discount", label: "Maximum Discount" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value as any)}
                    className={`w-full text-left text-xs md:text-sm py-2 px-3 rounded-lg font-semibold transition ${
                      sortBy === option.value
                        ? "bg-teal-50 text-teal-700 font-bold border-l-2 border-teal-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Panel */}
          <div className="lg:col-span-9">
            <ProductGrid
              products={processedProducts}
              isLoading={isLoading}
              title={
                selectedCategory 
                  ? `${selectedCategory} Products` 
                  : "All Products"
              }
              subtitle={`Showing ${processedProducts.length} premium medical and health items.`}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
