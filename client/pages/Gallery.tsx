import { galleryImages } from "@/lib/factory-data";

export default function Gallery() {
  return (
    <div>
      <section className="bg-charcoal py-20 text-white">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">Gallery</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            A Look Inside Our Factory
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            From raw material yards to the kiln floor — see how our bricks come to life.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Brick factory gallery"
              className="w-full break-inside-avoid rounded-lg object-cover shadow-sm"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
