import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { factory, navLinks } from "@/lib/factory-data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brick text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="10" width="8" height="6" rx="0.5" />
                <rect x="13" y="10" width="8" height="6" rx="0.5" />
                <rect x="8" y="4" width="8" height="6" rx="0.5" />
              </svg>
            </span>
            <span className="font-display text-lg font-bold text-white">{factory.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Manufacturing dependable, high-strength bricks for builders, contractors,
            and dealers for over 25 years.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-white/60 transition-colors hover:text-terracotta">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Our Products
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>Red Clay Common Bricks</li>
            <li>Fly Ash Bricks</li>
            <li>Wire-Cut Bricks</li>
            <li>Perforated Bricks</li>
            <li>Paver Bricks</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span>{factory.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-terracotta" />
              <a href={factory.phoneHref} className="hover:text-terracotta">{factory.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-terracotta" />
              <a href={`mailto:${factory.email}`} className="hover:text-terracotta">{factory.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container text-center text-xs text-white/50">
          © {new Date().getFullYear()} {factory.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
