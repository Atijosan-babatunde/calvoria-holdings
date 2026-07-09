"use client";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Strong Foundations. Thoughtful Growth.</h1>
          <p className="lead">Calvoria Holdings acquires and operates established, owner-led businesses — safeguarding what already works while bringing the leadership and resources needed to take them further.</p>
          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </a>
            {/* <span className="hero-email">
              or email <a href="mailto:hello@calvoriaholdings.com">hello@calvoriaholdings.com</a>
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
