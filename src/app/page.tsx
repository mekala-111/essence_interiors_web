import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AppLink from "@/components/AppLink";
import Reveal from "@/components/Reveal";
import ServicesAccordion from "./ServicesAccordion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import TestimonialsSection from "./TestimonialsSection";
import HomeInquiryForm from "./HomeInquiryForm";
import HeroBg from "./HeroBg";
import styles from "./page.module.css";

const DESCRIPTION =
  "The best Interior Designers in Hyderabad. We provide residential interior designs as well as residential architectural designs. Our projects include luxury";

export const metadata: Metadata = {
  title: { absolute: "Home - Essence Interior Designers" },
  description: DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "https://essenceinteriors.co.in/" },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Home - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/",
    siteName: "Essence Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Essence Interior Designers",
    description: DESCRIPTION,
  },
  keywords: [
    "interior designers in Hyderabad",
    "interior design company in Hyderabad",
    "home interior designers in Hyderabad",
    "home interiors in Hyderabad",
    "interior design services in Hyderabad",
    "luxury interior designers in Hyderabad",
    "residential interior designers in Hyderabad",
    "commercial interior designers in Hyderabad",
    "modular kitchen designers in Hyderabad",
    "office interior designers in Hyderabad",
    "villa interior designers in Hyderabad",
    "turnkey interior design in Hyderabad",
    "interior design company Hyderabad",
  ],
};

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Spaces Designed" },
  { value: "5 Years", label: "Warranty" },
  { value: "End-to-End", label: "Execution" },
];

const INTENTION_VALUES = [
  {
    title: "Exclusive Environments",
    icon: "workspace_premium",
    desc: "Unique, exclusive interiors in Hyderabad that reflect class and a luxurious lifestyle — with you involved at every stage.",
  },
  {
    title: "Homes With Heart",
    icon: "favorite",
    desc: "A home is where you spend time with loved ones, watch children grow, and give parents a peaceful place to live.",
  },
  {
    title: "Quality Interiors",
    icon: "verified",
    desc: "A professional design team delivers quality interiors for any scale, with the right materials and market insight.",
  },
  {
    title: "New Age Styles",
    icon: "auto_awesome",
    desc: "Creative, new-age interiors that still feel classic — ultra-modern trends adapted to how you actually live.",
  },
];

const PROJECT_GRID = [
  { col: "1 / span 3", row: "1 / span 2" },
  { col: "4 / span 3", row: "1 / span 1" },
  { col: "4 / span 1", row: "2 / span 1" },
  { col: "5 / span 1", row: "2 / span 1" },
  { col: "6 / span 1", row: "2 / span 1" },
  { col: "1 / span 3", row: "3 / span 1" },
];

const PROJECTS = [
  { name: "The Kavuri Residence", location: "Hyderabad", category: "Residential" },
  { name: "Aparna Sky Villa", location: "Gachibowli", category: "Villa" },
  { name: "Lumen Café", location: "Jubilee Hills", category: "Restaurant" },
  { name: "North Star Offices", location: "HITEC City", category: "Commercial" },
  { name: "The Wren Apartment", location: "Banjara Hills", category: "Residential" },
  { name: "Meridian Boutique", location: "Kondapur", category: "Retail" },
].map((p, i) => ({ ...p, ...PROJECT_GRID[i] }));

const DIFFERENCE_VALUES = [
  {
    icon: "workspace_premium",
    title: "Award Winning",
    desc: "Led by trusted interior designer CH. Sudheera. Over a decade of work helping 1000+ home makers across Hyderabad.",
  },
  {
    icon: "verified",
    title: "Quality",
    desc: "We source directly from manufacturers so every material and finish is genuine, not compromised.",
  },
  {
    icon: "payments",
    title: "Affordable Luxury",
    desc: "Premium interiors at a fair price in its class — luxury that still delivers real value.",
  },
  {
    icon: "support_agent",
    title: "After Sales Support",
    desc: "A 5-year warranty on our work, plus AMC after that — a first in the interior design industry.",
  },
  {
    icon: "design_services",
    title: "Lifestyle Based Design",
    desc: "Full theme-based interiors, not just woodwork — designed around how you actually live.",
  },
  {
    icon: "event_available",
    title: "Free Consultation",
    desc: "An honest, in-depth consultation at our experience centre — completely free.",
  },
];

const TRUST_STATS = [
  { icon: "diversity_3", value: "10+", label: "Years of Experience" },
  { icon: "apartment", value: "250+", label: "Projects Completed" },
  { icon: "public", value: "50+", label: "Cities Served" },
  { icon: "favorite", value: "98%", label: "Client Satisfaction" },
];

const MATERIALS = [
  { name: "Natural Stone", icon: "diamond", desc: "Timeless elegance with unique patterns and natural beauty." },
  { name: "Fine Woods", icon: "water_drop", desc: "Rich textures and warmth that bring nature indoors." },
  { name: "Premium Fabrics", icon: "grid_4x4", desc: "Luxurious textiles that add comfort, depth and softness." },
  { name: "Metal Finishes", icon: "auto_awesome", desc: "Refined metals that add a touch of sophistication." },
  { name: "Artisan Finishes", icon: "texture", desc: "Handcrafted finishes that celebrate craft and detail." },
  { name: "Durable & Sustainable", icon: "shield", desc: "Sustainable choices that ensure beauty for years to come." },
].map((m, i) => ({ ...m, number: `0${i + 1}` }));

const TRUST_POINTS = [
  { label: "Sustainable Choices", icon: "eco" },
  { label: "Premium Quality", icon: "workspace_premium" },
  { label: "Built To Last", icon: "shield" },
  { label: "Designed For You", icon: "design_services" },
];

const PROCESS_STEPS = [
  { title: "Book Free Consultation", icon: "forum", desc: "Discuss your needs, preferences, and budget" },
  { title: "Get Quote", icon: "request_quote", desc: "Get customised quote with material specifications" },
  { title: "Place Order", icon: "local_shipping", desc: "Finalise commercial & let our team take it from here" },
  { title: "Installation Begins", icon: "engineering", desc: "A team of highly trained professionals will build your dream design" },
  { title: "Move-in", icon: "key", desc: "Now cherish your dream home design with Essence Interiors" },
].map((s, i) => ({ ...s, number: `0${i + 1}` }));

const INSPIRATIONS = [
  { name: "Living Rooms", ratio: "4/5" },
  { name: "Bedrooms", ratio: "3/4" },
  { name: "Kitchens", ratio: "1/1" },
  { name: "Dining", ratio: "4/5" },
  { name: "Home Offices", ratio: "3/4" },
  { name: "Luxury Villas", ratio: "1/1" },
  { name: "Commercial", ratio: "4/5" },
  { name: "Restaurants", ratio: "3/4" },
];

export default function HomePage() {
  return (
    <div className={styles.page}>

      <section id="home" className={styles.hero}>
        <HeroBg />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Essence Interiors • Hyderabad</p>
          <h1 className={styles.heroTitle}>
            ESSENCE INTERIORS
            <br />
            IN <em>HYDERABAD</em>
          </h1>
          <p className={styles.heroLede}>
            The best Interior Designers in Hyderabad. We provide residential interior designs as well as
            residential architectural designs. Our projects include luxury villa design (bedroom interior,
            bathroom interior, kitchen interior, hall entrance family living room, space planning), villa
            exterior design (exterior design proposals, boundaries design), and interior landscape design
            (garden, pool design) in Hyderabad.
          </p>
          <div className={styles.heroCtas}>
            <AppLink href="/projects" className={styles.heroCtaPrimary}>
              EXPLORE PROJECTS
            </AppLink>
            <AppLink href="/book-consultation" className={styles.heroCtaSecondary}>
              BOOK A CONSULTATION
            </AppLink>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <p className={styles.scrollLabel}>Scroll</p>
        </div>
      </section>

      <section aria-label="Trust statistics" className={styles.statsSection}>
        <div className={styles.statsBar}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statCell}>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Reveal as="section" id="about" className={styles.story}>
        <div className={styles.storyWatermark}>EI</div>
        <div className={styles.storyGrid}>
          <div className={styles.storyImages}>
            <div className={styles.storyImgMain} />
            <div className={styles.storyImgFloat} />
          </div>
          <div>
            <p className={styles.eyebrow}>Essence Interiors</p>
            <div className={styles.eyebrowDivider} />
            <h2 className={styles.storyHeading}>
              The Leading Interior Designing Company in <em>Hyderabad.</em>
            </h2>
            <p className={styles.storyLede}>
              Our team recreates your wonderful living units to complement the prevailing fashions and trends. We
              focus our creative thought process as well as knowledge to serve you with brilliant designs. Our
              main strength lies in our ability to perfectly combine inspiring ideas and skills. No wonder, our
              efforts are obviously producing striking results for any type of residence, be it upscale or studio.
            </p>
            <p className={styles.storyLede}>
              We believe in providing our clients with the best possible solutions that match their personalities,
              lifestyles and stylistic choice. Armed with beautiful ideas, we create polished, personalized
              settings that infuse comfort and functionality into every aspect. By keeping the theme of every room
              as the backbone of the planning, we as one of the successful residential interior designers in
              Hyderabad do not hesitate to expand our capabilities to bring out the unique environment to which you
              aspire.
            </p>
            <AppLink href="/#about" className={styles.textLink}>
              DISCOVER OUR STORY →
            </AppLink>
          </div>
        </div>
      </Reveal>

      <section aria-label="Crafted With Intention">
        <div className={styles.intentionSplit}>
          <div className={styles.intentionCopy}>
            <p className={styles.eyebrow}>Why Hire Us</p>
            <div className={styles.eyebrowDivider} />
            <h2 className={styles.storyHeading}>
              Why Should You Hire Essence Interior Designers &amp; Decorators?
            </h2>
            <p className={styles.storyLede}>
              The commercial interior design basically reflects the company&apos;s brand &amp; status in the
              society. Our unique interior design ideas for the clients proved us as one of the Best interior
              designers &amp; decorators in Hyderabad. People who need to show their brand image in society through
              sophisticated design spaces &amp; working environment. We have expertise in providing designs for
              commercial spaces that include shopping mall design, corporate office interior design, warehouse
              design, stores, retail outlets, &amp; libraries.
            </p>
            <p className={styles.storyLede}>
              The finished item will be natural looking, dyed, laminated or painted with high-quality paint and is
              made with vacuum-free powder paint. In Essence Interior decorators, we create high-quality modular
              kitchen furniture and kitchen desks with the most advanced space saving plans, the kitchen wall and
              more. We are the best interior designer Hyderabad will give complete interiors to your kitchen at an
              ideal cost.
            </p>
            <AppLink href="/#why-us" className={styles.goldCta}>
              OUR DESIGN PHILOSOPHY <span>→</span>
            </AppLink>
          </div>
          <div className={styles.intentionImg} />
        </div>
        <div className={styles.intentionValuesWrap}>
          <div className={styles.intentionValues}>
            {INTENTION_VALUES.map((v) => (
              <AppLink key={v.title} href="/#why-us" className={styles.intentionValue}>
                <div className={styles.valueCircle}>
                  <span className="ei-icon">{v.icon}</span>
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <div className={styles.valueDivider} />
                <p className={styles.valueDesc}>{v.desc}</p>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <Reveal as="section" id="services" className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesHead}>
            <p className={styles.eyebrow} style={{ color: "#B8863B" }}>
              Our Interior Design Services
            </p>
            <h2 className={styles.servicesHeading}>
              Our Interior Design <em>Services</em>
            </h2>
          </div>
          <ServicesAccordion />
        </div>
      </Reveal>

      <Reveal as="section" id="projects" className={styles.projectsSection}>
        <div className={styles.projectsHead}>
          <div>
            <p className={styles.eyebrow}>Selected Work</p>
            <h2 className={styles.projectsHeading}>Spaces We&apos;ve Brought to Life.</h2>
          </div>
          <AppLink href="/#projects" className={styles.textLink} style={{ whiteSpace: "nowrap" }}>
            VIEW ALL PROJECTS →
          </AppLink>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((p) => (
            <AppLink
              key={p.name}
              href="/#projects"
              className={styles.projectCell}
              style={{ gridColumn: p.col, gridRow: p.row }}
            >
              <div className={styles.projectImg} />
              <div className={styles.projectShade} />
              <div className={styles.projectCaption}>
                <p className={styles.projectMeta}>
                  {p.category} · {p.location}
                </p>
                <h3 className={styles.projectName}>{p.name}</h3>
                <span className={styles.projectLink}>View Project →</span>
              </div>
            </AppLink>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" id="why-us" aria-label="The Essence Difference">
        <div className={styles.diffSplit}>
          <div className={styles.diffCopy}>
            <p className={styles.eyebrow} style={{ marginBottom: 16 }}>
              Why Choose Us
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 24px" }}>
              <span style={{ width: 60, height: 1, background: "rgba(184,134,59,0.5)" }} />
              <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)" }} />
            </div>
            <h2 className={styles.diffHeading}>Why Choose Us?</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 24px" }}>
              <span style={{ width: 24, height: 1, background: "rgba(184,134,59,0.5)" }} />
              <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)" }} />
              <span style={{ width: 24, height: 1, background: "rgba(184,134,59,0.5)" }} />
            </div>
            <p className={styles.storyLede}>
              CH. Sudheera, one of the best interior designers in Hyderabad offers in-depth consultation
              and comprehensive theme-based solution at affordable price in its class.
            </p>
            <AppLink href="/#why-us" className={styles.outlineCta}>
              DISCOVER THE DIFFERENCE <span>→</span>
            </AppLink>
          </div>
          <div className={styles.diffImg} />
        </div>
        <div className={styles.diffValuesWrap}>
          <div className={styles.diffValues}>
            {DIFFERENCE_VALUES.map((d) => (
              <AppLink key={d.title} href="/#why-us" className={styles.diffValue}>
                <span className="ei-icon" style={{ color: "#B8863B", display: "block", marginBottom: 16, fontSize: 34 }}>
                  {d.icon}
                </span>
                <h3 className={styles.diffValueTitle}>{d.title}</h3>
                <div className={styles.diffValueDivider} />
                <p className={styles.diffValueDesc}>{d.desc}</p>
              </AppLink>
            ))}
          </div>
        </div>
        <div className={styles.trustBarWrap}>
          <div className={styles.trustBar}>
            <p className={styles.trustBarQuote}>
              Built on Trust.
              <br />
              <em>Driven by Passion.</em>
            </p>
            <div className={styles.trustBarStats}>
              {TRUST_STATS.map((s) => (
                <div key={s.label} className={styles.trustBarStat}>
                  <span className="ei-icon" style={{ color: "#D2AA68", fontSize: 26 }}>
                    {s.icon}
                  </span>
                  <div>
                    <p className={styles.trustBarValue}>{s.value}</p>
                    <p className={styles.trustBarLabel}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="materials" className={styles.materialsSection}>
        <div className={styles.materialsHead}>
          <p className={styles.eyebrow} style={{ margin: "0 0 16px" }}>
            Materials &amp; Finishes
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "0 0 24px" }}>
            <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
            <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)" }} />
            <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
          </div>
          <h2 className={styles.materialsHeading}>
            Crafted From
            <br />
            <em>The Finest.</em>
          </h2>
          <p className={styles.materialsLede}>
            Exceptional spaces begin with exceptional materials. Every texture, finish, and detail is thoughtfully
            chosen to bring beauty, durability, and timeless elegance to your space.
          </p>
        </div>
        <div className={styles.materialsGrid}>
          {MATERIALS.map((m) => (
            <div key={m.name}>
              <div className={styles.materialImgWrap}>
                <div className={styles.materialImg} />
                <span className={styles.materialNumber}>{m.number}</span>
              </div>
              <div className={styles.materialIconWrap}>
                <span className={`ei-icon ${styles.materialIcon}`}>{m.icon}</span>
              </div>
              <h3 className={styles.materialName}>{m.name}</h3>
              <p className={styles.materialDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.trustPointsWrap}>
          <div className={styles.trustPoints}>
            {TRUST_POINTS.map((t) => (
              <div key={t.label} className={styles.trustPoint}>
                <span className={`ei-icon ${styles.trustPointIcon}`}>{t.icon}</span>
                <span className={styles.trustPointLabel}>{t.label}</span>
              </div>
            ))}
            <AppLink href="/materials-finishes" className={styles.trustPointsCta}>
              EXPLORE MATERIALS <span>→</span>
            </AppLink>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" aria-label="Process" className={styles.processSection}>
        <div className={styles.processHead}>
          <p className={styles.eyebrow} style={{ color: "#D2AA68" }}>
            Our Process
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "0 0 20px" }}>
            <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
            <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)" }} />
            <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
          </div>
          <h2 className={styles.processHeading}>How Our Process Works?</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "0 0 24px" }}>
            <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
            <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)" }} />
            <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
          </div>
          <p className={styles.processLede}>
            At Essence Interiors, our process begins with attentive consultation, followed by comprehensive site
            evaluations. Using cutting-edge technology, we craft personalized concepts reflecting your vision. With
            expert craftsmanship, we bring these designs to life, ensuring superior quality. Finally, we oversee
            seamless installation, guaranteeing your satisfaction every step of the way.
          </p>
        </div>
        <div className={styles.processSteps}>
          <div className={styles.processConnector} />
          {PROCESS_STEPS.map((step) => (
            <div key={step.title} className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className="ei-icon">{step.icon}</span>
              </div>
              <div className={styles.processNumber}>{step.number}</div>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.processCtaWrap}>
          <AppLink href="/book-consultation" className={styles.processCta}>
            BOOK A CONSULTATION <span>→</span>
          </AppLink>
        </div>
        <div className={styles.processFooterRule}>
          <span />
          <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)", flex: "none" }} />
          <span />
        </div>
      </Reveal>

      <Reveal as="section" aria-label="Before and After" className={styles.baSection}>
        <div className={styles.baHead}>
          <p className={styles.eyebrow}>Transforming Spaces</p>
          <h2 className={styles.baHeading}>See What&apos;s Possible.</h2>
        </div>
        <BeforeAfterSlider />
        <div className={styles.baLinkWrap}>
          <AppLink href="/gallery" className={styles.textLink}>
            VIEW MORE TRANSFORMATIONS →
          </AppLink>
        </div>
      </Reveal>

      <Reveal as="section" id="gallery" className={styles.gallerySection}>
        <div className={styles.galleryHead}>
          <p className={styles.eyebrow}>Design Inspiration</p>
          <h2 className={styles.galleryHeading}>Find a Style That Feels Like You.</h2>
        </div>
        <div className={styles.galleryMasonry}>
          {INSPIRATIONS.map((ins) => (
            <AppLink key={ins.name} href="/gallery" className={styles.galleryItem}>
              <div className={styles.galleryImg} style={{ aspectRatio: ins.ratio }} />
              <div className={styles.galleryShade} />
              <p className={styles.galleryLabel}>{ins.name}</p>
            </AppLink>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" id="testimonials" aria-label="Testimonials" className={styles.testimonialsSection}>
        <TestimonialsSection />
      </Reveal>

      <Reveal as="section" id="contact" className={styles.consultSection}>
        <div className={styles.consultGrid}>
          <div className={styles.consultImg} />
          <div className={styles.consultForm}>
            <h2 className={styles.consultHeading}>Book Free Consultation!</h2>
            <HomeInquiryForm />
          </div>
        </div>
      </Reveal>

      <Footer />

      <div className={styles.stickyBar}>
        <a href="tel:+919666199943" className={styles.stickyLink}>
          CALL
        </a>
        <a href="https://wa.me/919666199943" className={styles.stickyLink}>
          WHATSAPP
        </a>
        <AppLink href="/contact" className={`${styles.stickyLink} ${styles.stickyQuote}`}>
          GET QUOTE
        </AppLink>
      </div>
    </div>
  );
}
