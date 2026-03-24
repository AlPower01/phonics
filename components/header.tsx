import Link from "next/link";
import { Search } from "lucide-react";

import { getClustersBySilo, silos } from "@/data/site";

const siloMap = Object.fromEntries(silos.map((silo) => [silo.id, silo]));
const aboutPhonicsLinks = [
  {
    label: "Phonics 101",
    href: "/phonics/",
    description: "Core concepts, definitions, and instructional foundations.",
  },
  {
    label: "Science of Reading",
    href: "/science-of-reading/",
    description: "Research translated into practical phonics guidance.",
  },
  {
    label: "Phonics Skills",
    href: "/skills/",
    description: "Skill-by-skill guides from early decoding to advanced patterns.",
  },
  {
    label: "Struggling Readers",
    href: "/support/",
    description: "Intervention, dyslexia-informed support, and next steps.",
  },
] as const;

const aboutPhonicsGroups = [
  { links: aboutPhonicsLinks.slice(0, 2) },
  { links: aboutPhonicsLinks.slice(2, 4) },
];

const megaNavItem = {
  key: "about-phonics",
  label: "About Phonics",
  href: "/phonics/",
  title: "About Phonics",
  intro: "Start with the core phonics knowledge sections, then move into audience pathways and reviews.",
  groups: aboutPhonicsGroups,
  featured: siloMap["phonics"].featured,
} as const;

const plainNavItems = [
  { key: "reviews", label: "App Reviews", href: "/reviews/" },
  { key: "teachers", label: "For Teachers", href: "/for-teachers/" },
  { key: "parents", label: "For Parents", href: "/for-parents/" },
] as const;

function DesktopMegaNav() {
  return (
    <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Primary">
      {plainNavItems.map((item) => (
        <div key={item.key} className="flex items-center">
          {item.key === "teachers" ? (
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
      <div key={megaNavItem.key} className="group relative">
        <Link
          href={megaNavItem.href}
          className="inline-flex min-h-11 items-center border-b-2 border-transparent py-3 text-[13px] font-bold tracking-[0.01em] transition hover:border-ink-900 hover:text-ink-900 xl:text-sm"
        >
          {megaNavItem.label}
        </Link>

        <div className="pointer-events-none fixed left-1/2 top-16 z-50 hidden w-[min(1200px,calc(100vw-40px))] -translate-x-1/2 pt-4 group-hover:block group-focus-within:block">
          <div className="pointer-events-auto grid grid-cols-[220px_1fr_1fr_260px] gap-5 rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white p-5 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
            <div className="rounded-[18px] border border-[rgba(0,0,0,0.06)] bg-paper-100 p-4">
              <h3 className="mb-3 text-xl">{megaNavItem.title}</h3>
              <p className="mb-4 text-sm text-ink-700">{megaNavItem.intro}</p>
              <Link href={megaNavItem.href} className="button-tertiary">
                Start here
              </Link>
            </div>

            {megaNavItem.groups.map((group, index) => (
              <div key={index} className="space-y-2">
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
                src={megaNavItem.featured.image}
                alt={megaNavItem.featured.title}
                className="aspect-[4/3] w-full object-cover grayscale"
              />
              <div className="space-y-3 p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-500">
                  Featured
                </div>
                <div className="text-lg font-semibold text-ink-900">{megaNavItem.featured.title}</div>
                <p className="text-sm text-ink-700">{megaNavItem.featured.excerpt}</p>
                <Link href={megaNavItem.featured.href} className="button-tertiary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          {[plainNavItems[0], megaNavItem, plainNavItems[1], plainNavItems[2]].map((item) => (
            <details key={item.key} className="rounded-[16px] border border-[rgba(0,0,0,0.06)] bg-paper-100 p-3">
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-900">
                {"key" in item && item.key === "reviews" ? "★ " : ""}{item.label}
              </summary>
              <div className="mt-3 space-y-3">
                <Link href={item.href} className="block text-sm font-semibold text-ink-900">
                  {"groups" in item ? "Start here" : "Open"}
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
