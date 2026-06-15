"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919510818340"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact on WhatsApp"
    >
      <svg className="w-7 h-7 fill-current transition-transform group-hover:rotate-6" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.994 9.994 0 004.779 1.206h.004c5.505 0 9.99-4.477 9.99-9.983A9.99 9.99 0 0012.012 2zm5.835 14.195c-.3.845-1.491 1.543-2.061 1.637-.577.094-1.298.13-2.062-.113a10.87 10.87 0 01-4.885-3.076 11.204 11.204 0 01-2.223-3.807c-.452-1.282-.196-2.254.346-2.822.256-.268.577-.327.769-.327h.547c.18 0 .37.009.527.378.167.393.577 1.408.627 1.509.05.101.083.22.016.353-.067.133-.101.219-.202.338-.101.119-.211.267-.302.368-.101.11-.207.23-.09.431.117.2.52 1.008 1.117 1.543.769.69 1.414.903 1.614 1.004.2.1.317.083.434-.05.117-.133.5-.584.634-.784.133-.2.267-.167.45-.1.18.067 1.15.542 1.347.642.197.1.33.15.378.234.048.083.048.484-.102 1.329z"/>
      </svg>
      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 dark:bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 whitespace-nowrap shadow-lg border border-slate-800 dark:border-slate-800">
        Need Help? Chat on WhatsApp
      </span>
      {/* Pulse effect rings */}
      <span className="absolute w-full h-full rounded-full bg-emerald-500/30 animate-ping -z-10" />
    </a>
  );
}
