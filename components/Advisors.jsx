import Reveal from "./Reveal";

const ADVISORS = [
  {
    name: "[Advisor Name]",
    title: "Strategic Advisor",
    company: "[Title / Company]",
    photo: "/images/advisor-1.jpg",
    bio: "[Advisor Name] brings [X] years of experience in corporate strategy, business analysis and project delivery, including hands-on M&A experience of their own.",
  },
  {
    name: "[Advisor Name]",
    title: "Executive Advisor",
    company: "[Title / Company]",
    photo: "/images/advisor-2.jpg",
    bio: "[Advisor Name] brings [X] years of executive leadership across a range of industries, with strong instincts for strategic planning and operational excellence.",
  },
  {
    name: "[Advisor Name], CFP®",
    title: "Financial Advisor",
    company: "[Title / Company]",
    photo: "/images/advisor-3.jpg",
    bio: "[Advisor Name] brings [X] years of financial analysis, planning and strategy experience, including direct work advising business owners and families.",
  },
];

export default function Advisors() {
  return (
    <section id="advisors" className="section section-alt">
      <div className="container">
        <Reveal className="section-heading" as="div">
          <span className="eyebrow">Advisors & Investors</span>
          <h2>Calvoria&apos;s Advisory & Investment Team</h2>
          <p>
            Our advisory and investment team brings a broad range of experience across business
            leadership, operations and finance.
          </p>
        </Reveal>

        <div className="advisors-overlay-grid">
          {ADVISORS.map((a) => (
            <Reveal className="advisor-overlay-card" key={a.name}>
              <div className="photo-wrap">
                <img src={a.photo} alt={a.name} />
                <div className="scrim">
                  <h3>{a.name}</h3>
                  <div className="title">{a.title}</div>
                </div>
              </div>
              <div className="body">
                <div className="company">{a.company}</div>
                <p>{a.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
