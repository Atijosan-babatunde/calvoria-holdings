import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <div className="footer-contact-grid">
            <div className="item">
              <div className="icon-badge">
                <Phone size={17} />
              </div>
              <div>
                <div className="label">Telephone</div>
                <a href="tel:+44 7534 371905">+44 7534 371905</a>
              </div>
            </div>
            <div className="item">
              <div className="icon-badge">
                <Mail size={17} />
              </div>
              <div>
                <div className="label">E-mail</div>
                <a href="mailto:hello@calvoriaholdings.com">hello@calvoriaholdings.com</a>
              </div>
            </div>
            <div className="item">
              <div className="icon-badge">
                <MapPin size={17} />
              </div>
              <div>
                <div className="label">Location</div>
                <span>[United Kingdom]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">All rights reserved. Calvoria Holdings. © {year}</div>
      </div>
    </footer>
  );
}
