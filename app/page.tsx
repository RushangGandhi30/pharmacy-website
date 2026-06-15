"use client";

import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import ProductGrid from "./components/ProductGrid";
import PromotionalBanners from "./components/PromotionalBanners";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import { products as allProducts, Category } from "../lib/products";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Read search query from URL on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search");
      if (search) {
        setSearchQuery(search);
        // Clear search param from URL without reloading
        const newUrl = window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, []);

  // Trigger skeleton loader on search query or category filter changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  // Real-time client-side search and category filtering
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Specific products for home sections (when no search or category filter is active)
  const featuredProducts = useMemo(() => {
    return allProducts.filter(
      (p) => p.category === "Vitamins & Supplements" || p.category === "Skin Care"
    );
  }, []);

  const bestSellingProducts = useMemo(() => {
    return allProducts.filter(
      (p) => p.category === "Medicines" || p.category === "Diabetes Care"
    );
  }, []);

  const healthcareProducts = useMemo(() => {
    return allProducts.filter(
      (p) => p.category === "Healthcare Devices" || p.category === "Personal Care"
    );
  }, []);

  // Determine if user is actively searching or filtering
  const isFiltering = searchQuery !== "" || selectedCategory !== null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/20">
      {/* Sticky Header with centered search */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-grow">
        {/* Hero Banner with CTA */}
        <HeroSection />

        {/* Category section with active indicator */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {isFiltering ? (
          /* Search results section */
          <ProductGrid
            products={filteredProducts}
            isLoading={isLoading}
            title={
              selectedCategory
                ? `${selectedCategory} Selection`
                : "Search Results"
            }
            subtitle={
              selectedCategory
                ? `Showing premium quality ${selectedCategory.toLowerCase()} products.`
                : `Found ${filteredProducts.length} items matching your criteria.`
            }
          />
        ) : (
          /* Default structured homepage sections */
          <>
            {/* Featured Products */}
            <ProductGrid
              products={featuredProducts}
              isLoading={isLoading}
              title="Featured Products"
              subtitle="Handpicked vitamins, supplements, and skin wellness essentials."
              limit={4}
            />

            {/* Promotional Banners */}
            <PromotionalBanners />

            {/* Best Selling Products */}
            <ProductGrid
              products={bestSellingProducts}
              isLoading={isLoading}
              title="Best Sellers"
              subtitle="Our most trusted daily medical formulations and care packages."
              limit={4}
            />

            {/* Health Care Products */}
            <ProductGrid
              products={healthcareProducts}
              isLoading={isLoading}
              title="Health & Personal Devices"
              subtitle="Premium monitoring tools, sanitizers, and daily hygiene products."
              limit={4}
            />
          </>
        )}

        {/* Why Choose Us trust badges */}
        <WhyChooseUs />
      </main>

      {/* Enterprise-level multi-column Footer */}
      <Footer />
    </div>
  );
}