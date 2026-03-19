import Link from "next/link";

import { SiteLayout } from "@/components/site-layout";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell max-w-[760px] space-y-6 text-center">
          <span className="eyebrow">Page not found</span>
          <h1 className="text-5xl">This route is outside the current prototype</h1>
          <p className="text-lg">The core IA, templates, and sample content routes from the ZIP are implemented, but not every future CMS page exists yet.</p>
          <div className="flex justify-center gap-3">
            <Link href="/" className="button-primary">Go home</Link>
            <Link href="/search/" className="button-secondary">Search site</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
