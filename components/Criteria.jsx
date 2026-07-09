import Reveal from "./Reveal";
import {
  Building2,
  Settings2,
  Users,
  CheckCircle2,
  Briefcase,
  Home,
  Wrench,
  HeartPulse,
  GraduationCap,
  FileCheck2,
  Hammer,
  Handshake,
  Laptop2,
  Repeat2,
} from "lucide-react";

const BUSINESS_CHARACTERISTICS = [
  "A proven, multi-year trading history",
  "Loyal customers with repeat revenue",
  "Steady or growing demand",
  "Healthy, positive cash flow",
  "A clearly defined product or service",
  "A solid reputation in its market",
  "A capable team or key staff in place",
  "Room to improve operations, systems or scale",
  "Potential to reduce reliance on the founder",
  "A model that could become more repeatable",
];

const OPERATIONAL_CHARACTERISTICS = [
  "Better-designed processes",
  "Clearer roles and accountability",
  "Stronger management information",
  "Room for technology adoption",
  "Automation of manual tasks",
  "Improved onboarding or service delivery",
  "Tighter financial and operational controls",
  "Better sales pipeline management",
  "Smarter use of existing data",
  "More standardised ways of working",
];

const OWNER_SITUATIONS = [
  "Planning for retirement",
  "Weighing a succession decision",
  "Wanting to step back from daily operations",
  "Looking for a buyer who'll protect their legacy",
  "Seeking a partner to professionalise and grow the business",
  "Running a business that's outgrown informal processes",
  "Concerned about continuity for staff and customers",
];

const ACQUISITION_CRITERIA = [
  "Established, recurring revenue",
  "Positive cash flow",
  "A clearly identifiable customer base",
  "Repeat or recurring demand",
  "Healthy margins, or clear room to improve them",
  "Limited dependency on any single customer",
  "A committed team or transferable know-how",
  "Genuine room for operational improvement",
  "A seller who values continuity and a responsible handover",
];

const SECTORS = [
  { icon: Briefcase, label: "Business services" },
  { icon: Home, label: "Property services" },
  { icon: Wrench, label: "Facilities management" },
  { icon: HeartPulse, label: "Healthcare and care-related services" },
  { icon: GraduationCap, label: "Education and training" },
  { icon: FileCheck2, label: "Compliance-led services" },
  { icon: Hammer, label: "Specialist trade services" },
  { icon: Handshake, label: "B2B services" },
  { icon: Briefcase, label: "Professional services" },
  { icon: Laptop2, label: "Technology-enabled service businesses" },
  { icon: Repeat2, label: "Niche consumer services with repeat demand" },
];

export default function Criteria() {
  return (
    <section id="criteria" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">What We&apos;re Looking For</span>
          <h2>Established businesses ready for their next stage</h2>
          <p>
            We look for established businesses with solid foundations and genuine room for
            operational improvement or growth.
          </p>
        </Reveal>

        <Reveal as="div" className="criteria-panels">
          <div className="criteria-panel tone-dark">
            <div className="icon-badge">
              <Building2 size={20} />
            </div>
            <h3>Business Characteristics</h3>
            <ul>
              {BUSINESS_CHARACTERISTICS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="criteria-panel tone-mid">
            <div className="icon-badge">
              <Settings2 size={20} />
            </div>
            <h3>Operational Characteristics</h3>
            <p style={{ marginBottom: 14 }}>
              We&apos;re especially drawn to businesses where value could come from:
            </p>
            <ul>
              {OPERATIONAL_CHARACTERISTICS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="criteria-panel tone-light">
            <div className="icon-badge">
              <Users size={20} />
            </div>
            <h3>Owner Situations We Support</h3>
            <p style={{ marginBottom: 14 }}>We&apos;re a good fit for owners who are:</p>
            <ul>
              {OWNER_SITUATIONS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ---- Sectors of Interest ---- */}
        <Reveal as="div" className="subsection">
          <div className="subsection-heading">
            <span className="eyebrow">Sectors of Interest</span>
            <h3>Where we focus</h3>
            <p>
              We&apos;re open across a wide range of sectors — particularly businesses where better
              structure, process and technology can genuinely move the needle.
            </p>
          </div>
          <div className="sector-columns">
            {SECTORS.map(({ icon: Icon, label }) => (
              <div className="sector-column-item" key={label}>
                <Icon size={17} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---- Acquisition Criteria ---- */}
        <Reveal as="div" className="subsection">
          <div className="subsection-heading">
            <span className="eyebrow">Our Acquisition Criteria</span>
            <h3>At a glance</h3>
            <p>Every opportunity is reviewed on its own merits, but we typically look for:</p>
          </div>
          <div className="criteria-checklist">
            {ACQUISITION_CRITERIA.map((item) => (
              <div className="criteria-checklist-item" key={item}>
                <CheckCircle2 size={15} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="section-footnote">
            We stay flexible on deal structure — it depends on the business, the owner&apos;s
            goals, and what kind of transition makes sense.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
