import ProductCard from "./ProductCard";
import { Product } from "../../lib/products";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  limit?: number;
  isLoading?: boolean;
}

export default function ProductGrid({
  products,
  title = "Products Catalog",
  subtitle,
  limit,
  isLoading = false,
}: ProductGridProps) {
  const displayed = limit ? products.slice(0, limit) : products;

  if (isLoading) {
    return (
      <section className="py-10 border-b border-gray-100/60" id="catalog">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                {subtitle}
              </p>
            )}
          </div>

          {/* Skeleton Loaders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: limit || 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-gray-200/60 dark:border-slate-800 p-4 shadow-sm flex flex-col h-full space-y-3 animate-pulse"
              >
                {/* Image skeleton */}
                <div className="w-full h-40 bg-gray-200 dark:bg-slate-800 rounded-xl" />
                {/* Brand skeleton */}
                <div className="h-3 bg-gray-200 rounded w-1/4" />
                {/* Title skeleton */}
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                {/* Description skeleton */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
                {/* Expiry skeleton */}
                <div className="h-2.5 bg-gray-200 rounded w-1/3 mt-auto" />
                {/* Price skeleton */}
                <div className="h-6 bg-gray-200 rounded w-1/2" />
                {/* Button skeleton */}
                <div className="h-9 bg-gray-200 rounded-xl w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (displayed.length === 0) {
    return (
      <section className="py-16 text-center" id="catalog">
        <div className="container mx-auto px-4 max-w-md">
          <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200/50 dark:border-slate-800">
            <p className="text-gray-500 dark:text-gray-300 font-semibold mb-2">No products found</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Try adjusting your search terms or category filter to find what you are looking for.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 border-b border-gray-100/60 scroll-mt-20" id="catalog">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
