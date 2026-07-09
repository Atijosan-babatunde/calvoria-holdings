import Reveal from "./Reveal";

export default function Founder() {
  return (
    <section id="founder" className="section">
      <div className="container">
        <Reveal as="div" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Meet the Founder</span>
        </Reveal>

        <Reveal className="founder-editorial" as="div">
          <div className="founder-editorial-photo">
            <img src="/images/founder.jpg" alt="[FOUNDER NAME], Managing Partner" />
          </div>
          <div className="founder-editorial-body">
            <div className="role">Managing Partner</div>
            <h2>[FOUNDER NAME]</h2>
            <div className="subrole">A People-First, Hands-On Operator</div>
            <p>
              [FOUNDER NAME] brings over a decade of leadership experience across [industry],
              [industry], and [industry]. [He/She/They] has led complex, high-stakes projects,
              built high-performing teams from scratch, and put in place the systems that keep a
              business running well. As a hands-on operator, [FOUNDER NAME] will lead the
              day-to-day running of Calvoria Holdings&apos; acquired business.
            </p>
            <p>
              [FOUNDER NAME] cares deeply about the small business owners who make up the
              backbone of the economy, and is committed to protecting what they&apos;ve built as
              many look toward retirement or their next chapter.
            </p>
            <p style={{ marginBottom: 0 }}>
              [He/She/They] is genuinely excited to lead an established business forward — for
              its employees, its customers, and the community it serves.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
