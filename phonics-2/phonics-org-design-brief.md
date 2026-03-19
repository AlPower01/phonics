# Phonics.org Website Redesign — Product Design Requirements (PDR)

**Version:** 1.0
**Date:** February 25, 2026
**Project Type:** Complete site redesign and information architecture overhaul
**Primary Stakeholder:** Jordan Wade (PM)
**Audience:** Design team, development team

---

## Executive Summary

### Project Overview
Phonics.org is undergoing a complete redesign to transform from a flat blog structure into a hierarchical, topic-clustered authority site. The site currently has 200+ quality articles but suffers from broken information architecture that suppresses SEO performance and creates poor user experience. This redesign will establish 7 content silos with pillar-cluster architecture, implement mega menu navigation, create audience pathways, and optimize for both traditional search and AI-powered search (GEO).

### Strategic Goals
1. **Establish topical authority** through content silos and internal linking
2. **Serve dual audiences** (parents + teachers) without content duplication
3. **Generate qualified leads** for reading.com through multiple conversion paths
4. **Rank for high-value phonics queries** in search and AI overviews
5. **Provide scannable navigation** that exposes full site depth within 2 clicks

### Success Metrics
- All content reachable within 3 clicks from homepage
- Average 5-8 internal links per page
- Bounce rate reduction of 15-20%
- 30% increase in pages per session
- Improved rankings for target keywords within 6 months
- Increased click-through to reading.com

---

## Brand & Visual Design Direction

### Brand Identity
**Status:** To be developed by designer
**Approach:** Create new brand identity for phonics.org that:
- Signals educational authority and trustworthiness
- Appeals to both parent and educator audiences
- Feels modern, clean, and accessible (not childish)
- Differentiates from but complements reading.com brand

### Design Principles

1. **Clarity Over Cleverness**
   - Information architecture should be immediately scannable
   - No mystery meat navigation
   - Clear visual hierarchy on every page
   - Breadcrumbs and wayfinding on every page

2. **Density With Breathing Room**
   - Site must expose significant content depth (7 silos × 10-25 articles each)
   - But individual pages should feel clean, not overwhelming
   - Use progressive disclosure (mega menus, accordions, "show more")
   - White space around major elements

3. **Mobile-First, Content-Dense Desktop**
   - Mobile: single column, collapsible menus, card-based layouts
   - Desktop: take advantage of screen real estate with multi-column layouts, sidebars, mega menus
   - Responsive breakpoint: 768px

4. **Visual Differentiation by Silo**
   - Each of 7 content silos should have a signature color/icon
   - Creates visual memory and navigation cues
   - Use consistently in breadcrumbs, pills, cards, mega menus

5. **Trust Signals Everywhere**
   - Author credentials visible on every article
   - Publication/update dates prominent
   - Research citations when applicable
   - About page linked in multiple locations
   - Professional photography/illustrations (avoid stock clichés)

### Typography Guidance
- **Headlines:** Bold, confident, highly readable at multiple sizes
- **Body:** Excellent readability for long-form content (16-18px base size)
- **Meta/UI:** Clear distinction between content and interface elements
- **Hierarchy:** Strong H1 → H2 → H3 distinction

### Color System Recommendations
- **Primary brand color:** Authority/trust (consider deep blue, teal, or purple)
- **7 silo accent colors:** Distinct but harmonious palette
- **Success/score indicators:** Green spectrum for ratings/scores
- **Warning/note callouts:** Amber/orange for attention
- **Audience differentiation:** Consider parent vs teacher color coding

### Imagery Direction
- **Hero illustrations:** Custom illustrations of reading/learning scenarios (avoid stock photos of smiling children with tablets)
- **Icons:** Consistent icon system for silos, skills, and navigation
- **Article images:** Mix of diagrams, screenshots (for app reviews), and contextual photos
- **Avoid:** Childish clip art, overly saturated colors, generic stock imagery

---

## Technical Requirements

### Platform
- **CMS:** WordPress (current)
- **Theme:** Custom CSS and modifications supported
- **Page Builder:** TBD (designer should design with flexibility in mind)
- **Must Support:**
  - Mega menu navigation with 4-column layouts
  - Sticky navigation elements
  - Faceted filtering (Reviews page)
  - Schema markup integration points
  - Dynamic content widgets (related posts, etc.)

### Performance Targets
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **Mobile PageSpeed Score:** > 85
- **Desktop PageSpeed Score:** > 90

### Responsive Breakpoints
```
Mobile: < 768px (single column)
Tablet: 768px - 1024px (2 columns, condensed mega menu)
Desktop: > 1024px (full multi-column layouts, full mega menu)
Max content width: 1200px (centered)
```

### Browser Support
- Chrome, Firefox, Safari, Edge (current and -1 version)
- Mobile Safari, Chrome Mobile
- Graceful degradation for older browsers

---

## Site Architecture

### 7 Content Silos (Primary Navigation)

| Silo Name | URL Root | Purpose | Target Articles | Pillar Page URL |
|-----------|----------|---------|-----------------|-----------------|
| **Phonics 101** | `/phonics/` | Core phonics concepts, methods, science | 20-25 | `/phonics/` |
| **Phonics Skills** | `/skills/` | Individual skill deep-dives (CVC, blends, digraphs, etc.) | 25-30 | `/skills/` |
| **Teaching Phonics** | `/teaching/` | Classroom strategies, lesson plans, scope & sequence | 15-20 | `/teaching/` |
| **Learning at Home** | `/home/` | Parent guides, home activities, milestones by age | 15-20 | `/home/` |
| **Struggling Readers** | `/support/` | Dyslexia, ELL, intervention, assessment | 15-20 | `/support/` |
| **Reviews** | `/reviews/` | App reviews, curriculum comparisons, tools | 60+ | `/reviews/` |
| **Science of Reading** | `/science-of-reading/` | Research, policy, reading brain, five pillars | 10-15 | `/science-of-reading/` |

### Secondary Pages
- **Audience Pathways:** `/for-parents/`, `/for-teachers/` (curated landing pages, not archives)
- **Utility Pages:** `/about/`, `/glossary/`, `/faq/`, `/contact/`, `/search/`
- **Blog:** `/blog/` for timely news/commentary not fitting silo structure

### URL Structure Pattern
```
Homepage: /
Pillar Page: /[silo]/
Cluster Page: /[silo]/[topic-slug]/
Article: /[silo]/[topic-slug]/[article-slug]/
Review: /reviews/[app-name]/
Glossary: /glossary/[term]/
```

### Navigation Hierarchy
```
Global Header
├─ Logo (links to /)
├─ 7 Mega Menu Items (Phonics 101, Skills, Parents, Teachers, Support, Reviews, Resources)
├─ Search Icon
└─ Newsletter CTA Button

Footer (4 Columns)
├─ About (mission, team, standards, contact)
├─ Explore (all 7 silos)
├─ Popular (top 8-10 pages)
└─ Connect (newsletter, social)
```

---

## Page Templates & Specifications

### 1. Homepage (`/`)

**Purpose:** Authority gateway that routes users to silos and signals topical depth to search engines

**Key Sections (in order):**

1. **Global Header + Mega Menu** (sticky)
   - Height: 64px desktop / 56px mobile
   - Logo left, nav center, search + CTA right
   - See Mega Menu section for dropdown specs

2. **Hero Banner**
   - Full-width, min-height 400px desktop / 300px mobile
   - H1: "Learn to Teach Phonics — The Right Way"
   - Subheading + 2 CTAs: "I'm a Parent" / "I'm a Teacher" → link to audience pages
   - Background: brand gradient or custom illustration

3. **Topic Silo Cards** (6 primary silos)
   - 3-col grid desktop, 2-col tablet, 1-col mobile
   - Each card: icon, silo name, 1-2 sentence description, "Explore" link to pillar page
   - Uniform card heights
   - Each silo has signature color

4. **Featured Content Row**
   - 3 featured articles from different silos
   - Each: thumbnail, silo tag pill, title, excerpt (max 120 chars)
   - Horizontal scroll on mobile

5. **Reviews Spotlight**
   - "Top-Rated Apps" heading
   - 4 app cards with prominent score badge
   - "View All Reviews" link

6. **Age/Stage Pathway**
   - "Phonics by Age" visual timeline or tabs
   - 5 age groups (3-4, 4-5, 5-6, 6-7, 7+)
   - Each clickable to filtered content

7. **Latest Articles Feed**
   - 6 most recent posts, 2-col grid
   - List view: thumbnail left, title + excerpt + meta right
   - Tagged with silo + audience
   - "View All Articles" link

8. **Trust/E-E-A-T Bar**
   - Full-width band, distinct background color
   - 4 stats: "200+ Articles", "58+ Reviews", "Evidence-Based", "Since 20XX"
   - Optional: logos of cited institutions

9. **Newsletter CTA**
   - Full-width, high contrast
   - Email input + dropdown (Parent/Teacher) + Subscribe button

10. **Global Footer**
    - See Footer specification below

**Schema Markup:**
- Organization
- WebSite with SearchAction
- SiteNavigationElement

---

### 2. Mega Menu Navigation

**Critical Importance:** The mega menu is the most important architectural change. It must expose the full silo structure in a scannable, organized panel.

**Trigger:**
- Desktop: hover with 200ms delay
- Mobile: tap to open full-screen accordion drawer

**Panel Structure (4-column layout):**

**Column 1: Section Intro (200px width)**
- Section icon/illustration
- Section name (H3)
- 1-sentence description
- "Overview" link to pillar page
- Distinct background color

**Column 2-3: Navigation Links (flexible width)**
- Column 2: 4-5 primary sub-pages
- Column 3: 3-4 secondary sub-pages + "View All" link
- Each link: title + brief descriptor
- Bold the most popular item

**Column 4: Featured Content (200px width)**
- Featured article card
- Thumbnail image
- Title + excerpt
- Rotates based on season/latest content

**Example: "By Skill" Mega Menu**
```
[Icon] Phonics Skills                    [Foundational]              [Advanced]                  [Featured Card]
Master every skill from                  • Letter-Sound              • Long Vowels               [Image]
letters to complex patterns              • CVC Words                 • Vowel Teams               CVC Words: Complete Guide
                                         • Short Vowels              • R-Controlled              Everything you need...
[Skills Overview →]                      • Consonant Blends          • Diphthongs
                                         • Consonant Digraphs        • Syllable Types
                                                                     [View All Skills →]
```

**Mobile Drawer:**
- Full-height left drawer, 85% screen width
- Accordion expand per section
- Section name + arrow (collapsed: ►, expanded: ▼)
- Sub-items indented, smaller font

**Design Notes:**
- Semi-transparent backdrop overlay when open
- Fade + slide down animation (150ms ease-out)
- Max panel height ~400px with scroll if needed
- Close on click outside or ESC key

---

### 3. Pillar/Hub Page Template

**Applied To:** All 7 silo pillar pages (e.g., `/skills/`, `/teaching/`, `/home/`)

**Purpose:** Comprehensive overview (3,000-5,000 words) that links to every cluster page in the silo

**Layout Structure:**

**Breadcrumb Bar** (above content)
- Format: Home > Silo Name
- BreadcrumbList schema required

**Hero Section**
- H1: [Silo Name]: A Complete Guide to [Topic]
- Meta: Last updated date, author name with credentials, read time
- Author byline: avatar + name + link to /about/[author]

**Table of Contents (Sticky Sidebar)**
- Desktop: sticky left or right rail
- Mobile: accordion at top of content
- Lists all H2 sections with anchor links
- Highlights active section on scroll

**Body Content (2/3 width desktop)**
- Each H2 section covers one major topic
- 2-3 paragraphs of overview per topic
- Ends with prominent CTA card linking to dedicated cluster page
- CTA card design:
  - Distinct background color (light blue suggested)
  - Icon + "Deep Dive: [Topic Name]"
  - Brief descriptor + arrow
  - Shows target URL

**Audience Callout Boxes** (within body)
- Two side-by-side boxes: "For Parents" and "For Teachers"
- Distinct background colors (green for parents, blue for teachers)
- Icon prefix (🏠 / 🏫)
- Contextually relevant tips per audience
- Appears 2-3 times throughout long content

**FAQ Section** (accordion)
- 5-8 frequently asked questions
- Expandable/collapsible
- FAQPage schema markup
- Targets "People Also Ask" boxes

**Cluster Index Grid**
- Visual index of all cluster pages in this silo
- 3-col grid desktop, 2-col tablet, 1-col mobile
- Each card: topic name + "Read Guide" link
- Shows full silo structure at a glance

**Cross-Silo Links**
- 3 cards linking to related silos
- Each: icon + silo name + "Learn More" link
- Builds horizontal link equity

**Content Requirements:**
- 3,000-5,000 words
- Link to every cluster page in the silo
- 3-5 cross-silo links
- Updated quarterly
- Stats/research citations preferred

---

### 4. Article/Cluster Page Template

**Applied To:** Individual articles within silos (e.g., `/skills/cvc-words/blending-activities/`)

**Layout:** Two-column (content 65%, sidebar 35%)

**Article Header:**
- Breadcrumb trail (Home > Silo > Cluster > Article)
- Silo tag pill(s)
- H1 title (must contain primary keyword in first 60 characters)
- Meta: Published date, updated date, read time
- Author byline: avatar, name, credentials, bio link

**Key Answer Box** (first content element)
- Distinct background color to stand out
- 40-60 words
- Direct answer to core question
- Critical for AI extraction/GEO

**Main Content Column:**
- Body prose with clear H2/H3 hierarchy
- 3-5 inline internal links per 1,000 words
- Descriptive anchor text (never "click here")
- Images with descriptive alt text
- Audience callout boxes appear inline where relevant
- HowTo schema for instructional content (numbered steps)

**Sticky Sidebar Contains (in order):**
1. **"In This Article"** jump links (highlights active section)
2. **"This Skill's Guide"** box → links to parent cluster + pillar page
3. **"Related Articles"** → 3-4 from same cluster (auto-populated by tag)
4. **Newsletter CTA** (compact form)

**Post-Content Modules (below article body):**

1. **Key Takeaways Box**
   - 3-5 bullet summary
   - Structured for AI extraction

2. **Next Steps / Reading Path**
   - "Now that you've learned X, explore:"
   - Previous/Next topic navigation within cluster
   - Logical sequential learning path

3. **Related Articles Grid**
   - 4 cards (2×2 grid)
   - Mix of same-cluster and cross-silo
   - Each: thumbnail + silo pill + title

4. **Comments/Discussion** (optional)
   - Moderated comments
   - Adds user-generated content signals

**Content Requirements:**
- 1,500-2,500 words
- Minimum 3 internal links (preferably 5-8)
- Updated semi-annually or when outdated
- Schema: Article, BreadcrumbList, HowTo (if applicable), Person (author)

---

### 5. Reviews Hub Page (`/reviews/`)

**Purpose:** Filterable directory of all 58+ app and program reviews

**Layout:**

**Hero + Intro**
- H1: "Phonics App & Program Reviews"
- Subheading: scoring methodology description
- "How We Rate" link (opens modal or goes to /about/review-process/)

**Editor's Picks Row**
- 3 featured review cards
- Labels: "Best Overall", "Best for Beginners", "Best Free"
- Prominent score badge
- Update quarterly

**Filter Bar (sticky on scroll)**
- Horizontal filter row with dropdowns:
  - Age Group: 3-4, 4-5, 5-6, 6-7, 7+
  - Platform: iOS, Android, Web, Desktop
  - Price: Free, Freemium, Paid, Subscription
  - Rating: 4+, 3+, All
  - Sort: Top Rated, Newest, Price (Low-High)
- Filters update results via JS, no page reload
- URL parameters for shareability (e.g., `/reviews/?age=4-5&platform=ios`)

**Review Grid**
- 3-col grid desktop, 2-col tablet, 1-col mobile
- Each card:
  - App icon (40×40px, top left)
  - Score badge (top right, prominent)
  - App name (bold)
  - 1-line description
  - Tag pills: age, platform, price
  - "Read Full Review" link
- Uniform card heights
- Paginate at 12 per page
- Show total count: "Showing 12 of 58 reviews"

**Comparison Tables**
- Section below grid: "Compare Top Apps"
- Pre-built table with 4-5 top apps
- Columns: App, Score, Price, Ages, Platform
- Links to individual reviews
- Targets "X vs Y" comparison queries

**Schema:** CollectionPage, ItemList, BreadcrumbList

---

### 6. Single Review Page Template (`/reviews/[app-name]/`)

**Purpose:** Standardized, structured app/program review following consistent rubric

**Review Header:**
- App icon (large, 70×70px, left)
- H1: "[App Name] Review (2026)"
- Meta: Reviewer name + credentials, updated date
- Tag pills: age range, platforms, price
- Overall Score Badge (dominant visual, right): large circle with score

**Score Breakdown Section:**
- Visual bar chart or gauges
- 5 criteria (customizable based on review rubric):
  - Instruction Quality: X.X / 5
  - Usability: X.X / 5
  - Engagement: X.X / 5
  - Content Depth: X.X / 5
  - Value for Money: X.X / 5
- Each bar shows score visually + numerically

**Quick Verdict Box**
- Distinct background (light green)
- 2-3 sentence summary
- "Our Verdict:" label
- Direct answer for AI extraction

**Pros/Cons (side-by-side)**
- Left column: ✓ Pros (green accent)
- Right column: ✗ Cons (red accent)
- 3-4 bullets each

**Detailed Review Body**
- 1,500-2,500 words
- H2 sections for each scoring criterion
- Screenshots/images where relevant
- Inline links to related skill/teaching pages (not just to other reviews)

**Bottom Sections:**
1. **Final Recommendation**
   - "Best for:" specific audience/use case
   - "Skip if:" deal-breakers

2. **Alternatives to Consider**
   - 3 cards linking to comparable reviews
   - Brief comparison: "If you want X instead, try Y"

3. **FAQ** (optional, 3-5 questions specific to that app)

**Schema:** Review, SoftwareApplication (or Product), AggregateRating, BreadcrumbList

---

### 7. Audience Landing Pages (`/for-parents/`, `/for-teachers/`)

**Critical Distinction:** These are NOT content archives. They are curated entry points that guide each audience into the topic silos.

**Purpose:** Provide audience-specific framing and reading paths

**Layout:**

**Hero**
- Warm, empathetic headline
- H1 example: "Phonics for Parents: Your Guide to Teaching Your Child to Read"
- Subheading: value proposition
- Illustration: parent/child reading (for parents) or classroom scene (for teachers)
- CTA: "Start Here: What is Phonics?" link

**Age/Stage Pathway (For Parents) OR Teaching Context (For Teachers)**

**Parents version:**
- Visual timeline or card grid
- 4 age groups: Pre-Readers (3-4), Beginning (4-5), Developing (5-7), Advancing (7+)
- Each card:
  - Icon + age label
  - Key skills for that age
  - "View Path" → expands to show 5-8 ordered articles from across silos
- Progressive disclosure: collapsed by default, expands on click

**Teachers version:**
- Context-based pathways:
  - New to phonics instruction
  - Planning a scope & sequence
  - Differentiating for struggling readers
  - Assessing phonics skills
  - Professional development
- Each pathway: 4-6 curated articles in recommended reading order

**Expanded Path View:**
- Shows when user selects an age/context
- Ordered list (1, 2, 3...) of articles to read
- Each item: number badge, article title, silo tag pill, URL preview
- Clear instructional design: "Start here, then here, then here"

**Popular Resources Grid**
- 6 cards (2×3 grid)
- Most relevant content for that audience across all silos
- Different selection for parents vs teachers
- Each: thumbnail + silo pill + title + read time

**Recommended Apps (Parents) / Tools (Teachers)**
- 3 top-rated items from reviews silo
- Filtered for that audience's context

**Newsletter CTA**
- Full-width band
- Audience-specific messaging
- Pre-selects "Parent" or "Teacher" in dropdown

**No Unique Content:** Every link goes into existing silo content. The value is curation + framing.

**Schema:** CollectionPage, BreadcrumbList

---

### 8. Glossary

**Two Components:**

**Glossary Hub (`/glossary/`):**
- H1: "Phonics Glossary — Key Terms Explained"
- Alphabetical index with anchor links (A-Z buttons)
- All terms visible on single page for crawlability
- Each term entry (on hub):
  - Term name (bold)
  - 1-sentence definition
  - "Read more →" link to dedicated term page

**Individual Term Page (`/glossary/[term]/`):**
- Breadcrumb: Home > Glossary > Term
- H1: "What is a [Term]?"
- Definition box (highlighted background): formal definition
- 2-3 paragraphs: explanation, examples, why it matters, common misconceptions
- "Learn More About [Term]:" section → links to 3-5 articles where term is discussed in depth
- "Related Terms:" pills linking to other glossary terms

**Purpose:** Dual function:
1. User reference tool
2. Internal linking infrastructure (link from first mention in every article)

**Target:** 50-80 terms

**Schema:** DefinedTermSet (hub), DefinedTerm (each term page)

---

### 9. Global Header (All Pages)

**Sticky:** Yes, remains visible on scroll

**Desktop Layout:**
```
[Logo]                    [Nav Item] [Nav Item] [Nav Item] [Nav Item] [Nav Item] [Nav Item] [Nav Item]                    [Search Icon] [Newsletter CTA Button]
```

**Height:** 64px desktop, 56px mobile

**Components:**
- **Logo:** Phonics.org wordmark, links to `/`
- **7 Nav Items:** Phonics 101 | By Skill | For Parents | For Teachers | Struggling Readers | Reviews | Resources
  - Each triggers mega menu on hover (desktop) or tap (mobile)
- **Search Icon:** Opens search overlay or goes to `/search/`
- **Newsletter CTA:** Button style, opens signup modal or scrolls to footer form

**Mobile (<768px):**
- Hamburger icon (right side)
- Opens full-screen left drawer
- Accordion-style navigation with expandable sections

**Design Specs:**
- Background: solid color or subtle transparency (decide based on brand)
- Drop shadow when sticky (subtle, 0 2px 8px rgba(0,0,0,0.1))
- Active page nav item: underline or color change

---

### 10. Global Footer (All Pages)

**4-Column Layout (Desktop):**

**Column 1: About**
- Section heading: "About Phonics.org"
- Mission statement (2-3 sentences)
- Links:
  - About Us
  - Our Team
  - Editorial Standards
  - Contact

**Column 2: Explore**
- Section heading: "Explore"
- Links to all 7 silo pillar pages:
  - Phonics 101
  - Phonics Skills
  - Teaching Phonics
  - Learning at Home
  - Struggling Readers
  - App Reviews
  - Science of Reading

**Column 3: Popular**
- Section heading: "Popular Resources"
- Links to 8-10 highest-value pages:
  - What is Phonics?
  - CVC Words Guide
  - Best Phonics Apps
  - Dyslexia & Phonics
  - Scope & Sequence
  - Teaching Phonics at Home
  - (etc.)

**Column 4: Connect**
- Section heading: "Stay Connected"
- Newsletter signup (compact):
  - Email input
  - Audience dropdown
  - Subscribe button
- Social icons (if applicable):
  - Facebook, Instagram, Pinterest, YouTube

**Bottom Bar:**
- Single row, smaller text
- Left: © 2026 Phonics.org
- Center: Privacy Policy | Terms of Use | Sitemap
- Right: "Designed by [Studio]" (optional)

**Mobile:** Stacks into single column, same order

**Design Specs:**
- Dark background recommended (not black, consider dark brand color)
- Light text
- Generous padding (60px top/bottom desktop)
- Max content width 1200px, centered

---

## Component Library Specifications

The following reusable components should be designed as a system:

### 1. Content Cards
**Used:** Homepage, hub pages, related articles grids

**Variants:**
- **Article Card:** Thumbnail (4:3 ratio) + Silo Pill + Title + Excerpt + Arrow
- **Review Card:** App Icon + Score Badge + Title + Description + Tag Pills + Link
- **Silo Entry Card:** Icon + Silo Name + Description + "Explore" link
- **Compact Card:** Title + Silo Pill + Link (for sidebars)

**Design Specs:**
- Border: 1px solid or subtle shadow
- Border radius: 6-8px
- Padding: 12-16px
- Hover state: subtle lift (translate Y -2px) + shadow increase
- Title: bold, 16-18px
- Excerpt: 14px, 2-line truncation
- Maintain uniform heights in grids via flexbox

### 2. Tag Pills
**Used:** Throughout site for silo tags, audience tags, metadata

**Design:**
- Inline-block
- Background: light version of silo color (or neutral gray for generic tags)
- Text: dark, bold, 10-12px, uppercase or small caps
- Padding: 4px 10px
- Border radius: 12px (fully rounded ends)
- No border

**Variants:**
- Silo tag (color-coded)
- Audience tag (parent/teacher)
- Age tag
- Platform tag
- Price tag

### 3. Score Badge
**Used:** Reviews hub, single review pages

**Design:**
- Circular, 40-64px diameter depending on context
- Background: green spectrum (lighter for lower scores, darker for higher)
- Score: large, bold, centered (e.g., "4.7")
- Text below (optional): "Overall Score" in small text

### 4. CTA/Link Cards
**Used:** Pillar pages (linking to clusters), cross-silo links, next steps

**Design:**
- Distinct background color (light blue suggested for cluster links)
- Padding: 16px
- Border radius: 8px
- Left side: Icon + bold title + descriptor
- Right side: Arrow or pill showing URL
- Full-width or content-width depending on context
- Clickable as entire block

### 5. Callout Boxes
**Used:** Article pages for audience-specific tips

**Design:**
- Border left: 4px solid accent color
- Background: light tint of accent color
- Padding: 16px
- Icon prefix: emoji or small icon (🏠 for parents, 🏫 for teachers)
- Heading: Bold, 14px
- Content: 12-14px

**Variants:**
- Parent callout (green accent)
- Teacher callout (blue accent)
- Note/tip (yellow/amber)
- Definition (purple)

### 6. Accordion/FAQ
**Used:** Pillar pages, review pages

**Design:**
- Full-width blocks
- Border bottom: 1px solid light gray
- Padding: 12px 0
- Question: bold, 14-16px
- Answer: regular, 14px, revealed below on expand
- Expand icon: ► (collapsed) / ▼ (expanded), right-aligned
- Smooth expand/collapse animation (200ms)

### 7. Breadcrumbs
**Used:** All pages except homepage

**Design:**
- Horizontal row
- Separator: > or /
- Non-clickable items: gray text
- Clickable items: brand color, underline on hover
- Font size: 12-14px
- Margin bottom: 16px
- Mobile: allow wrapping if needed, smaller font

### 8. Button System
**Hierarchy:**

- **Primary CTA:** Solid fill, brand color, bold text, 12-16px padding, border radius 6-8px
  - Used for: Newsletter signup, main page CTAs

- **Secondary CTA:** Outline style, brand color border/text, same padding
  - Used for: "Learn More", "View All"

- **Tertiary/Text Link:** No background, brand color text, arrow suffix (→)
  - Used for: "Read More", inline navigation

**States:** Default, hover (darken/lift), active (depress), disabled (gray out)

---

## Content Strategy & Writing Guidelines

### Voice & Tone
- **Authoritative but accessible:** Expert guidance without academic jargon
- **Parent-focused pages:** Warm, encouraging, empowering ("You can do this")
- **Teacher-focused pages:** Professional, efficient, solution-oriented
- **Avoid:** Condescension, overly sales-y language, edu-babble

### SEO Content Requirements

**For All Pages:**
- H1 contains primary keyword in first 60 characters
- Meta descriptions: 150-160 characters, compelling, includes keyword
- First paragraph (40-60 words) directly answers the core query
- Internal links use descriptive anchor text with varied phrases
- Images have descriptive alt text (not "image123.jpg")

**For Pillar Pages:**
- 3,000-5,000 words
- Cover topic comprehensively
- Include statistics (1 per 150-200 words)
- Link to every cluster page in the silo
- FAQ section with 5-8 questions
- Updated quarterly

**For Articles:**
- 1,500-2,500 words
- 3-5 internal links per 1,000 words
- Clear H2/H3 structure
- Key takeaways box at end
- Updated semi-annually

**For GEO (AI Search Optimization):**
- Direct answer in first 60 words (highlighted in design)
- High statistic density
- Structured data markup (schema) on all pages
- Citations to authoritative sources
- Bulleted lists and tables (AI-friendly formats)

### Required Metadata Per Article
- Author name + credentials
- Published date
- Updated date (if different)
- Read time estimate
- Silo tag(s)
- Audience tag(s) where applicable

---

## Conversion Strategy

### Multiple Conversion Paths

**Primary Conversions:**

1. **Newsletter Signup** (micro-conversion)
   - Appears: Homepage hero, homepage dedicated section, article sidebars, footer, audience pages
   - Form: Email + Dropdown (Parent/Teacher/Other)
   - Value prop: "Get weekly phonics tips"
   - Follow-up: Segmented email drip → eventual reading.com offer

2. **Reading.com Traffic** (macro-conversion)
   - Subtle, contextual mentions in articles where genuinely relevant
   - "Tools & Resources" section in footer could include reading.com link
   - Consider exit-intent popup: "Ready for a complete reading program?"
   - NOT aggressive - maintain editorial credibility

3. **Newsletter Subscriber → Reading.com Lead**
   - Email nurture sequence
   - After 3-4 value emails, introduce reading.com offer
   - Track conversion rate from newsletter subscriber to reading.com sign-up

**Conversion Tracking:**
- Newsletter signup by source (homepage, article, footer, etc.)
- Click-through to reading.com by page/section
- Time on site and pages per session (engagement)
- Return visitor rate

**Design Consideration:** Balance lead generation with editorial credibility. Too many CTAs will hurt trust and SEO performance. Primary focus = value and authority, conversions = secondary.

---

## Schema Markup Requirements

Every page type must include appropriate structured data:

| Page Type | Required Schema Types |
|-----------|----------------------|
| Homepage | Organization, WebSite, SiteNavigationElement |
| Pillar Page | Article, BreadcrumbList, FAQPage |
| Article | Article, BreadcrumbList, Person (author), HowTo (if applicable) |
| Review | Review, Product (or SoftwareApplication), AggregateRating, BreadcrumbList |
| Reviews Hub | CollectionPage, ItemList, BreadcrumbList |
| Glossary Hub | DefinedTermSet |
| Glossary Term | DefinedTerm |
| Audience Landing | CollectionPage, BreadcrumbList |

**Implementation:** Designer should note schema markup points in designs. Developer implements actual JSON-LD code.

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-4)
**Goal:** Fix critical defects and establish structural framework

**Design Deliverables:**
- Complete component library (cards, pills, buttons, callouts, breadcrumbs)
- Global header with mega menu system (all 7 menus fully designed)
- Global footer
- Homepage (complete)
- 1 pillar page template (fully designed, can be adapted for all 7)
- 1 article page template

**Development:**
- Implement new URL structure with 301 redirects
- Build component library in WordPress
- Deploy header/footer globally
- Create About page
- Fix broken Phonics 101 hub links
- Add author bios
- Implement schema markup site-wide

### Phase 2: Core Pages (Weeks 5-12)
**Goal:** Build all 7 pillar pages and primary navigation

**Design Deliverables:**
- Reviews hub page
- Single review template
- Audience landing page template (adapt for parents/teachers)
- Glossary hub + term page template
- Mobile responsive designs for all above

**Development:**
- Build all 7 pillar pages
- Restructure existing articles into new URL hierarchy
- Implement related articles widgets
- Build reviews filtering system
- Create audience pathway interactive elements
- Build glossary with 30-50 terms

### Phase 3: Content Expansion (Months 3-6)
**Goal:** Fill content gaps, deepen clusters

**Content Work:**
- Write missing high-value articles
- Expand each cluster to 10-15+ articles
- Create worksheets/printables
- Add video content (if budget allows)

**Design Support:**
- Printable worksheet templates
- Video player/gallery component designs
- Interactive tool designs (if applicable)

### Phase 4: Optimization (Months 6-12)
**Goal:** Refine, optimize, scale

**Activities:**
- A/B test conversion elements (CTA placement, newsletter messaging)
- Analyze user behavior (heatmaps, session recordings)
- Expand high-performing clusters to 20+ articles
- Build backlink acquisition assets
- Monitor AI citation share
- Iterate on designs based on data

---

## Deliverables Expected from Designer

### Required Design Files
1. **Component Library**
   - All reusable components documented
   - Multiple states shown (default, hover, active, disabled)
   - Responsive behavior noted
   - Export as Figma component library (or equivalent)

2. **Page Mockups (Desktop + Mobile)**
   - Homepage
   - 1 Pillar Page (representative of all 7)
   - 1 Article Page
   - Reviews Hub
   - 1 Single Review Page
   - 1 Audience Landing Page
   - Glossary pages
   - Header with all 7 mega menus shown
   - Footer

3. **Brand Guidelines Document**
   - Color palette with hex codes
   - Typography system (font families, sizes, weights, line heights)
   - Spacing/grid system
   - Icon library or sourcing (if custom icons)
   - Image style guidelines
   - Logo usage guidelines

4. **Responsive Breakpoint Documentation**
   - How layouts adapt at 768px and other key breakpoints
   - Mobile menu behavior
   - Grid system breakpoints

5. **Interaction Specifications**
   - Mega menu open/close behavior
   - Accordion expand/collapse
   - Filter interactions
   - Sticky header behavior
   - Modal/overlay behavior (if any)
   - Hover states and transitions

6. **Developer Handoff Package**
   - All assets exported (logos, icons, images)
   - CSS specs (colors, fonts, shadows, borders)
   - Spacing/padding specs
   - Component HTML structure suggestions
   - Accessibility notes (color contrast, focus states, ARIA)

---

## Success Criteria

### User Experience Metrics
- ✓ All content reachable in ≤ 3 clicks from homepage
- ✓ Bounce rate < 50% (currently likely 60-70%+)
- ✓ Pages per session > 3.5 (target)
- ✓ Average session duration > 3 minutes
- ✓ Mobile usability score > 90 (Google)

### SEO Metrics (6-month targets)
- ✓ 30% increase in organic traffic
- ✓ First-page rankings for 20+ target keywords
- ✓ Average position improvement of 10+ spots for priority keywords
- ✓ AI citation/mention in ChatGPT, Perplexity for phonics queries

### Technical Metrics
- ✓ Lighthouse Performance score > 85 mobile, > 90 desktop
- ✓ All pages pass Core Web Vitals
- ✓ 100% of pages have required schema markup
- ✓ Zero broken internal links
- ✓ All old URLs properly 301 redirected

### Business Metrics
- ✓ Newsletter signups: 500+/month (set baseline first)
- ✓ Reading.com referral traffic: 20% increase
- ✓ Email → reading.com conversion rate: 5%+ (of newsletter subscribers)

---

## Reference Sites (Competitive Benchmarks)

**Primary Benchmark:** [Reading Rockets](https://www.readingrockets.org/)
- Study their mega menu system
- Note their topic hub structure
- Analyze their internal linking patterns
- Observe breadcrumb and navigation consistency

**Secondary References:**
- [LD Online](https://www.ldonline.org/) - educational authority signals
- [Understood.org](https://www.understood.org/) - audience-specific pathways
- [Khan Academy](https://www.khanacademy.org/) - learning path design
- [Wirecutter](https://www.nytimes.com/wirecutter/) - review structure and trust signals

---

## Questions for Designer

Before starting, please clarify:

1. **Timeline:** What is your estimated timeline for component library + core page mockups?

2. **Tooling:** Will you deliver in Figma, Sketch, Adobe XD, or other? (Preference: Figma for developer handoff)

3. **Scope Confirmation:** Are you comfortable with:
   - Designing mega menu system with 7 different menus?
   - Creating extensive component library?
   - Designing responsive layouts for 8+ page types?
   - Providing brand identity development (colors, typography, logo treatment)?

4. **Collaboration:** How many review/feedback cycles are included?

5. **Assets:** Will you provide:
   - Custom icons?
   - Illustration sourcing/direction?
   - Photography sourcing/direction?
   - Or should we source these separately?

6. **Accessibility:** Are you familiar with WCAG 2.1 AA standards and can you ensure color contrast compliance?

---

## Next Steps

1. **Designer reviews this PDR** and asks clarifying questions
2. **Kickoff meeting** to align on brand direction, timeline, priorities
3. **Designer creates mood boards / style exploration** (2-3 directions) for feedback
4. **Designer builds component library** once direction is approved
5. **Designer creates high-fidelity mockups** for priority pages (Phase 1)
6. **Review cycle** with stakeholders
7. **Designer prepares developer handoff package**
8. **Development begins** on Phase 1 while designer continues Phase 2 designs

---

## Appendix: Quick Reference

### 7 Content Silos
1. Phonics 101 (`/phonics/`)
2. Phonics Skills (`/skills/`)
3. Teaching Phonics (`/teaching/`)
4. Learning at Home (`/home/`)
5. Struggling Readers (`/support/`)
6. Reviews (`/reviews/`)
7. Science of Reading (`/science-of-reading/`)

### Key Page Types
- Homepage
- Pillar/Hub Page (7 variations)
- Article/Cluster Page
- Reviews Hub
- Single Review
- Audience Landing (2 variations)
- Glossary Hub + Term Pages
- Utility Pages (About, Contact, FAQ)

### Primary Audiences
- **Parents:** Empowering, warm, action-oriented
- **Teachers:** Professional, efficient, solution-focused

### Top SEO Priorities
1. Internal linking infrastructure (related posts, breadcrumbs, cross-silo links)
2. Pillar-cluster content architecture
3. Mega menu exposing site depth
4. Schema markup on all pages
5. Direct answer boxes for GEO/AI search

### Conversion Goals
1. Newsletter signups (primary)
2. Reading.com referrals (secondary)
3. Email nurture → reading.com conversion (tertiary)

---

**Document Version:** 1.0
**Last Updated:** February 25, 2026
**Contact:** Jordan Wade (PM)