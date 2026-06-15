import Link from "next/link";
import { Sparkles, Gift, ShieldAlert } from "lucide-react";

export default function PromotionalBanners() {
  const banners = [
    {
      badge: "Winter Wellness",
      title: "Immunity Boosters & Vitamins",
      desc: "Stock up on Vitamin C, Zinc, and Ayurvedic immunity formulas. Protect your family today.",
      discount: "UP TO 30% OFF",
      gradient: "from-teal-600 to-cyan-700",
      icon: Sparkles,
    },
    {
      badge: "Special Offer",
      title: "Free Diagnostics & Delivery",
      desc: "Order chronic medicines for 30+ days and get free delivery along with a complementary pill box.",
      discount: "FREE SHIPPING",
      gradient: "from-emerald-600 to-teal-800",
      icon: Gift,
    },
  ];

  return (
    <section className="py-12 bg-gray-50/35 border-b border-gray-100/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.map((banner, index) => {
            const Icon = banner.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${banner.gradient} p-8 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between min-h-[200px]`}
              >
                {/* Decorative circle */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />

                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
                    {banner.badge}
                  </span>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight max-w-sm mb-2">
                      {banner.title}
                    </h3>
                    <Icon className="w-8 h-8 text-white/40 shrink-0" />
                  </div>
                  <p className="text-xs md:text-sm text-white/85 max-w-md">
                    {banner.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-[10px] text-white/70 block font-semibold uppercase">Save Big</span>
                    <span className="text-xl font-black">{banner.discount}</span>
                  </div>
                  <Link
                    href="#catalog"
                    className="px-4 py-2 bg-white text-teal-800 rounded-xl text-xs font-extrabold shadow-sm hover:bg-teal-50 transition"
                  >
                    Claim Offer
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
