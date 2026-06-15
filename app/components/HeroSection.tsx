import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Percent } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-teal-100/40 to-emerald-50 dark:from-slate-950 dark:via-teal-950/10 dark:to-slate-950 py-16 md:py-24 border-b border-teal-100/50 dark:border-slate-900">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-200/20 dark:bg-teal-900/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-200/20 dark:bg-emerald-900/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Percent className="w-4 h-4" /> Save up to 25% on your first order
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Your Premium Neighborhood <span className="text-teal-600">Pharmacy</span>, Online.
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Get genuine medicines, daily wellness supplements, skin care, baby care, and healthcare devices delivered directly to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Browse Medicines <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#why-choose-us"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-250 font-medium px-6 py-3 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-teal-100/60 dark:border-slate-800 max-w-lg">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-teal-100/80 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-gray-150">100% Genuine</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Quality Assured</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-teal-100/80 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-gray-150">Fast Delivery</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">At Your Doorstep</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-teal-100/80 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-gray-150">Best Prices</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Huge Discounts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side illustration / placeholder banner */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 p-8 text-white flex flex-col justify-between shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              {/* Abstract layout element inside banner */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Wellness Special
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Comprehensive Diabetes & Heart Care Kits
                </h3>
                <p className="text-sm text-teal-100">
                  Everything you need to monitor and manage your health metrics daily. Recommended by top practitioners.
                </p>
              </div>

              <div className="mt-8 flex justify-between items-end">
                <div>
                  <p className="text-xs text-teal-200">Starting from</p>
                  <p className="text-3xl font-black">₹499</p>
                </div>
                <Link
                  href="/categories"
                  className="px-4 py-2 bg-white text-teal-700 rounded-lg text-sm font-bold shadow hover:bg-teal-50 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
