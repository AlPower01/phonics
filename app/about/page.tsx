import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell max-w-[880px] space-y-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-5xl">About Phonics.org</h1>
          <p className="text-lg">Phonics.org is designed as an editorial, evidence-first guide for parents and teachers. The prototype reflects the ZIP brief’s authority-site IA, internal-linking strategy, and review methodology.</p>
          <div className="surface-card rounded-[24px] p-6">
            <h2 className="mb-3 text-3xl">Editorial standards</h2>
            <p>Every article highlights author credentials, update dates, and practical guidance. Reviews use a shared rubric covering instruction quality, usability, engagement, content depth, and value for money.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
