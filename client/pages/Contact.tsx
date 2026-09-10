import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { factory } from "@/lib/factory-data";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [factory.phone],
    href: factory.phoneHref,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [factory.phone],
    href: factory.whatsapp,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [factory.email],
    href: `mailto:${factory.email}`,
  },
  {
    icon: MapPin,
    title: "Visit the Factory",
    lines: [factory.address],
    href: factory.mapsLink,
  },
];

export default function Contact() {
  return (
    <div>
      <section className="bg-charcoal py-20 text-white">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">Contact Us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Let's Talk About Your Brick Requirement
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Reach out for pricing, bulk orders, or a site visit — our team responds within
            one business day.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brick/10 text-brick">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-bold text-charcoal">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-muted-foreground">{line}</p>
              ))}
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Card className="border-border/70">
            <CardContent className="p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-charcoal">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form and our team will get back to you with pricing and availability.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" required />
                  <Input placeholder="Phone Number" type="tel" required />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Company / Site Location" />
                <Textarea
                  placeholder="Tell us your brick requirement (type, quantity, delivery location)"
                  rows={5}
                />
                <Button type="submit" className="w-full bg-brick hover:bg-brick-dark">
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="overflow-hidden rounded-xl border border-border/70 shadow-sm">
            <iframe
              title="Factory location on Google Maps"
              src={factory.mapsEmbed}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
