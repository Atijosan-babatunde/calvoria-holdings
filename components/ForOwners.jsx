"use client";

import Reveal from "./Reveal";

export default function ForOwners() {
  return (
    <section id="for-owners" className="section owners-banner">
      <div className="container">
        <Reveal className="owners-inner" as="div">
          <span className="eyebrow eyebrow-light">For Business Owners</span>
          <h2>The right buyer matters more than the highest number</h2>
          <p>
            Maybe you&apos;re ready to retire, step back, solve a succession puzzle, or simply find a
            partner to carry the business into its next chapter. At Calvoria Holdings, we bring
            more than capital to the table — a structured operating approach, real hands-on
            transformation experience, and a long-term mindset.
          </p>
          <p>
            We take the time to understand your business before we touch anything. We care about
            protecting the trust you&apos;ve built with your customers, your staff and your suppliers.
            Our goal is a smooth handover, and a business that keeps thriving long after the deal
            closes.
          </p>

          <blockquote>
            Calvoria Holdings exists to acquire, strengthen and grow established businesses. We&apos;re
            drawn to companies with strong foundations, loyal customers and untapped potential —
            especially where clearer structure, better systems and a stronger operating model can
            unlock what&apos;s next.
            <footer>
              For owners weighing succession or a responsible exit, we offer a thoughtful,
              capable, long-term home for the business you&apos;ve built.
            </footer>
          </blockquote>

          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Confidential Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
