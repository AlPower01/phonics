import Link from "next/link";

import { NewsletterCTA } from "@/components/newsletter-cta";

export function Footer() {
  return (
    <footer className="mt-16 bg-ink-900 text-white">
      <div id="newsletter" className="container-shell py-16">
        <NewsletterCTA />
      </div>
      <div className="container-shell grid gap-10 border-t border-white/10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-6">
          <h3 className="mb-4 text-xl text-white">About Phonics.org</h3>
          <p className="text-paper-100">
            Evidence-based phonics education and resources for parents and teachers.
          </p>
          <div className="space-y-3 text-paper-100">
            <Link href="/about/" className="block hover:text-white">About Us</Link>
            <Link href="/contact/" className="block hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl text-white">Explore</h3>
          <div className="space-y-3 text-paper-100">
            <Link href="/phonics/" className="block hover:text-white">Phonics 101</Link>
            <Link href="/skills/" className="block hover:text-white">Phonics Skills</Link>
            <Link href="/teaching/" className="block hover:text-white">Teaching Phonics</Link>
            <Link href="/home/" className="block hover:text-white">Learning at Home</Link>
            <Link href="/support/" className="block hover:text-white">Struggling Readers</Link>
            <Link href="/science-of-reading/" className="block hover:text-white">Science of Reading</Link>
            <Link href="/reviews/" className="block hover:text-white">App Reviews</Link>
            <Link href="/for-parents/" className="block hover:text-white">For Parents</Link>
            <Link href="/for-teachers/" className="block hover:text-white">For Teachers</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl text-white">Popular Resources</h3>
          <div className="space-y-3 text-paper-100">
            <Link href="/phonics/foundations/" className="block hover:text-white">What is phonics?</Link>
            <Link href="/skills/cvc-words/blending-activities/" className="block hover:text-white">CVC words guide</Link>
            <Link href="/reviews/" className="block hover:text-white">Best phonics apps</Link>
            <Link href="/support/dyslexia/overview-and-essentials/" className="block hover:text-white">Dyslexia &amp; phonics</Link>
            <Link href="/teaching/scope-and-sequence/overview-and-essentials/" className="block hover:text-white">Scope &amp; sequence</Link>
            <Link href="/home/beginning-readers/phonics-routines-for-ages-4-5/" className="block hover:text-white">Teaching at home</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl text-white">Stay Connected</h3>
          <div className="space-y-4">
            <input
              aria-label="Footer email"
              type="email"
              placeholder="Email"
              className="min-h-12 w-full rounded-xl border border-white/15 bg-white px-4 text-base text-ink-900 placeholder:text-ink-500"
            />
            <button className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-base font-semibold text-ink-900">
              Subscribe
            </button>
            <div className="flex gap-4 pt-2 text-2xl text-white/80">
              <span aria-hidden="true">📘</span>
              <span aria-hidden="true">📷</span>
              <span aria-hidden="true">📌</span>
              <span aria-hidden="true">🎥</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-sm text-white/70">
        <div className="container-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Phonics.org</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/search/">Search</Link>
            <Link href="/about/">Privacy</Link>
            <Link href="/about/">Terms</Link>
            <Link href="/blog/">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
