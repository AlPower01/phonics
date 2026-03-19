import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell max-w-[820px] space-y-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-5xl">Contact</h1>
          <p className="text-lg">Use this prototype contact page for editorial questions, partnership enquiries, correction requests, or feedback on the information architecture.</p>
          <form className="surface-card grid gap-4 rounded-[24px] p-6">
            <input className="min-h-12 rounded-2xl border border-[rgba(16,36,63,0.12)] bg-white px-4" placeholder="Your name" />
            <input className="min-h-12 rounded-2xl border border-[rgba(16,36,63,0.12)] bg-white px-4" placeholder="Email" />
            <textarea className="min-h-40 rounded-2xl border border-[rgba(16,36,63,0.12)] bg-white px-4 py-3" placeholder="How can we help?" />
            <button className="button-primary w-full md:w-fit">Send message</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
