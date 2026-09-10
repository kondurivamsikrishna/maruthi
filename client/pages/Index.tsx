import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  factory,
  products,
  processSteps,
  galleryImages,
  whyChooseUs,
} from "@/lib/factory-data";

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1920&auto=format&fit=crop"
          alt="Stacks of freshly manufactured red clay bricks at the factory"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/30" />
        <div className="container relative py-28 md:py-36">
          <p className="mb-4 inline-block rounded-full border border-terracotta/40 bg-terracotta/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta">
            Manufacturing Since 1998
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Bricks Built to Last, <span className="text-terracotta">Strength</span> You Can Trust
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {factory.name} manufactures premium clay and fly-ash bricks for builders,
            contractors, and dealers — engineered for durability and delivered on time,
            every time.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brick hover:bg-brick-dark">
              <Link to="/products">
                View Our Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <a href={factory.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <a href={factory.phoneHref}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brick">
              About {factory.name}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              A trusted brick manufacturer for over 25 years
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Located in the heart of Telangana's industrial belt, {factory.name} produces
              high-quality, IS-certified bricks and blocks at scale. From table-moulded clay
              bricks to eco-friendly fly-ash alternatives, every product leaves our kilns
              tested for strength, size, and consistency — ready for your next project.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "IS-certified quality control on every batch",
                "In-house kilns for consistent firing and colour",
                "Bulk supply for builders, contractors & dealers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brick" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-brick hover:bg-brick-dark">
              <Link to="/about">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1590986197522-c1c3e3d9c1b0?q=80&w=800&auto=format&fit=crop"
              alt="Brick factory production line"
              className="h-56 w-full rounded-lg object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop"
              alt="Freshly fired bricks stacked outdoors"
              className="mt-8 h-56 w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Main products */}
      <section className="bg-clay/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brick">
              What We Manufacture
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Our Main Brick Products
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border/70 py-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg font-bold text-charcoal">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.size}</p>
                  <Link
                    to="/products"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brick hover:text-brick-dark"
                  >
                    Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brick">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Quality, Reliability, and On-Time Delivery
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brick/10 text-brick">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing process */}
      <section className="bg-charcoal py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
              From Clay to Kiln
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Our Manufacturing Process
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.slice(0, 6).map((step, index) => (
              <div key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl font-bold text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
              <Link to="/process">
                See Full Process <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Factory images */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brick">Inside the Factory</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Our Factory in Action
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.slice(0, 4).map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Brick factory"
              className="aspect-square w-full rounded-lg object-cover shadow-sm"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-brick/30 text-brick hover:bg-brick/5 hover:text-brick">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Enquiry section */}
      <section className="bg-clay/40 py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brick">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Need Bricks for Your Project?
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Send us your requirements — quantity, brick type, and delivery location — and
              our team will get back to you with the best bulk pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1ea952]">
                <a href={factory.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" className="bg-brick hover:bg-brick-dark">
                <a href={factory.phoneHref}>
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
          <Card className="border-border/70">
            <CardContent className="p-6 sm:p-8">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" required />
                  <Input placeholder="Phone Number" type="tel" required />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Textarea placeholder="Tell us your brick requirement (type, quantity, location)" rows={4} />
                <Button type="submit" className="w-full bg-brick hover:bg-brick-dark">
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
