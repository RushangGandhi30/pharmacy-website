import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, ShieldCheck, Heart, Share2, Clipboard, HeartPulse } from "lucide-react";
import { Product } from "../../lib/products";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState<"desc" | "benefits" | "usage" | "storage">("desc");

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-bold mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Catalog
      </Link>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-gray-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
        
        {/* Left Column: Image Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="aspect-square w-full rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-150 dark:border-slate-850 overflow-hidden flex items-center justify-center p-4 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl"
            />
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-emerald-500 text-white font-extrabold text-xs px-3 py-1 rounded-lg shadow-sm">
                Save {discount}%
              </span>
            )}
          </div>

          {/* Quick trust stamps */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-3 bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100/40 dark:border-teal-900/20 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-900 dark:text-gray-200">100% Genuine</p>
                <p className="text-[9px] text-gray-500 dark:text-gray-400">Quality Checked</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100/40 dark:border-teal-900/20 rounded-xl">
              <Calendar className="w-5 h-5 text-teal-600 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-900 dark:text-gray-200">Expiry Date</p>
                <p className="text-[9px] text-gray-500 dark:text-gray-400">{product.expiry}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Info Details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 text-[10px] font-extrabold uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-xs text-gray-400 font-semibold">• {product.brand}</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-gray-50 dark:bg-slate-950 rounded-2xl border border-gray-150 dark:border-slate-800 inline-flex flex-col gap-1.5 min-w-[200px]">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-teal-600 dark:text-teal-400">₹{product.price}</span>
                {product.mrp > product.price && (
                  <span className="text-sm text-gray-400 dark:text-gray-500 line-through">MRP ₹{product.mrp}</span>
                )}
              </div>
              {product.mrp > product.price && (
                <p className="text-xs text-emerald-600 font-bold">
                  You save ₹{product.mrp - product.price} ({discount}% off) inclusive of all taxes.
                </p>
              )}
            </div>

            {/* Micro details */}
            <div className="text-sm text-gray-650 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-slate-800 pt-4">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Key Description:</p>
              <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
            </div>

            {/* Detailed Tabs System */}
            <div className="border-t border-gray-100 dark:border-slate-800 pt-6">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-slate-800">
                {(["desc", "benefits", "usage", "storage"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-4 font-bold text-xs md:text-sm capitalize transition-all border-b-2 -mb-[2px] ${
                      activeTab === tab
                        ? "border-teal-500 text-teal-600 dark:text-teal-400"
                        : "border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                    }`}
                  >
                    {tab === "desc"
                      ? "Description"
                      : tab === "usage"
                      ? "How to Use"
                      : tab}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="py-4 text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed min-h-[120px]">
                {activeTab === "desc" && (
                  <p className="text-gray-500 dark:text-gray-400 whitespace-pre-line">{product.description}</p>
                )}
                
                {activeTab === "benefits" && (
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-500 dark:text-gray-400">
                    {product.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                )}
                
                {activeTab === "usage" && (
                  <div className="flex gap-2">
                    <Clipboard className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-gray-500 dark:text-gray-400">{product.usage}</p>
                  </div>
                )}
                
                {activeTab === "storage" && (
                  <div className="flex gap-2">
                    <HeartPulse className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-gray-500 dark:text-gray-400">{product.storage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick info alerts */}
          <div className="border-t border-gray-100 dark:border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
              <span>Expiry date:</span>
              <span className="font-bold text-gray-605 dark:text-gray-300">{product.expiry}</span>
            </div>
            
            <div className="flex gap-3">
              <button
                className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/20 transition"
                aria-label="Add to Favorites"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/20 transition"
                aria-label="Share product"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 border-t border-gray-100 dark:border-slate-800 pt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Products</h2>
            <p className="text-xs text-gray-400 dark:text-gray-550 font-semibold">Other premium items you might like from the {product.category} category.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 dark:border-slate-800 p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                <div className="w-full h-36 bg-gray-50 dark:bg-slate-950 rounded-xl overflow-hidden mb-3 relative flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase mb-0.5">{p.brand}</span>
                <h3 className="font-bold text-gray-950 dark:text-white text-sm line-clamp-1 mb-2">{p.name}</h3>
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-50 dark:border-slate-800/80">
                  <span className="text-sm font-extrabold text-teal-600 dark:text-teal-400">₹{p.price}</span>
                  <Link
                    href={`/products/${p.id}`}
                    className="text-[11px] font-extrabold text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
