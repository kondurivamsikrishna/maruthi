import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { factory, navLinks } from "@/lib/factory-data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brick text-primary-foreground shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="10" width="8" height="6" rx="0.5" />
              <rect x="13" y="10" width="8" height="6" rx="0.5" />
              <rect x="8" y="4" width="8" height="6" rx="0.5" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight text-charcoal">
              {factory.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {factory.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-semibold tracking-wide text-foreground/70 transition-colors hover:text-brick",
                  isActive && "text-brick",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="border-brick/30 text-brick hover:bg-brick/5 hover:text-brick">
            <a href={factory.phoneHref}>
              <Phone className="h-4 w-4" />
              {factory.phone}
            </a>
          </Button>
          <Button asChild className="bg-brick hover:bg-brick-dark">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-secondary",
                    isActive && "bg-secondary text-brick",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 bg-brick hover:bg-brick-dark">
              <a href={factory.phoneHref}>
                <Phone className="h-4 w-4" />
                Call {factory.phone}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
