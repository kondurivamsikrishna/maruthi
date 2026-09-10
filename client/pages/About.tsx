import { CheckCircle2, Factory, ShieldCheck, Truck, Users } from "lucide-react";
import { factory } from "@/lib/factory-data";

const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Bricks Produced Annually", value: "50M+" },
  { label: "Happy Builders & Dealers", value: "1200+" },
  { label: "Skilled Workforce", value: "150+" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "Every batch undergoes strength and size testing before it leaves our yard.",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description: "High-efficiency kilns and mechanised moulding for consistent output at scale.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "Our own fleet ensures bulk orders reach your site safely and on schedule.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated support for builders, contractors, and dealers from enquiry to delivery.",
  },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-charcoal py-24 text-white">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="Brick factory yard"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
        <div className="container relative">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">About Us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Building the Foundations of Tomorrow
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            {factory.name} has been manufacturing dependable bricks and blocks since 1998,
            supplying builders, contractors, and dealers with material they can trust.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
            alt="Factory workers manufacturing bricks"
            className="h-[420px] w-full rounded-xl object-cover shadow-md"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brick">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              From a Single Kiln to a Regional Leader
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              What began as a single family-run kiln in 1998 has grown into one of the
              region's most trusted brick manufacturing units. Over the decades we've
              invested in modern moulding machinery, larger kilns, and a rigorous quality
              programme — while never losing sight of the personal service that built our
              reputation.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today, {factory.name} supplies red clay, fly-ash, and wire-cut bricks in bulk
              to builders, contractors, and dealers, backed by a team that understands
              construction timelines and never compromises on strength.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Family-owned and professionally managed",
                "IS-certified manufacturing standards",
                "Serving residential, commercial & industrial projects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brick" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-clay/40 py-16">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-brick">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brick">Our Values</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            What Drives Us Every Day
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brick/10 text-brick">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold text-charcoal">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
