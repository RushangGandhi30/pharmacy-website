"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";
import { products as allProducts } from "../../../lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);
  const [searchQuery, setSearchQuery] = useState("");

  // Find current product
  const product = allProducts.find((p) => p.id === id);

  // If user starts searching on details page, redirect to home page with search query
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      router.push(`/?search=${encodeURIComponent(query)}#catalog`);
    }
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="text-center bg-white p-8 rounded-3xl border border-gray-200 max-w-md shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
            <p className="text-sm text-gray-500 mb-6">
              We couldn't find the medical item you are looking for. It might have been removed or discontinued.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-6 py-2.5 rounded-full transition shadow"
            >
              Go to Homepage
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related products (same category, excluding current product, limit to 4)
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/20 dark:bg-slate-950">
      {/* Header handles search and redirects to home */}
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <main className="flex-grow">
        <ProductDetails product={product} relatedProducts={relatedProducts} />
      </main>

      <Footer />
    </div>
  );
}
