import { MessageCircle, Ruler, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { factory, products } from "@/lib/factory-data";

export default function Products() {
  return (
    <div>
      <section className="bg-charcoal py-20 text-white">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            Our Products
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Bricks &amp; Blocks for Every Build
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Explore our full range of clay, fly-ash, and concrete products — each
            manufactured to strict quality standards and available for bulk order.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden border-border/70 py-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-charcoal">{product.name}</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                    <div>
                      <p className="font-semibold text-foreground/80">Size / Specifications</p>
                      <p className="text-muted-foreground">{product.size}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                    <div>
                      <p className="font-semibold text-foreground/80">Quality</p>
                      <p className="text-muted-foreground">{product.quality}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
                    <div>
                      <p className="font-semibold text-foreground/80">Uses</p>
                      <p className="text-muted-foreground">{product.uses}</p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="mt-6 w-full bg-brick hover:bg-brick-dark"
                >
                  <a
                    href={`${factory.whatsapp}?text=${encodeURIComponent(
                      `Hi, I would like to enquire about ${product.name}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
