import Image from "next/image";

export function HeroSection() {
  return (
    <section className="border-b border-[rgba(0,0,0,0.08)] bg-white py-8">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex items-center px-6 py-12 md:px-8 lg:px-10">
              <div className="max-w-[560px] space-y-5">
                <span className="eyebrow">Reading support</span>
                <h1 className="max-w-[14ch] text-4xl leading-tight md:text-5xl">
                  Learn to teach phonics clearly
                </h1>
                <p className="max-w-[54ch] text-base text-ink-700 md:text-lg">
                  Practical guides, reviews, and resources for parents and teachers in a simple prototype layout.
                </p>
              </div>
            </div>
            <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80"
                alt="Parent reading with child in natural light"
                fill
                priority
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
