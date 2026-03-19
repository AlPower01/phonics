import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { SiteLayout } from "@/components/site-layout";

export default function FAQPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell max-w-[920px] space-y-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="text-5xl">Frequently asked questions</h1>
          <FAQAccordion
            items={[
              { question: "How should I use this site?", answer: "Start with a main section or audience page, then move into curated cluster and article paths. The IA is designed so key topics are reachable in two or three clicks." },
              { question: "What is the difference between parents and teachers pages?", answer: "They are curated entry points, not archives. They frame the same site content differently for each audience." },
              { question: "How are reviews scored?", answer: "Reviews follow a consistent rubric across instruction quality, usability, engagement, content depth, and value for money." },
            ]}
          />
        </div>
      </section>
    </SiteLayout>
  );
}
