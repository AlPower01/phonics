import Link from "next/link";
import { Search } from "lucide-react";

import { getClustersBySilo, silos } from "@/data/site";

const siloMap = Object.fromEntries(silos.map((silo) => [silo.id, silo]));

function buildClusterGroups(siloId: "phonics" | "skills" | "support") {
  const orderedClusters = getClustersBySilo(siloId);
  const midpoint = Math.ceil(orderedClusters.length / 2);
  const first = orderedClusters.slice(0, midpoint);
  const second = orderedClusters.slice(midpoint);

  return [
    {
      heading: "Cluster Pages",
      links: first.map((cluster) => ({
        label: cluster.title,
        href: cluster.overviewUrl,
        description: cluster.summary,
      })),
    },
    {
      heading: "More Topics",
      links: second.map((cluster) => ({
        label: cluster.title,
        href: cluster.overviewUrl,
        description: cluster.summary,
      })),
    },
  ].filter((group) => group.links.length > 0);
}

const megaNavItems = [
  {
    key: "phonics",
    label: "Phonics 101",
    href: "/phonics/",
    title: "Phonics 101",
    intro: "Core concepts, definitions, and the research-backed foundations behind phonics instruction.",
    groups: buildClusterGroups("phonics"),
    featured: siloMap["phonics"].featured,
  },
  {
    key: "skills",
    label: "Phonics Skills",
    href: "/skills/",
    title: "Skills",
    intro: "Browse decoding skills from letter-sound knowledge through advanced vowel and syllable patterns.",
    groups: buildClusterGroups("skills"),
    featured: siloMap["skills"].featured,
  },
  {
    key: "support",
    label: "Struggling Readers",
    href: "/support/",
    title: "Support",
    intro: "Intervention, dyslexia-informed support, and practical next steps for struggling readers.",
    groups: buildClusterGroups("support"),
    featured: siloMap["support"].featured,
  },
] as const;

const plainNavItems = [
  { key: "parents", label: "For Parents", href: "/for-parents/" },
  { key: "teachers", label: "For Teachers", href: "/for-teachers/" },
  { key: "reviews", label: "App Reviews", href: "/reviews/" },
] as const;

function DesktopMegaNav() {
  return (
    <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Primary">
      {megaNavItems.slice(0, 3).map((item) => (
        <div key={item.key} className="group relative">
          <Link
            href={item.href}
            className="inline-flex min-h-11 items-center border-b-2 border-transparent py-3 text-[13px] font-bold tracking-[0.01em] transition hover:border-ink-900 hover:text-ink-900 xl:text-sm"
          >
            {item.label}
          </Link>

          <div className="pointer-events-none fixed left-1/2 top-16 z-50 hidden w-[min(1200px,calc(100vw-40px))] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
            <div className="pointer-events-auto grid grid-cols-[220px_1fr_1fr_260px] gap-5 rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
              <div className="rounded-[18px] border border-[rgba(0,0,0,0.06)] bg-paper-100 p-4">
                <h3 className="mb-3 text-xl">{item.title}</h3>
                <p className="mb-4 text-sm text-ink-700">{item.intro}</p>
                <Link href={item.href} className="button-tertiary">
                  Overview
                </Link>
              </div>

              {item.groups.map((group) => (
                <div key={group.heading} className="space-y-2">
                  <div className="space-y-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-[16px] px-3 py-3 transition hover:bg-paper-100"
                      >
                        <div className="font-semibold text-ink-900">{link.label}</div>
                        <div className="mt-1 text-sm text-ink-500">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-[18px] border border-[rgba(0,0,0,0.06)] bg-paper-100">
                <img
                  src={item.featured.image}
                  alt={item.featured.title}
                  className="aspect-[4/3] w-full object-cover grayscale"
                />
                <div className="space-y-3 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                    Featured
                  </div>
                  <div className="text-lg font-semibold text-ink-900">{item.featured.title}</div>
                  <p className="text-sm text-ink-700">{item.featured.excerpt}</p>
                  <Link href={item.featured.href} className="button-tertiary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {plainNavItems.map((item) => (
        <div key={item.key} className="flex items-center">
          {item.key === "reviews" ? (
            <span
              aria-hidden="true"
              className="mr-4 h-5 w-px bg-[rgba(0,0,0,0.12)]"
            />
          ) : null}
          <Link
            href={item.href}
            className="inline-flex min-h-11 items-center border-b-2 border-transparent py-3 text-[13px] font-bold tracking-[0.01em] transition hover:border-ink-900 hover:text-ink-900 xl:text-sm"
          >
            {item.key === "reviews" ? (
              <span aria-hidden="true" className="mr-2 text-sm text-ink-900">
                ★
              </span>
            ) : null}
            {item.label}
          </Link>
        </div>
      ))}
      {megaNavItems.slice(3).map((item) => (
        <div key={item.key} className="group relative">
          <Link
            href={item.href}
            className="inline-flex min-h-11 items-center border-b-2 border-transparent py-3 text-[13px] font-bold tracking-[0.01em] transition hover:border-ink-900 hover:text-ink-900 xl:text-sm"
          >
            {item.label}
          </Link>

          <div className="pointer-events-none fixed left-1/2 top-16 z-50 hidden w-[min(1200px,calc(100vw-40px))] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
            <div className="pointer-events-auto grid grid-cols-[220px_1fr_1fr_260px] gap-5 rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
              <div className="rounded-[18px] border border-[rgba(0,0,0,0.06)] bg-paper-100 p-4">
                <h3 className="mb-3 text-xl">{item.title}</h3>
                <p className="mb-4 text-sm text-ink-700">{item.intro}</p>
                <Link href={item.href} className="button-tertiary">
                  Overview
                </Link>
              </div>

              {item.groups.map((group) => (
                <div key={group.heading} className="space-y-2">
                  <div className="space-y-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-[16px] px-3 py-3 transition hover:bg-paper-100"
                      >
                        <div className="font-semibold text-ink-900">{link.label}</div>
                        <div className="mt-1 text-sm text-ink-500">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-[18px] border border-[rgba(0,0,0,0.06)] bg-paper-100">
                <img
                  src={item.featured.image}
                  alt={item.featured.title}
                  className="aspect-[4/3] w-full object-cover grayscale"
                />
                <div className="space-y-3 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                    Featured
                  </div>
                  <div className="text-lg font-semibold text-ink-900">{item.featured.title}</div>
                  <p className="text-sm text-ink-700">{item.featured.excerpt}</p>
                  <Link href={item.featured.href} className="button-tertiary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}

function MobileNav() {
  return (
    <details className="relative lg:hidden">
      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center rounded-2xl border border-[rgba(0,0,0,0.14)] bg-white px-4 py-2 text-sm font-bold text-ink-900">
        Menu
      </summary>
      <div className="absolute right-0 top-full z-50 mt-3 w-[min(92vw,360px)] rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
        <div className="space-y-3">
          {[...megaNavItems.slice(0, 3), ...plainNavItems, ...megaNavItems.slice(3)].map((item) => (
            <details key={item.key} className="rounded-[16px] border border-[rgba(0,0,0,0.06)] bg-paper-100 p-3">
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-900">
                {item.label}
              </summary>
              <div className="mt-3 space-y-3">
                <Link href={item.href} className="block text-sm font-semibold text-ink-900">
                  Overview
                </Link>
                {"groups" in item ? item.groups.flatMap((group) => group.links).map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-ink-700">
                    {link.label}
                  </Link>
                )) : null}
              </div>
            </details>
          ))}
          <Link
            href="/search/"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-[rgba(0,0,0,0.14)] bg-white px-4 py-2 text-sm font-bold text-ink-900"
          >
            Search
          </Link>
        </div>
      </div>
    </details>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.08)] bg-white">
      <div className="container-shell flex min-h-16 items-center justify-between gap-3 xl:gap-4">
        <Link href="/" className="text-[1.65rem] font-semibold text-ink-900">
          Phonics.org
        </Link>

        <div className="ml-auto flex items-center gap-3 xl:gap-4">
          <DesktopMegaNav />
          <Link
            href="/search/"
            aria-label="Search"
            className="hidden size-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] bg-white lg:inline-flex"
          >
            <Search className="size-4" />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
