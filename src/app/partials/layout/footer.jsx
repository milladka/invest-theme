
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">VC Launchpad</h2>
          <p className="text-sm text-gray-400">
            Empowering visionary founders to build the future. Funding, mentorship, and support from day one.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="/apply" className="hover:text-white transition">Apply</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1" />
              <span>123 Innovation Blvd, San Francisco, CA</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span>hello@vclaunchpad.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span>+1 (123) 456-7890</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} VC Launchpad. All rights reserved.
      </div>
    </footer>
  );
}