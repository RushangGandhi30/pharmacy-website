import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { Product } from "../../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 overflow-hidden">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
          <Tag className="w-3 h-3" /> {discount}% OFF
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-10 bg-teal-50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-350 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-teal-100 dark:border-teal-900/30">
        {product.category}
      </div>

      {/* Image Container with zoom */}
      <div className="w-full h-40 bg-gray-50 dark:bg-slate-950 rounded-xl overflow-hidden mb-3 relative flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Brand & Name */}
      <span className="text-[11px] font-bold tracking-wider text-teal-600 uppercase mb-0.5">
        {product.brand}
      </span>
      <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base line-clamp-1 mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
        {product.name}
      </h3>

      {/* Short Description */}
      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 leading-relaxed">
        {product.description}
      </p>

      {/* Bottom Info: Expiry, Price, Button */}
      <div className="mt-auto space-y-3">
        {/* Expiry Date */}
        <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500 font-medium">
          <Calendar className="w-3 h-3 text-gray-300 dark:text-gray-650" />
          <span>Exp: {product.expiry}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-black text-teal-600 dark:text-teal-400">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-gray-450 dark:text-gray-500 line-through">MRP ₹{product.mrp}</span>
          )}
        </div>

        {/* View Details Link */}
        <Link
          href={`/products/${product.id}`}
          className="block w-full text-center bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 hover:bg-teal-600 hover:text-white font-bold text-xs py-2.5 rounded-xl border border-teal-100 dark:border-teal-900/30 hover:border-teal-600 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
