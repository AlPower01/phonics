import Link from "next/link";
import { notFound } from "next/navigation";

import { AudienceCallout } from "@/components/audience-callout";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { SiteLayout } from "@/components/site-layout";
import { TOC } from "@/components/toc";
import { getClustersBySilo, getSilo, silos, type SiloId } from "@/data/site";

const primarySectionLinks = [
  { id: "phonics", label: "Phonics 101", href: "/phonics/", description: "Core concepts, definitions, and instructional foundations." },
  { id: "skills", label: "Phonics Skills", href: "/skills/", description: "Skill-specific guides from early decoding through advanced patterns." },
  { id: "parents", label: "For Parents", href: "/for-parents/", description: "Curated article pathways and age-based support for families." },
  { id: "teachers", label: "For Teachers", href: "/for-teachers/", description: "Curated article pathways and planning support for educators." },
  { id: "support", label: "Struggling Readers", href: "/support/", description: "Intervention, dyslexia-informed support, and next-step guidance." },
  { id: "science-of-reading", label: "Science of Reading", href: "/science-of-reading/", description: "Research translated into practical reading guidance." },
];

const pillarContent: Record<
  SiloId,
  {
    overviewTitle: string;
    overview: string[];
    parentBody: string;
    teacherBody: string;
    faqs: { question: string; answer: string }[];
  }
> = {
  phonics: {
    overviewTitle: "What Is Phonics 101?",
    overview: [
      "Phonics 101 is the orientation layer for the rest of the site. It explains the concepts behind explicit phonics instruction, the relationship between phonemic awareness and print, and the principles that make decoding instruction coherent over time.",
      "Readers land here when they need the big picture before choosing a narrower topic. The sections below introduce the most important foundation topics, then send users to the relevant cluster pages for detailed guidance and examples.",
    ],
    parentBody:
      "Use this section to understand the language your child’s school is using. It helps you support practice at home without needing to turn yourself into the teacher.",
    teacherBody:
      "Use this section to align classroom decisions to the core ideas behind systematic instruction, especially when you need a concise rationale for sequencing, decodables, and explicit modeling.",
    faqs: [
      {
        question: "What is the difference between phonics and phonemic awareness?",
        answer:
          "Phonemic awareness is about hearing and manipulating sounds in spoken words. Phonics connects those sounds to letters and spelling patterns in print.",
      },
      {
        question: "Why start with a Phonics 101 section?",
        answer:
          "Because many readers need the core concepts before choosing a narrower topic. This pillar gives them the context for later skill, teaching, and support pages.",
      },
      {
        question: "Do parents need to master all of this before helping at home?",
        answer:
          "No. Parents mainly need clear, practical explanations so they can reinforce school-taught patterns and understand the advice they are seeing across the site.",
      },
    ],
  },
  skills: {
    overviewTitle: "What Are Phonic Skills?",
    overview: [
      "Phonic skills are the specific decoding and spelling abilities children build over time, from first letter-sound correspondences through more complex patterns like blends, digraphs, vowel teams, and syllable types.",
      "This pillar helps readers understand how individual skills fit together developmentally. Each section below introduces a skill area, then links through to a dedicated cluster page where the teaching sequence and child articles live.",
    ],
    parentBody:
      "Use these pages to see what concrete skill your child is working on right now, then choose just one or two matching practice ideas instead of jumping across too many patterns at once.",
    teacherBody:
      "Use this section to plan instruction cumulatively. Each skill area should connect to explicit modeling, controlled practice, dictation, and decodable reading rather than existing as an isolated worksheet topic.",
    faqs: [
      {
        question: "What order should phonic skills be taught?",
        answer:
          "They should usually move from simpler, high-utility patterns toward more complex ones, while keeping cumulative review in place so older skills stay secure.",
      },
      {
        question: "Should children master one skill completely before seeing another?",
        answer:
          "Not perfectly, but they do need enough accuracy and review to use a skill productively before too many new patterns are introduced.",
      },
      {
        question: "Why are skills separated into cluster pages?",
        answer:
          "Because readers often need to go deep on one specific pattern such as CVC words or consonant blends without losing the larger pathway back to the pillar.",
      },
    ],
  },
  teaching: {
    overviewTitle: "What Is Teaching Phonics?",
    overview: [
      "Teaching Phonics focuses on implementation: lesson design, pacing, grouping, assessment, review, and the classroom moves that turn research into actual daily instruction.",
      "This pillar is for educators who already know the broad case for phonics and now need help organizing instruction. Each cluster below covers one implementation area and links through to more detailed classroom-facing articles.",
    ],
    parentBody:
      "Parents do not need to replicate classroom instruction at home. This section can still help you understand why your child’s teacher is using a particular routine, pace, or decodable text.",
    teacherBody:
      "Use this section to tighten classroom execution. The focus here is on routines that are explicit, cumulative, and practical enough to repeat across a week without losing instructional clarity.",
    faqs: [
      {
        question: "How long should a phonics lesson be?",
        answer:
          "That depends on the setting and age group, but the main issue is not the exact minute count. Strong lessons protect review, explicit teaching, guided practice, and application.",
      },
      {
        question: "How often should phonics be taught?",
        answer:
          "For beginning readers, frequent and consistent instruction matters more than occasional longer lessons. Daily or near-daily contact is usually more effective.",
      },
      {
        question: "What makes phonics instruction systematic?",
        answer:
          "Systematic instruction follows a planned sequence, revisits taught content regularly, and gives students guided opportunities to apply patterns in reading and spelling.",
      },
    ],
  },
  home: {
    overviewTitle: "What Is Learning at Home?",
    overview: [
      "Learning at Home translates phonics guidance into realistic routines for families. It focuses on what parents can reinforce, how to keep practice short and productive, and how to match home support to a child’s current stage.",
      "This pillar is not a generic archive of activities. It is meant to help parents choose the right next move for their child, then click into a narrower cluster or article for age-appropriate support.",
    ],
    parentBody:
      "Stay narrow and repeatable. A few minutes of aligned, successful practice at home will usually do more than trying to cover a large number of disconnected activities.",
    teacherBody:
      "Use these pages when you want to give families clear, low-burden next steps that reinforce classroom learning without asking them to manage a second curriculum at home.",
    faqs: [
      {
        question: "How much phonics practice should happen at home?",
        answer:
          "Usually just a few minutes at a time. Consistency matters more than long sessions, especially for younger children or readers who tire easily.",
      },
      {
        question: "Should home practice introduce new patterns before school does?",
        answer:
          "Usually no. Home support works best when it reinforces what the child is already being taught, rather than creating competing sequences.",
      },
      {
        question: "What if my child resists reading practice at home?",
        answer:
          "Reduce the length, simplify the task, and end on a success. Short, calm, repeatable routines are more useful than pushing through frustration.",
      },
    ],
  },
  support: {
    overviewTitle: "What Is Struggling Readers Support?",
    overview: [
      "Struggling Readers brings together the pages for readers who need more than strong core instruction alone. It covers intervention, progress monitoring, dyslexia-informed teaching, and decision points for when support should intensify.",
      "This pillar helps parents and teachers recognize patterns early and respond clearly. The linked cluster pages go deeper into specific support routes so users can choose the next step that matches the reader in front of them.",
    ],
    parentBody:
      "Use this section when progress feels slower than expected and you need clear signs, questions, and support options rather than vague reassurance or panic.",
    teacherBody:
      "Use this section to calibrate intensity. It is designed to help you respond early, increase explicitness, and monitor whether a learner is actually benefiting from the support being provided.",
    faqs: [
      {
        question: "When should parents worry about reading progress?",
        answer:
          "Concern is warranted when difficulty is persistent across time and settings, especially after a child has had regular instruction and still struggles with core decoding behaviors.",
      },
      {
        question: "Does slower progress always mean dyslexia?",
        answer:
          "No. Dyslexia is one possible explanation, but instructional history, attendance, language background, and other factors also matter. The point is to investigate clearly rather than guess.",
      },
      {
        question: "What should happen first when a student is struggling?",
        answer:
          "The first step is to tighten instruction and gather better information. More explicit review, targeted practice, and closer progress monitoring often reveal what the learner needs next.",
      },
    ],
  },
  reviews: {
    overviewTitle: "App Reviews",
    overview: [],
    parentBody: "",
    teacherBody: "",
    faqs: [],
  },
  "science-of-reading": {
    overviewTitle: "What Is Science of Reading?",
    overview: [
      "Science of Reading collects the research-facing content on the site. It explains what the evidence base says about decoding, language, instruction, intervention, and why systematic phonics remains such a central part of early reading success.",
      "This pillar is meant to translate research into usable meaning, not to function like a journal archive. Each linked cluster page narrows the conversation into a clearer subtopic and then hands readers off to focused articles.",
    ],
    parentBody:
      "Parents do not need to read the research literature directly. This section exists to turn the evidence into plain-language explanations that help you understand why certain teaching choices matter.",
    teacherBody:
      "Use this section when you need a cleaner bridge between evidence and practice. The goal is to support classroom decision-making without drowning the reader in academic language.",
    faqs: [
      {
        question: "Is the science of reading just another term for phonics?",
        answer:
          "No. Phonics is one major part of it, but the science of reading also includes findings about language comprehension, fluency, assessment, intervention, and broader reading development.",
      },
      {
        question: "Why does this section matter to parents?",
        answer:
          "Because it helps explain why explicit instruction, decodable practice, and cumulative review show up so often in effective reading support.",
      },
      {
        question: "How should teachers use research pages like these?",
        answer:
          "As translation tools. The point is to connect evidence to planning, instruction, and intervention decisions rather than treating research as separate from daily practice.",
      },
    ],
  },
};

export default async function PillarPage({
  params,
}: {
  params: Promise<{ silo: string }>;
}) {
  const { silo } = await params;
  const siloData = getSilo(silo);

  if (!siloData || silo === "reviews") notFound();

  const relatedClusters = getClustersBySilo(siloData.id);
  const content = pillarContent[siloData.id];
  const tocItems = [
    { id: "overview", title: `What is ${siloData.label}?` },
    ...relatedClusters.slice(0, 6).map((cluster) => ({
      id: `cluster-${cluster.slug}`,
      title: cluster.title,
    })),
    { id: "faq", title: "FAQ" },
  ];

  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: siloData.label }]} />
          <div className="space-y-8">
            <section className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-white p-8 text-center md:p-10">
              <div className="space-y-4">
                <span className="eyebrow">{siloData.label}</span>
                <h1 className="mx-auto w-full max-w-[80%] text-5xl text-balance">{siloData.overviewTitle}</h1>
              </div>
            </section>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-8">
                <section id="overview" className="surface-card rounded-[28px] p-6 md:p-8">
                  <h2 className="mb-4 text-3xl">{content.overviewTitle}</h2>
                  <div className="space-y-4 leading-8">
                    {content.overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {relatedClusters.map((cluster, index) => (
                  <section key={cluster.slug} id={`cluster-${cluster.slug}`} className="surface-card rounded-[28px] p-6 md:p-8">
                    <h2 className="mb-4 text-3xl">
                      {cluster.title}
                      {index === 0 ? " — A Key Starting Point" : ""}
                    </h2>
                    <div className="space-y-4 leading-8">
                      <p>
                        {cluster.title} is one of the core subtopics inside {siloData.label.toLowerCase()}. This section gives readers a quick orientation before sending them into the fuller topic page.
                      </p>
                      <p>
                        {cluster.summary} In the finished site, this area would expand with more examples, supporting explanations, and internal links, but the main purpose on the pillar page is to help users choose the right next topic.
                      </p>
                    </div>
                    <Link href={cluster.overviewUrl} className="mt-6 inline-flex text-sm font-semibold text-ink-900 underline underline-offset-4">
                      Go to {cluster.title}
                    </Link>
                  </section>
                ))}

                <section className="surface-card rounded-[28px] p-6 md:p-8">
                  <h2 className="mb-5 text-3xl">
                    {siloData.id === "home" ? "How to Use This Guidance at Home" : `How to Use ${siloData.label}`}
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <AudienceCallout tone="parent" title="For parents" body={content.parentBody} />
                    <AudienceCallout tone="teacher" title="For teachers" body={content.teacherBody} />
                  </div>
                </section>
                <section id="faq" className="space-y-5">
                  <h2 className="text-4xl">Frequently Asked Questions</h2>
                  <FAQAccordion items={content.faqs} />
                </section>

                <section className="space-y-5">
                  <h2 className="text-4xl">Related Sections</h2>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {primarySectionLinks.filter((item) => item.id !== siloData.id).slice(0, 3).map((item) => (
                      <Link key={item.id} href={item.href} className="surface-card rounded-[24px] p-6 text-center">
                        <div className="text-lg font-semibold text-ink-900">{item.label}</div>
                        <p className="mt-3">{item.description}</p>
                        <div className="mt-4 text-sm font-semibold text-ink-900">Explore</div>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>

              <div className="hidden lg:block">
                <TOC items={tocItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
