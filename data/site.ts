export type SiloId =
  | "phonics"
  | "skills"
  | "teaching"
  | "home"
  | "support"
  | "reviews"
  | "science-of-reading";

export type Silo = {
  id: SiloId;
  label: string;
  shortLabel: string;
  href: `/${string}/`;
  description: string;
  accent: string;
  icon: string;
  overviewTitle: string;
  audience: "all" | "parent" | "teacher";
  menuIntro: string;
  menuGroups: { heading: string; links: { label: string; href: string; description: string }[] }[];
  featured: { title: string; href: string; excerpt: string; image: string };
};

export type ClusterPage = {
  silo: SiloId;
  slug: string;
  title: string;
  summary: string;
  audience: ("parent" | "teacher")[];
  overviewUrl: string;
};

export type Article = {
  silo: SiloId;
  cluster: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  audience: ("parent" | "teacher")[];
  readTime: string;
  published: string;
  updated: string;
  author: { name: string; role: string };
  image: string;
  keyAnswer: string;
  takeaways: string[];
  sections: { id: string; title: string; paragraphs: string[] }[];
};

export type Review = {
  slug: string;
  name: string;
  summary: string;
  ages: string;
  platforms: string[];
  price: string;
  overall: number;
  badge: string;
  bestFor: string;
  updated: string;
  reviewer: string;
  image: string;
  breakdown: { label: string; score: number }[];
  pros: string[];
  cons: string[];
  verdict: string;
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  definition: string;
  content: string[];
  related: string[];
  learnMore: string[];
};

function articleImage(seed: string) {
  return `https://picsum.photos/seed/${seed}/960/720?grayscale`;
}

export const silos: Silo[] = [
  {
    id: "phonics",
    label: "Phonics 101",
    shortLabel: "Phonics 101",
    href: "/phonics/",
    description: "Core concepts, sequencing, and the instructional foundations behind effective phonics teaching.",
    accent: "#71717a",
    icon: "BookOpen",
    overviewTitle: "A complete guide to phonics instruction",
    audience: "all",
    menuIntro: "Build the core knowledge behind systematic, explicit phonics instruction.",
    menuGroups: [
      {
        heading: "Start Here",
        links: [
          { label: "What is phonics?", href: "/phonics/foundations/", description: "Definitions, purpose, and common misconceptions" },
          { label: "Phonemic awareness", href: "/phonics/phonemic-awareness/", description: "Why sound awareness matters before print" },
          { label: "Systematic instruction", href: "/phonics/systematic-instruction/", description: "Sequence, explicit modeling, and review" },
          { label: "Decodable texts", href: "/phonics/decodable-texts/", description: "How to match text to taught patterns" },
        ],
      },
      {
        heading: "Deep Dives",
        links: [
          { label: "Scope and sequence", href: "/teaching/scope-and-sequence/", description: "When to teach each pattern" },
          { label: "Science of reading", href: "/science-of-reading/reading-research/", description: "Evidence translated for practice" },
          { label: "Glossary", href: "/glossary/", description: "Clear definitions for key terms" },
        ],
      },
    ],
    featured: {
      title: "Why systematic phonics works",
      href: "/science-of-reading/reading-research/why-systematic-phonics-works/",
      excerpt: "A research-backed explanation of why explicit instruction drives more reliable reading outcomes.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    },
  },
  {
    id: "skills",
    label: "Phonics Skills",
    shortLabel: "Skills",
    href: "/skills/",
    description: "Individual decoding skills from letter sounds and CVC words through vowel teams and syllable types.",
    accent: "#71717a",
    icon: "SpellCheck",
    overviewTitle: "Master every foundational and advanced phonics skill",
    audience: "all",
    menuIntro: "Move from first sound-symbol connections to more complex spelling patterns.",
    menuGroups: [
      {
        heading: "Foundational Skills",
        links: [
          { label: "Letter-sound knowledge", href: "/skills/letter-sounds/", description: "Connect letters to their sounds" },
          { label: "CVC words", href: "/skills/cvc-words/", description: "Early decoding with short-vowel words" },
          { label: "Consonant blends", href: "/skills/consonant-blends/", description: "Teach adjacent sounds smoothly" },
          { label: "Digraphs", href: "/skills/digraphs/", description: "sh, ch, th, wh, and ph" },
        ],
      },
      {
        heading: "Advanced Skills",
        links: [
          { label: "Long vowels", href: "/skills/long-vowels/", description: "Silent e and open syllable patterns" },
          { label: "Vowel teams", href: "/skills/vowel-teams/", description: "ai, ee, oa, ue, and beyond" },
          { label: "R-controlled vowels", href: "/skills/r-controlled-vowels/", description: "ar, er, ir, or, ur" },
          { label: "Syllable types", href: "/skills/syllable-types/", description: "Six syllable patterns for decoding" },
        ],
      },
    ],
    featured: {
      title: "CVC words: complete guide",
      href: "/skills/cvc-words/blending-activities/",
      excerpt: "A practical route from sound-by-sound blending to fluent short-vowel reading.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    },
  },
  {
    id: "teaching",
    label: "Teaching Phonics",
    shortLabel: "Teaching",
    href: "/teaching/",
    description: "Classroom implementation, lesson structures, assessment routines, and instructional planning.",
    accent: "#71717a",
    icon: "GraduationCap",
    overviewTitle: "Plan, teach, and assess phonics with confidence",
    audience: "teacher",
    menuIntro: "Translate research into classroom routines, pacing, and intervention decisions.",
    menuGroups: [
      {
        heading: "Planning",
        links: [
          { label: "Scope and sequence", href: "/teaching/scope-and-sequence/", description: "Build a cumulative plan" },
          { label: "Lesson structure", href: "/teaching/lesson-routines/", description: "Warm-up, teach, practice, apply" },
          { label: "Assessment", href: "/teaching/assessment/", description: "Know what to screen and progress monitor" },
        ],
      },
      {
        heading: "Instruction",
        links: [
          { label: "Small-group teaching", href: "/teaching/small-group-instruction/", description: "Differentiate without losing coherence" },
          { label: "Decodable reading", href: "/teaching/decodable-texts/", description: "Match text to taught skills" },
          { label: "Intervention moves", href: "/support/intervention/", description: "Escalate support thoughtfully" },
        ],
      },
    ],
    featured: {
      title: "How to structure a 30-minute phonics lesson",
      href: "/teaching/lesson-routines/30-minute-lesson-block/",
      excerpt: "A classroom-ready lesson sequence with review, explicit instruction, practice, and transfer.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80",
    },
  },
  {
    id: "home",
    label: "Learning at Home",
    shortLabel: "At Home",
    href: "/home/",
    description: "Parent-friendly routines, age-based milestones, and practical activities that support school learning.",
    accent: "#71717a",
    icon: "House",
    overviewTitle: "Support your child’s reading at home",
    audience: "parent",
    menuIntro: "Find realistic, encouraging guidance for home reading routines and milestones.",
    menuGroups: [
      {
        heading: "By Age",
        links: [
          { label: "Ages 3-4", href: "/home/pre-readers/", description: "Letter play and phonemic awareness" },
          { label: "Ages 4-5", href: "/home/beginning-readers/", description: "Letter sounds and first words" },
          { label: "Ages 5-7", href: "/home/developing-readers/", description: "Fluency and common patterns" },
          { label: "Ages 7+", href: "/home/advancing-readers/", description: "Spelling patterns and multisyllables" },
        ],
      },
      {
        heading: "Popular Topics",
        links: [
          { label: "Home routines", href: "/home/home-routines/", description: "Simple weekly structures" },
          { label: "Milestones", href: "/home/phonics-milestones/", description: "What progress can look like" },
          { label: "Apps for home", href: "/reviews/", description: "Expert-reviewed tools and programs" },
        ],
      },
    ],
    featured: {
      title: "10 phonics routines for ages 4-5",
      href: "/home/beginning-readers/phonics-routines-for-ages-4-5/",
      excerpt: "Short, repeatable routines that fit into a weeknight and reinforce school learning.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80",
    },
  },
  {
    id: "support",
    label: "Struggling Readers",
    shortLabel: "Support",
    href: "/support/",
    description: "Intervention, dyslexia-informed support, multilingual considerations, and progress monitoring.",
    accent: "#71717a",
    icon: "HeartHandshake",
    overviewTitle: "Practical support for readers who need more",
    audience: "all",
    menuIntro: "Recognize red flags, respond early, and support students with targeted instruction.",
    menuGroups: [
      {
        heading: "Needs and Profiles",
        links: [
          { label: "Dyslexia and phonics", href: "/support/dyslexia/", description: "What changes and what stays the same" },
          { label: "English learners", href: "/support/english-learners/", description: "Language transfer and explicit support" },
          { label: "Assessment red flags", href: "/support/assessment-red-flags/", description: "Know when to investigate further" },
        ],
      },
      {
        heading: "Intervention Paths",
        links: [
          { label: "Intervention planning", href: "/support/intervention/", description: "Intensity, grouping, and pacing" },
          { label: "Progress monitoring", href: "/support/progress-monitoring/", description: "Track response to instruction" },
          { label: "At-home support", href: "/home/developing-readers/", description: "Family actions that actually help" },
        ],
      },
    ],
    featured: {
      title: "When to worry about reading progress",
      href: "/support/intervention/when-to-worry-about-reading-progress/",
      excerpt: "A grounded guide to red flags, timelines, and what to do before frustration grows.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80",
    },
  },
  {
    id: "reviews",
    label: "Reviews",
    shortLabel: "Reviews",
    href: "/reviews/",
    description: "Expert app and program reviews with consistent scoring, filters, and comparison tables.",
    accent: "#71717a",
    icon: "Star",
    overviewTitle: "Compare phonics apps and programs with confidence",
    audience: "all",
    menuIntro: "Browse standardized reviews by age, platform, price, and overall score.",
    menuGroups: [
      {
        heading: "Popular Picks",
        links: [
          { label: "Best overall apps", href: "/reviews/", description: "Top-rated across instruction and usability" },
          { label: "Best free options", href: "/reviews/", description: "Strong value without paid lock-in" },
          { label: "Best for beginners", href: "/reviews/", description: "Low-friction tools for ages 3-5" },
        ],
      },
      {
        heading: "Compare By Need",
        links: [
          { label: "Home use", href: "/for-parents/", description: "Programs that support family routines" },
          { label: "Teacher tools", href: "/for-teachers/", description: "Programs suited to classroom contexts" },
          { label: "How we rate", href: "/about/", description: "Transparent scoring methodology" },
        ],
      },
    ],
    featured: {
      title: "Best phonics apps for kids in 2026",
      href: "/reviews/",
      excerpt: "A directory of tools reviewed against instruction quality, engagement, and value for money.",
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=1200&q=80",
    },
  },
  {
    id: "science-of-reading",
    label: "Science of Reading",
    shortLabel: "Science",
    href: "/science-of-reading/",
    description: "Research explainers on reading development, instructional evidence, and policy conversations.",
    accent: "#71717a",
    icon: "Microscope",
    overviewTitle: "Research explained for real instruction",
    audience: "all",
    menuIntro: "Make sense of reading research, from the simple view to policy and practice.",
    menuGroups: [
      {
        heading: "Research Foundations",
        links: [
          { label: "Why phonics works", href: "/science-of-reading/reading-research/", description: "The evidence base for systematic instruction" },
          { label: "Reading brain", href: "/science-of-reading/reading-brain/", description: "How print maps onto speech" },
          { label: "Five pillars", href: "/science-of-reading/five-pillars/", description: "The broader reading system" },
        ],
      },
      {
        heading: "In Practice",
        links: [
          { label: "Myths and misconceptions", href: "/science-of-reading/myths/", description: "What the evidence does and doesn’t say" },
          { label: "Curriculum alignment", href: "/teaching/scope-and-sequence/", description: "Research to classroom planning" },
          { label: "Parent explainer", href: "/for-parents/", description: "A plain-language route into the research" },
        ],
      },
    ],
    featured: {
      title: "The science behind phonemic awareness",
      href: "/science-of-reading/reading-research/the-science-behind-phonemic-awareness/",
      excerpt: "Why hearing and manipulating sounds is such a strong predictor of later reading success.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    },
  },
];

export const clusters: ClusterPage[] = [
  { silo: "phonics", slug: "foundations", title: "Phonics foundations", summary: "Definitions, principles, and the big instructional ideas.", audience: ["parent", "teacher"], overviewUrl: "/phonics/foundations/" },
  { silo: "phonics", slug: "phonemic-awareness", title: "Phonemic awareness", summary: "The sound-level skills that support decoding.", audience: ["parent", "teacher"], overviewUrl: "/phonics/phonemic-awareness/" },
  { silo: "skills", slug: "cvc-words", title: "CVC words", summary: "Early blending, decoding, and dictation routines.", audience: ["parent", "teacher"], overviewUrl: "/skills/cvc-words/" },
  { silo: "skills", slug: "consonant-blends", title: "Consonant blends", summary: "Teach adjacent sounds without adding a schwa.", audience: ["teacher"], overviewUrl: "/skills/consonant-blends/" },
  { silo: "teaching", slug: "scope-and-sequence", title: "Scope and sequence", summary: "Plan cumulative instruction and review.", audience: ["teacher"], overviewUrl: "/teaching/scope-and-sequence/" },
  { silo: "teaching", slug: "lesson-routines", title: "Lesson routines", summary: "Repeatable daily and weekly instructional structures.", audience: ["teacher"], overviewUrl: "/teaching/lesson-routines/" },
  { silo: "home", slug: "beginning-readers", title: "Beginning readers", summary: "Support ages 4-5 with first sound-symbol connections.", audience: ["parent"], overviewUrl: "/home/beginning-readers/" },
  { silo: "home", slug: "home-routines", title: "Home routines", summary: "Build short, consistent practice into everyday life.", audience: ["parent"], overviewUrl: "/home/home-routines/" },
  { silo: "support", slug: "intervention", title: "Intervention", summary: "Escalate support when classroom instruction is not enough.", audience: ["parent", "teacher"], overviewUrl: "/support/intervention/" },
  { silo: "support", slug: "dyslexia", title: "Dyslexia support", summary: "Apply structured literacy principles with clarity.", audience: ["parent", "teacher"], overviewUrl: "/support/dyslexia/" },
  { silo: "science-of-reading", slug: "reading-research", title: "Reading research", summary: "Evidence translated into practical implications.", audience: ["parent", "teacher"], overviewUrl: "/science-of-reading/reading-research/" },
  { silo: "science-of-reading", slug: "reading-brain", title: "The reading brain", summary: "How print, speech, and meaning connect.", audience: ["teacher"], overviewUrl: "/science-of-reading/reading-brain/" },
];

export const articles: Article[] = [
  {
    silo: "skills",
    cluster: "cvc-words",
    slug: "blending-activities",
    title: "CVC blending activities that build confident first readers",
    excerpt: "A complete teaching sequence for helping children blend short-vowel words accurately and smoothly.",
    description: "Use explicit modeling, cumulative review, and playful decoding to teach CVC blending without guessing.",
    audience: ["parent", "teacher"],
    readTime: "12 min read",
    published: "January 8, 2026",
    updated: "February 22, 2026",
    author: { name: "Maya Bennett, M.Ed.", role: "Literacy specialist" },
    image: articleImage("skills-cvc-words-blending-activities"),
    keyAnswer: "The strongest CVC blending activities move from oral segmenting to sound-by-sound blending, then into decodable word reading and short connected text with immediate corrective feedback.",
    takeaways: [
      "Model left-to-right blending with continuous sounds when possible.",
      "Keep words tightly matched to previously taught letter-sound knowledge.",
      "Use dictation and decodable text to secure transfer beyond isolated word lists.",
    ],
    sections: [
      {
        id: "why-cvc-matters",
        title: "Why CVC words matter early",
        paragraphs: [
          "CVC words give children an early success pattern: one letter for each sound, a predictable left-to-right structure, and a short-vowel core that can be practiced with many examples.",
          "Because these words are simple enough to decode but rich enough to generalize across many examples, they create the bridge between isolated letter-sound knowledge and real reading.",
        ],
      },
      {
        id: "teaching-sequence",
        title: "A simple teaching sequence",
        paragraphs: [
          "Start with oral practice. Say the sounds slowly, ask the learner to blend them, then reveal the written word. This keeps attention on the sound structure first.",
          "Move to a highly controlled word list with only known graphemes. Model once, guide together, then ask for independent attempts. Correct errors by returning to each sound rather than asking the child to guess.",
        ],
      },
      {
        id: "activities",
        title: "Activities that support transfer",
        paragraphs: [
          "Magnetic letter word building, quick word ladders, and one-minute decodable phrases all help children see that the same short-vowel pattern appears across many words.",
          "For teachers, a short dictation routine is especially useful because it forces the learner to segment and map sounds to print. For parents, a three-minute card routine after dinner is often enough when it is consistent.",
        ],
      },
    ],
  },
  {
    silo: "teaching",
    cluster: "lesson-routines",
    slug: "30-minute-lesson-block",
    title: "How to structure a 30-minute phonics lesson block",
    excerpt: "A repeatable daily routine for review, explicit teaching, guided practice, and decodable application.",
    description: "A high-clarity lesson structure that keeps pace brisk while protecting cumulative review and application.",
    audience: ["teacher"],
    readTime: "10 min read",
    published: "January 18, 2026",
    updated: "February 10, 2026",
    author: { name: "Jordan Wade", role: "Curriculum editor" },
    image: articleImage("teaching-lesson-routines-30-minute-lesson-block"),
    keyAnswer: "A strong 30-minute phonics lesson usually includes five minutes of review, ten minutes of explicit new teaching, ten minutes of guided and independent practice, and five minutes of decodable application or dictation.",
    takeaways: [
      "Protect review time so taught skills stay automatic.",
      "Teach one new concept at a time with clear modeling and verbal routines.",
      "End with application so students use the pattern in reading or spelling.",
    ],
    sections: [
      {
        id: "review",
        title: "Begin with cumulative review",
        paragraphs: [
          "Start the lesson by retrieving previously taught sounds, words, and irregular words. This keeps instruction cumulative and stops new learning from displacing older patterns.",
          "Use brisk pacing, unison responses, and error correction that returns students to the exact point of confusion.",
        ],
      },
      {
        id: "explicit-teaching",
        title: "Teach explicitly, then release",
        paragraphs: [
          "Introduce the new pattern with simple language and one clear exemplar. Avoid overloading students with too many exceptions at once.",
          "After modeling, shift immediately into guided practice with high response rates. Students should say, read, and spell the pattern in the same lesson.",
        ],
      },
      {
        id: "application",
        title: "End with application",
        paragraphs: [
          "Use decodable phrases, a short passage, or dictated sentences that match the skill. Application is what tells you whether the lesson stuck beyond a drill format.",
          "If students cannot transfer, narrow the task and reteach tomorrow before introducing another concept.",
        ],
      },
    ],
  },
  {
    silo: "home",
    cluster: "beginning-readers",
    slug: "phonics-routines-for-ages-4-5",
    title: "10 phonics routines for ages 4-5 that fit real family life",
    excerpt: "Short, repeatable routines for letter sounds, blending, and first decodable reading at home.",
    description: "Low-prep routines that strengthen school learning without turning home practice into a battle.",
    audience: ["parent"],
    readTime: "8 min read",
    published: "January 30, 2026",
    updated: "February 12, 2026",
    author: { name: "Alicia Price", role: "Parent literacy coach" },
    image: articleImage("home-beginning-readers-phonics-routines-for-ages-4-5"),
    keyAnswer: "For most four- and five-year-olds, the best phonics routines are brief, predictable, and tied to known letter sounds, first blending practice, and read-aloud conversations about print.",
    takeaways: [
      "Aim for five to ten minutes, not marathon practice sessions.",
      "Repeat the same routines across the week so cognitive load stays low.",
      "Use school-taught patterns first before introducing anything new.",
    ],
    sections: [
      {
        id: "keep-it-short",
        title: "Keep routines brief and predictable",
        paragraphs: [
          "Young children respond better to consistency than novelty. A short routine they know how to start often produces better learning than a long session with many materials.",
          "Choose two or three routines and rotate them across the week: a sound review, a quick oral blending game, and a short decodable reading moment.",
        ],
      },
      {
        id: "match-school",
        title: "Match what school is already teaching",
        paragraphs: [
          "The easiest way to help is to reinforce the sound patterns your child already sees in class. When home and school point in the same direction, progress feels faster and less confusing.",
          "Ask the teacher which letter-sounds or word patterns are current, then keep home practice tightly connected to those examples.",
        ],
      },
      {
        id: "build-joy",
        title: "Protect confidence while you practice",
        paragraphs: [
          "Home practice should feel doable. Stop while your child is still successful and end with a win, even if that means reading just a few short words accurately.",
          "A warm tone matters. Specific praise for effort and accuracy keeps children willing to try again tomorrow.",
        ],
      },
    ],
  },
  {
    silo: "support",
    cluster: "intervention",
    slug: "when-to-worry-about-reading-progress",
    title: "When to worry about reading progress and what to do next",
    excerpt: "A practical guide to red flags, timelines, and first-response support steps for parents and teachers.",
    description: "Use observable patterns, not panic, to decide when a child may need more explicit or intensive support.",
    audience: ["parent", "teacher"],
    readTime: "11 min read",
    published: "February 1, 2026",
    updated: "February 20, 2026",
    author: { name: "Dr. Leah Sutton", role: "Reading intervention specialist" },
    image: articleImage("support-intervention-when-to-worry-about-reading-progress"),
    keyAnswer: "Reading progress deserves closer attention when a child is receiving regular instruction but continues to struggle with basic sound-symbol mapping, blending, or word reading accuracy over time.",
    takeaways: [
      "Look for persistent patterns rather than one hard week.",
      "Use assessment information to guide support intensity.",
      "Early, explicit intervention is more effective than waiting for a child to catch up alone.",
    ],
    sections: [
      {
        id: "signs",
        title: "What signs matter most",
        paragraphs: [
          "The most useful signals are slow or inconsistent letter-sound recall, weak blending, poor retention of taught words, and strong avoidance of print tasks. These are more informative than a child simply disliking reading.",
          "Context matters too. Attendance, hearing, language exposure, and instructional consistency all shape what progress should reasonably look like.",
        ],
      },
      {
        id: "respond",
        title: "How to respond early",
        paragraphs: [
          "Teachers should increase explicit review, reduce the number of new patterns introduced at once, and add more opportunities for guided response. Parents can coordinate with the school and keep home practice narrow and supportive.",
          "If concerns persist, formal screening and targeted intervention are appropriate next steps. Waiting for confidence to drop further rarely helps.",
        ],
      },
      {
        id: "partnering",
        title: "Partnering across home and school",
        paragraphs: [
          "The strongest support plans use the same language for sounds, blending, and correction across settings. That keeps the learner from having to translate between conflicting approaches.",
          "Shared goals also make progress easier to notice. Even small weekly wins matter when instruction is consistent.",
        ],
      },
    ],
  },
  {
    silo: "science-of-reading",
    cluster: "reading-research",
    slug: "why-systematic-phonics-works",
    title: "Why systematic phonics works according to reading research",
    excerpt: "A plain-language explanation of the evidence for explicit, cumulative phonics instruction.",
    description: "See what decades of reading research suggest about teaching, transfer, and long-term decoding success.",
    audience: ["parent", "teacher"],
    readTime: "15 min read",
    published: "January 4, 2026",
    updated: "February 14, 2026",
    author: { name: "Evan Marsh", role: "Research editor" },
    image: articleImage("science-of-reading-reading-research-why-systematic-phonics-works"),
    keyAnswer: "Systematic phonics works because it teaches the alphabetic code explicitly, in a planned sequence, with enough practice for children to map sounds to print and decode unfamiliar words independently.",
    takeaways: [
      "Explicit instruction outperforms discovery-only approaches for most beginners.",
      "Sequence matters because the code is cumulative and easier to generalize when taught deliberately.",
      "Phonics is most effective when paired with language, comprehension, and decodable reading practice.",
    ],
    sections: [
      {
        id: "code",
        title: "Reading depends on cracking the code",
        paragraphs: [
          "Written English is an alphabetic system. Children have to learn that letters and letter combinations represent speech sounds, and they need enough examples to apply that knowledge to new words.",
          "Systematic phonics instruction makes this code visible rather than leaving children to infer it from exposure alone.",
        ],
      },
      {
        id: "sequence",
        title: "A planned sequence reduces overload",
        paragraphs: [
          "When instruction moves from simple to more complex patterns, learners can use what they already know while meeting something new. That reduces memory demands and increases the odds of accurate transfer.",
          "The planned sequence also helps teachers revisit and review patterns before they fade.",
        ],
      },
      {
        id: "limits",
        title: "What phonics does and does not do",
        paragraphs: [
          "Phonics is not the whole of reading, but it is a critical part of early word recognition. Children also need language comprehension, vocabulary, and knowledge-building.",
          "The strongest instruction integrates these strands rather than treating phonics as a disconnected worksheet subject.",
        ],
      },
    ],
  },
];

export const reviews: Review[] = [
  {
    slug: "hooked-on-phonics",
    name: "Hooked on Phonics",
    summary: "Comprehensive home program with clear skill progression, decodable readers, and strong parent scaffolds.",
    ages: "3-8",
    platforms: ["iOS", "Android", "Web"],
    price: "Subscription",
    overall: 4.7,
    badge: "Best Overall",
    bestFor: "Families who want a systematic home program",
    updated: "February 24, 2026",
    reviewer: "Maya Bennett, M.Ed.",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&q=80",
    breakdown: [
      { label: "Instruction Quality", score: 4.9 },
      { label: "Usability", score: 4.5 },
      { label: "Engagement", score: 4.6 },
      { label: "Content Depth", score: 4.8 },
      { label: "Value for Money", score: 4.4 },
    ],
    pros: ["Strong sequence with decodable practice", "Helpful parent guidance", "Progress tracking is easy to understand"],
    cons: ["Subscription cost adds up", "Visual design feels dated in places", "Less flexible for classroom use"],
    verdict: "Hooked on Phonics remains one of the clearest home-use programs for families who want a structured path rather than a loose collection of games.",
  },
  {
    slug: "homer",
    name: "Homer",
    summary: "Personalized reading pathways with a strong early literacy experience and appealing child-facing design.",
    ages: "2-8",
    platforms: ["iOS", "Android"],
    price: "Subscription",
    overall: 4.6,
    badge: "Best for Beginners",
    bestFor: "Children who respond well to personalization and story-led practice",
    updated: "February 18, 2026",
    reviewer: "Alicia Price",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
    breakdown: [
      { label: "Instruction Quality", score: 4.5 },
      { label: "Usability", score: 4.7 },
      { label: "Engagement", score: 4.8 },
      { label: "Content Depth", score: 4.4 },
      { label: "Value for Money", score: 4.3 },
    ],
    pros: ["Highly engaging for young learners", "Good onboarding for parents", "Smooth mobile experience"],
    cons: ["Less transparent instructional sequence", "Subscription only", "Some activities feel broader than phonics-specific"],
    verdict: "Homer is especially strong for families who need a gentle, engaging entry point, though it is not as explicit or transparent as the most systematic options.",
  },
  {
    slug: "teach-your-monster",
    name: "Teach Your Monster to Read",
    summary: "A playful and unusually strong free-to-low-cost option with real phonics substance under the game layer.",
    ages: "3-6",
    platforms: ["iOS", "Android", "Web"],
    price: "Freemium",
    overall: 4.3,
    badge: "Best Free",
    bestFor: "Families who want a lower-cost practice tool",
    updated: "February 15, 2026",
    reviewer: "Jordan Wade",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    breakdown: [
      { label: "Instruction Quality", score: 4.2 },
      { label: "Usability", score: 4.1 },
      { label: "Engagement", score: 4.7 },
      { label: "Content Depth", score: 3.9 },
      { label: "Value for Money", score: 4.8 },
    ],
    pros: ["Excellent value", "Fun without becoming chaotic", "Useful supplemental decoding practice"],
    cons: ["Less reporting for adults", "Not a full curriculum", "Some children need support to transfer beyond the app"],
    verdict: "Teach Your Monster is one of the better value picks in the category and works best as a supplement rather than a stand-alone reading plan.",
  },
  {
    slug: "reading-eggs",
    name: "Reading Eggs",
    summary: "Broad reading platform with strong motivation features and a wider age span than most phonics-first apps.",
    ages: "2-13",
    platforms: ["iOS", "Android", "Web"],
    price: "Subscription",
    overall: 4.4,
    badge: "Editor Pick",
    bestFor: "Families who want one platform to cover several stages",
    updated: "February 11, 2026",
    reviewer: "Dr. Leah Sutton",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    breakdown: [
      { label: "Instruction Quality", score: 4.3 },
      { label: "Usability", score: 4.5 },
      { label: "Engagement", score: 4.6 },
      { label: "Content Depth", score: 4.4 },
      { label: "Value for Money", score: 4.2 },
    ],
    pros: ["Wide content range", "Good motivation system", "Useful for siblings at different stages"],
    cons: ["Can feel broad rather than tightly focused", "Best path is not always obvious", "Subscription pricing"],
    verdict: "Reading Eggs balances motivation and coverage well, though families focused only on core phonics may prefer a more explicit, narrower path.",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "phoneme",
    term: "Phoneme",
    shortDefinition: "The smallest unit of sound that can change meaning in a word.",
    definition: "A phoneme is the smallest unit of sound in a language that can distinguish one word from another.",
    content: [
      "English is often described as having about 44 phonemes, though the exact count varies a little by accent and dialect. These sounds are represented in print by single letters and multi-letter graphemes.",
      "Phonemes matter because early reading depends on hearing, isolating, blending, and mapping these sounds to print. A child who can identify /m/ /a/ /p/ in spoken language is better prepared to decode map on the page.",
      "A common misconception is that letters and phonemes are the same thing. They are related, but not identical. The word ship has four letters but only three phonemes because sh represents one sound.",
    ],
    related: ["grapheme", "phonemic-awareness", "blend"],
    learnMore: [
      "/phonics/phonemic-awareness/",
      "/skills/cvc-words/blending-activities/",
      "/science-of-reading/reading-research/why-systematic-phonics-works/",
    ],
  },
  {
    slug: "grapheme",
    term: "Grapheme",
    shortDefinition: "A letter or letter combination that represents a phoneme in print.",
    definition: "A grapheme is a written symbol, or group of symbols, used to represent a phoneme.",
    content: [
      "Some graphemes are single letters, like m in map. Others are combinations, like sh in ship or eigh in eight.",
      "Understanding graphemes helps learners see why English spelling is a code made up of patterns, not just isolated letters.",
    ],
    related: ["phoneme", "digraph", "vowel-team"],
    learnMore: ["/skills/cvc-words/blending-activities/", "/glossary/phoneme/", "/skills/digraphs/"],
  },
  {
    slug: "blend",
    term: "Blend",
    shortDefinition: "Two or more adjacent consonants where each sound is still heard.",
    definition: "A blend is a sequence of consonants in which each individual sound remains audible.",
    content: [
      "In stop, the /s/ and /t/ are both heard. That makes st a blend rather than a digraph.",
      "Children often need careful modeling to pronounce blends smoothly without inserting extra vowel sounds between consonants.",
    ],
    related: ["digraph", "phoneme", "segmenting"],
    learnMore: ["/skills/consonant-blends/", "/skills/cvc-words/blending-activities/", "/glossary/phoneme/"],
  },
];

export const trustStats = [
  "200+ articles",
  "58+ reviews",
  "Evidence-based guidance",
  "Serving families since 2019",
];

export const agePathways = [
  { age: "3-4", title: "Pre-readers", description: "Letter recognition and phonemic awareness basics", href: "/for-parents/#pre-readers" },
  { age: "4-5", title: "Beginning readers", description: "Letter sounds, CVC words, and first blending", href: "/for-parents/#beginning-readers" },
  { age: "5-7", title: "Developing readers", description: "Blends, digraphs, and fluency-building practice", href: "/for-parents/#developing-readers" },
  { age: "7+", title: "Advanced readers", description: "Multisyllables, spelling patterns, and extra support when needed", href: "/for-parents/#advanced-readers" },
];

export const parentPathways = [
  {
    label: "Pre-readers",
    age: "Ages 3-4",
    summary: "Letter recognition and phonemic awareness basics",
    articles: [
      "/phonics/foundations/overview-and-essentials/",
      "/phonics/phonemic-awareness/overview-and-essentials/",
      "/home/beginning-readers/phonics-routines-for-ages-4-5/",
    ],
  },
  {
    label: "Beginning readers",
    age: "Ages 4-5",
    summary: "Letter sounds, CVC words, and first blending",
    articles: [
      "/phonics/foundations/what-is-phonics/",
      "/skills/cvc-words/blending-activities/",
      "/home/beginning-readers/phonics-routines-for-ages-4-5/",
      "/reviews/hooked-on-phonics/",
      "/support/intervention/when-to-worry-about-reading-progress/",
    ],
  },
  {
    label: "Developing readers",
    age: "Ages 5-7",
    summary: "Blends, digraphs, and fluency-building practice",
    articles: [
      "/skills/cvc-words/blending-activities/",
      "/teaching/lesson-routines/30-minute-lesson-block/",
      "/support/intervention/what-to-do-next/",
    ],
  },
  {
    label: "Advanced readers",
    age: "Ages 7+",
    summary: "Multisyllables, spelling patterns, and extra support when needed",
    articles: [
      "/support/dyslexia/overview-and-essentials/",
      "/science-of-reading/reading-research/why-systematic-phonics-works/",
      "/reviews/reading-eggs/",
    ],
  },
];

export const teacherPathways = [
  {
    label: "New to phonics instruction",
    summary: "Understand the why, the sequence, and the daily lesson shape.",
    articles: ["/phonics/foundations/what-is-phonics/", "/teaching/lesson-routines/30-minute-lesson-block/", "/science-of-reading/reading-research/why-systematic-phonics-works/"],
  },
  {
    label: "Planning a scope and sequence",
    summary: "Build cumulative instruction and review across the year.",
    articles: ["/teaching/scope-and-sequence/overview-and-essentials/", "/teaching/lesson-routines/30-minute-lesson-block/", "/skills/cvc-words/blending-activities/"],
  },
  {
    label: "Differentiating for struggling readers",
    summary: "Increase support without fragmenting instruction.",
    articles: ["/support/intervention/when-to-worry-about-reading-progress/", "/support/dyslexia/overview-and-essentials/", "/teaching/lesson-routines/30-minute-lesson-block/"],
  },
];

export const utilityPages = [
  { slug: "about", title: "About Phonics.org", description: "Our editorial mission, review standards, and how this resource supports Reading.com pathways." },
  { slug: "faq", title: "Frequently asked questions", description: "Quick answers about phonics, reviews, editorial policy, and how to use the site." },
  { slug: "contact", title: "Contact", description: "Get in touch about editorial questions, partnerships, or corrections." },
  { slug: "search", title: "Search", description: "Explore by keyword, topic, age, audience, or review platform." },
  { slug: "blog", title: "Blog", description: "Timely commentary, news, and updates that sit outside the main silo structure." },
];

const dummyArticleLabels = [
  "Overview and essentials",
  "Common mistakes to avoid",
  "Teaching sequence",
  "Activities and practice ideas",
  "Assessment checkpoints",
  "Home support strategies",
  "Lesson examples",
  "Intervention tips",
  "What to do next",
];

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugFromHref(href: string) {
  return href.split("/").filter(Boolean).pop() ?? "";
}

function deriveClustersFromMenus() {
  const derived: ClusterPage[] = [];

  for (const silo of silos) {
    for (const group of silo.menuGroups) {
      for (const link of group.links) {
        const parts = link.href.split("/").filter(Boolean);
        if (parts.length !== 2) continue;
        if (parts[0] !== silo.id) continue;

        const slug = parts[1];
        if (derived.some((item) => item.silo === silo.id && item.slug === slug)) continue;
        if (clusters.some((item) => item.silo === silo.id && item.slug === slug)) continue;

        derived.push({
          silo: silo.id,
          slug,
          title: link.label,
          summary: link.description,
          audience:
            silo.audience === "all"
              ? ["parent", "teacher"]
              : [silo.audience],
          overviewUrl: link.href,
        });
      }
    }
  }

  return derived;
}

const allClusters: ClusterPage[] = [...clusters, ...deriveClustersFromMenus()];

function buildDummyArticle(cluster: ClusterPage, index: number): Article {
  const label = dummyArticleLabels[index] ?? `Topic ${index + 1}`;
  const slug = `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  const title = `${cluster.title}: ${label}`;
  const image = articleImage(`${cluster.silo}-${cluster.slug}-${slug}`);

  return {
    silo: cluster.silo,
    cluster: cluster.slug,
    slug,
    title,
    excerpt: `A placeholder article for ${cluster.title.toLowerCase()} covering ${label.toLowerCase()} in a realistic article layout.`,
    description: `Dummy article for ${cluster.title} focused on ${label.toLowerCase()}.`,
    audience: cluster.audience,
    readTime: `${8 + (index % 5)} min read`,
    published: "March 1, 2026",
    updated: "March 1, 2026",
    author: { name: "Phonics.org Editorial Team", role: "Education editors" },
    image,
    keyAnswer: `${title} is represented here as a dummy article so each cluster page can behave like a real content hub with multiple child articles.`,
    takeaways: [
      `This article sits inside the ${cluster.title.toLowerCase()} cluster.`,
      "The prototype now supports full pillar to cluster to article navigation.",
      "Replace this seed content with final editorial copy later.",
    ],
    sections: [
      {
        id: "overview",
        title: `${label}: overview`,
        paragraphs: [
          `${cluster.title} is a cluster page, and this article is one of the child entries that lives within it. The purpose of this dummy content is to make the IA behave like the final site instead of stopping at a dead-end intermediate page.`,
          `In a production build, this slot would be replaced by a real article about ${label.toLowerCase()} within ${cluster.title.toLowerCase()}, complete with stronger editorial detail, internal links, and updated evidence where relevant.`,
        ],
      },
      {
        id: "practice",
        title: "How this article fits the cluster",
        paragraphs: [
          `Every cluster should support multiple article angles so users can move from broad topic knowledge into specific implementation details. That is why this prototype now generates a full set of article cards for every cluster route.`,
          "This keeps the hierarchy consistent across navigation, pillar pages, cluster pages, and final article pages.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        paragraphs: [
          "From here, the reader can return to the cluster overview, move across to related articles, or climb back up to the pillar page for a broader summary.",
          "That mirrors the authority-site structure described in the brief and prevents topic pages from feeling isolated.",
        ],
      },
    ],
  };
}

export function getDummyArticlesForCluster(cluster: ClusterPage) {
  return Array.from({ length: 9 }, (_, index) => buildDummyArticle(cluster, index));
}

export function getSilo(id: string) {
  return silos.find((silo) => silo.id === id);
}

export function getCluster(silo: string, slug: string) {
  return allClusters.find((cluster) => cluster.silo === silo && cluster.slug === slug);
}

export function getArticle(silo: string, cluster: string, slug: string) {
  const explicit = articles.find(
    (article) =>
      article.silo === silo &&
      article.cluster === cluster &&
      article.slug === slug,
  );

  if (explicit) return explicit;

  const clusterPage = getCluster(silo, cluster);
  if (!clusterPage) return undefined;

  return getDummyArticlesForCluster(clusterPage).find((article) => article.slug === slug);
}

export function getReview(slug: string) {
  return reviews.find((review) => review.slug === slug);
}

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getArticlesBySilo(silo: SiloId) {
  return articles.filter((article) => article.silo === silo);
}

export function getClustersBySilo(silo: SiloId) {
  return allClusters.filter((cluster) => cluster.silo === silo);
}

export function getArticlesForCluster(silo: SiloId, clusterSlug: string) {
  const explicit = articles.filter(
    (article) => article.silo === silo && article.cluster === clusterSlug,
  );

  if (explicit.length >= 9) return explicit.slice(0, 9);

  const clusterPage = getCluster(silo, clusterSlug);
  if (!clusterPage) return explicit;

  const dummy = getDummyArticlesForCluster(clusterPage);
  const merged = [...explicit];

  for (const item of dummy) {
    if (!merged.some((article) => article.slug === item.slug)) {
      merged.push(item);
    }
  }

  return merged.slice(0, 9);
}

export function getRelatedArticles(article: Article, count = 3) {
  const sameCluster = getArticlesForCluster(article.silo, article.cluster).filter(
    (candidate) => candidate.slug !== article.slug,
  );

  const sameSilo = articles.filter(
    (candidate) =>
      candidate.slug !== article.slug &&
      candidate.cluster !== article.cluster &&
      candidate.silo === article.silo,
  );

  return [...sameCluster, ...sameSilo].slice(0, count);
}
