import { processSteps } from "@/lib/factory-data";

export default function Process() {
  return (
    <div>
      <section className="bg-charcoal py-20 text-white">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            Manufacturing Process
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            From Raw Clay to Finished Brick
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            A carefully controlled, six-stage process ensures every brick that leaves our
            factory meets the same high standard of strength and finish.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block" />
          <div className="space-y-10">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative flex gap-6 sm:pl-0">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brick font-display text-lg font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clay/40 py-16">
        <div className="container grid gap-8 sm:grid-cols-3">
          {[
            { label: "Firing Temperature", value: "1000°C+" },
            { label: "Drying Period", value: "5-7 Days" },
            { label: "Quality Checks per Batch", value: "12 Points" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brick">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
