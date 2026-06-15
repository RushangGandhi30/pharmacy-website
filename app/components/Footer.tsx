import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-auto">
      {/* Upper Footer: Links & Info */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Medi<span className="text-teal-400">Vibe</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your premium healthcare marketplace for 100% genuine medicines, supplements, personal care, and diagnostics. Committed to serving your wellness needs.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:text-teal-400 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/categories" className="hover:text-teal-400 transition-colors">Browse Products</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-teal-400 transition-colors">Shop by Category</Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-teal-400 transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Details</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  12, Green Circle Metro Hub, Sector 4, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="tel:+91221234567" className="hover:text-teal-400 transition-colors">
                  +91 22 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="mailto:support@medivibe.com" className="hover:text-teal-400 transition-colors">
                  support@medivibe.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Working Hours</h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Open 24/7</p>
                  <p className="text-xs text-gray-500">Online store & chat support</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white">Physical Store:</p>
                <p className="text-xs text-gray-400">Mon - Sat: 8:00 AM to 10:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyright */}
      <div className="bg-gray-950 py-6 text-center text-xs text-gray-500 border-t border-gray-800/60">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MediVibe Pharmacy. All rights reserved.</p>
          <p className="text-[10px] text-gray-600">
            For demonstration purposes only. Medical items listed are mocks.
          </p>
        </div>
      </div>
    </footer>
  );
}
