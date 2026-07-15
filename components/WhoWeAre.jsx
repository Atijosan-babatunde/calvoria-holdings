import Reveal from "./Reveal";

const TRAITS = [
  {
    image: "/images/who-independent.jpg",
    title: "Independently Owned",
    desc: "We're not constrained by a fund's investment cycle or pressured by an exit deadline. Our decisions are driven by long-term judgment — patience to strengthen businesses over time, and conviction to invest decisively when the opportunity is right.",
  },
  {
    image: "/images/who-operator.jpg",
    title: "Operator-Led",
    desc: "We don't just oversee the business — we become part of it, working alongside the people who know it best. The best opportunities to create value aren't found in presentations; they're uncovered by being close enough to see what others miss.",
  },
  {
    image: "/images/who-structured.jpg",
    title: "Methodical by Design",
    desc: "Before accelerating growth, foundations are established — people, processes, systems, financial controls, governance. Nothing is overlooked. We believe strong businesses aren't built on momentum, but on the discipline and structure that allow growth to last.",
  },
  {
    image: "/images/who-longterm.jpg",
    title: "Built for the Long Run",
    desc: "Every business carries a legacy worth preserving. Our role isn't to reshape it for a quick exit, but to strengthen it for the long term. We invest with patience, grow with purpose and clarity, and make long-term commitments to building lasting value.",
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Who We Are</span>
          <h2>A responsible home for good businesses</h2>
          <p>Calvoria Holdings is a privately held acquisition and holding company focused on acquiring, operating and growing established businesses with strong fundamentals and long-term potential.</p>
        </Reveal>

        <div className="who-we-are-rule" />

        <div className="who-we-are-grid">
          {TRAITS.map(({ image, title, desc }) => (
            <Reveal className="who-we-are-card" key={title}>
              <div className="who-we-are-photo">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
