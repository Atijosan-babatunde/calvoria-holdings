import Reveal from "./Reveal";
import { Building2, Users, Compass, ShieldCheck } from "lucide-react";

const TRAITS = [
  { icon: Building2, label: "Independently Owned" },
  { icon: Users, label: "Operator-Led" },
  { icon: Compass, label: "Methodical by Design" },
  { icon: ShieldCheck, label: "Built for the Long Run" },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section section-alt">
      <div className="container">
        <Reveal className="manifesto-head" as="div">
          <span className="eyebrow">Who We Are</span>
          <h2>A steady, capable home for good businesses.</h2>
        </Reveal>

        <div className="manifesto-body">
          <Reveal className="manifesto-copy">
            <p>Calvoria Holdings is an independently owned acquisition and holding company built around acquiring, operating and growing established businesses with solid fundamentals and room to grow further.</p>
            <p>
              We don&apos;t sit on the sidelines. We are operators at heart, with a deliberate, structured way of learning how a business runs, where its value really comes from, and where performance can be lifted. Our background spans business analysis, operating model design, process improvement and technology-led change — which means we look well past the spreadsheet. We examine how a business
              functions at every layer: its customers, people, workflows, systems, data, governance, and the way revenue actually moves through it.
            </p>
            {/* <p style={{ marginBottom: 0 }}>
              That gives us a genuine edge when it comes to acquiring and scaling a business. We
              can spot what&apos;s already working, protect it, and layer in just enough structure
              to help the business grow without losing what made it work in the first place.
              We&apos;re especially drawn to owner-led businesses where the founder is weighing
              succession, retirement, a phased exit, or simply wants a partner to help carry the
              business into its next stage.
            </p> */}
          </Reveal>

          <div className="manifesto-rule" />

          <Reveal as="div" className="manifesto-rail">
            {TRAITS.map(({ icon: Icon, label }) => (
              <div className="rail-item" key={label}>
                <Icon size={18} className="rail-icon" />
                <span>{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
