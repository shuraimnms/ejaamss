import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FAQSection } from "@/components/site/faq-section";
import { CtaStrip } from "@/components/site/cta-strip";
import {
  Landmark, LineChart, Megaphone, Users2, Building2, Package,
  Cpu, Lightbulb, Scale, GraduationCap, FlaskConical, Layers,
} from "lucide-react";

export const Route = createFileRoute("/aims-scope")({
  head: () => ({
    meta: [
      { title: "Focus & Scope — EJAAMSS" },
      { name: "description", content: "EJAAMSS publishes original research across aerospace engineering, aviation science, maritime technology, naval architecture, transportation systems, intelligent mobility, and allied disciplines." },
      { property: "og:title", content: "Focus & Scope — EJAAMSS" },
      { property: "og:description", content: "Subject areas, methodological standards, and manuscript types accepted by EJAAMSS." },
    ],
    links: [{ rel: "canonical", href: "/aims-scope" }],
  }),
  component: AimsScope,
});

const AREAS = [
  { icon: Cpu, title: "Aerospace Engineering", body: "Aerodynamics, flight dynamics and control, aerospace structures and materials, propulsion systems, astrodynamics, space systems engineering, computational fluid dynamics (CFD), aeroelasticity, avionics, thermodynamics, acoustics, and structural mechanics." },
  { icon: Building2, title: "Aviation Science & Operations", body: "Air traffic management (ATM), airport planning and design, aviation safety and security, human factors in aviation, airline operations and management, aviation meteorology, air transport economics, crew resource management, and unmanned aerial systems (UAS)." },
  { icon: Landmark, title: "Maritime Technology & Engineering", body: "Naval architecture, marine engineering, offshore structures, ship design and hydrodynamics, marine propulsion, marine materials and corrosion, underwater acoustics, subsea engineering, ocean engineering, and autonomous surface ships (MASS)." },
  { icon: Package, title: "Transportation Systems & Logistics", body: "Multimodal transportation, intelligent transportation systems (ITS), supply chain and logistics management, transport economics and policy, public transit systems, railway engineering, traffic engineering, freight transport, and urban mobility." },
  { icon: LineChart, title: "Intelligent Mobility & Autonomous Systems", body: "Autonomous vehicles, connected vehicles (V2X), drone delivery systems, smart port operations, machine learning in transportation, sensor fusion, navigation and guidance systems, robotics in aerospace and marine applications, and autonomous vessel routing." },
  { icon: Lightbulb, title: "Sustainable Transportation & Energy", body: "Alternative fuels, electric and hybrid propulsion (aerospace and marine), emission reduction technologies, sustainable aviation fuel (SAF), green ports and shipping, energy-efficient routing, environmental impact of transportation, and lifecycle assessment." },
  { icon: Scale, title: "Safety, Security & Human Factors", body: "Risk assessment and management, safety management systems (SMS), cybersecurity in transportation, human-machine interface (HMI), accident investigation and reconstruction, ergonomic design, maritime safety regulations, and emergency response planning." },
  { icon: FlaskConical, title: "Emerging Technologies", body: "Advanced materials (composites, nanomaterials), 3D printing in manufacturing, digital twins in aerospace and maritime, Internet of Things (IoT) in transport, blockchain for logistics, quantum computing applications, and space exploration technologies." },
];

const MANUSCRIPT_TYPES = [
  "Original Research Papers",
  "Review Articles",
  "Technical Notes",
  "Case Studies",
  "Conceptual Papers",
  "Theoretical Papers",
  "Thesis Notes",
  "Book Notes",
];

const FAQS = [
  { q: "Do you accept qualitative research?", a: "Yes. EJAAMSS welcomes theoretical, empirical, conceptual, qualitative, quantitative and mixed-method studies that make a meaningful contribution." },
  { q: "Are interdisciplinary papers welcome?", a: "Yes, provided the paper clearly establishes its connection with aerospace, maritime, or transportation and its academic, professional, policy, or societal value." },
  { q: "Can I submit a case study?", a: "Yes. Case studies are one of the accepted manuscript categories alongside original research, reviews, technical notes, conceptual and theoretical papers, thesis notes, and book notes." },
  { q: "Are country- or region-specific studies welcome?", a: "Absolutely — provided the findings are of broader theoretical, empirical, methodological, policy-based, or practical relevance." },
];

function AimsScope() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Focus & Scope"
        title="What EJAAMSS publishes"
        intro="EJAAMSS focuses on the publication of original, authentic, and high-quality research in aerospace engineering, aviation science, maritime technology, naval architecture, transportation systems, intelligent mobility, and allied disciplines."
      />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "About", to: "/about" }, { label: "Focus & Scope" }]} />

        <section className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Focus of the journal</div>
              <p className="mt-2 font-serif text-lg leading-snug">
                Theoretical and practice-oriented research that contributes to academic knowledge, professional understanding, institutional development, policy formulation, business decision-making, and contemporary managerial practices.
              </p>
              <div className="mt-6 rule-gold" />
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Manuscripts accepted</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {MANUSCRIPT_TYPES.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Layers className="mt-0.5 h-3.5 w-3.5 flex-none text-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-semibold">Scope of the journal</h2>
            <div className="mt-2 rule-gold" />
            <p className="mt-4 text-sm text-muted-foreground">
              EJAAMSS welcomes submissions across the following subject areas.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {AREAS.map((a) => (
                <article key={a.title} className="rounded-xl border border-border bg-card p-5 transition hover:border-brand/40 hover:shadow-elev">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-muted text-brand">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-brand/30 bg-brand-muted/20 p-8">
          <h2 className="font-serif text-2xl font-semibold">Scope disclaimer</h2>
          <div className="mt-2 rule-gold" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A manuscript must make a clear contribution to aerospace, aviation, maritime, transportation systems, or an allied discipline. Interdisciplinary papers may be considered when their connection with the journal's scope is adequately established.
          </p>
        </section>

        <div className="mt-16">
          <FAQSection items={FAQS} />
        </div>

        <CtaStrip
          eyebrow="Match our scope?"
          title="Start your submission"
          intro="If your work fits our aims, submit today. Manuscripts are evaluated through external double-blind peer review."
          actions={[
            { label: "Submit a manuscript", to: "/submit", primary: true },
            { label: "Read author guidelines", to: "/author-guidelines" },
          ]}
        />
      </div>
    </SiteLayout>
  );
}
