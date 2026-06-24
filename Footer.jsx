import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-bg"></div>
      <div className="footer-overlay"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-tag">Luxury Beauty Studio</span>
          <h2>Glow Beauty</h2>
          <p>
            Making every client look and feel beautiful with premium beauty,
            skincare, bridal and spa experiences.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <a href="#services">Hair Styling</a>
            <a href="#services">Bridal Makeup</a>
            <a href="#services">Facial Treatments</a>
            <a href="#services">Spa Therapy</a>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <p>Beauty Street, City</p>
            <p>+91 9876543210</p>
            <p>info@glowbeauty.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Glow Beauty. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;