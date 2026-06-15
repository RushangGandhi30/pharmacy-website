import { ShieldCheck, Truck, Percent, Award } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Genuine Medicines",
      desc: "All our products are sourced directly from certified manufacturers and authorized distributors to guarantee absolute safety and authenticity.",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/30",
    },
    {
      icon: Truck,
      title: "Fast Home Delivery",
      desc: "We package and dispatch your order swiftly, ensuring safe contactless delivery to your doorstep within hours or standard same-day delivery.",
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/30",
    },
    {
      icon: Percent,
      title: "Affordable Prices",
      desc: "Get access to maximum discounts, generic options, and bundle offers that lower your monthly healthcare bills without compromising on quality.",
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/30",
    },
    {
      icon: Award,
      title: "Expert Pharmacists",
      desc: "Our licensed in-house pharmacists inspect every order, verify dates, and are always available online to address your dosage queries.",
      color: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900/30",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-b border-gray-100/60 dark:border-slate-900" id="why-choose-us">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Why Choose MediVibe</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
            We prioritize your health by delivering reliable services and high-quality medical products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-150 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-900 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-xl border mb-4 ${point.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{point.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
