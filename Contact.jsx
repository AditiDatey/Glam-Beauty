import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      {/* background effects */}
      <div className="contact-bg"></div>
      <div className="contact-overlay"></div>
      <div className="contact-blob blob-1"></div>
      <div className="contact-blob blob-2"></div>
      <div className="contact-blob blob-3"></div>

      <div className="contact-inner">
        {/* Header */}
        <div className="contact-header">
          <span className="section-tag">Contact Us</span>
          <h2>Let’s Enhance Your Natural Beauty</h2>
          <p>
            Have questions or ready to book your appointment? Our beauty
            specialists are here to help you glow with confidence, elegance,
            and luxury care.
          </p>
        </div>

        {/* Main Layout */}
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="contact-intro-card">
              <h3>Your Luxury Beauty Destination</h3>
              <p>
                Discover personalized beauty care, premium salon experiences,
                bridal makeup, skincare, and wellness treatments designed to
                make you feel radiant and confident.
              </p>
            </div>

            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h3>Visit Us</h3>
                  <p>Beauty Street, City</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h3>Call Us</h3>
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <h3>Email Us</h3>
                  <p>info@glowbeauty.com</p>
                </div>
              </div>
            </div>

            <div className="hours-card">
              <h3>Opening Hours</h3>

              <div className="hour-row">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>

              <div className="hour-row">
                <span>Saturday</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>

              <div className="hour-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <div className="form-wrapper">
              <div className="form-glow"></div>

              <div className="booking-message">
                <span className="mini-tag">Book Appointment</span>
                <h3>Book Your Beauty Experience</h3>
                <p>
                  Whether you want a fresh new look, luxury skincare treatment,
                  spa therapy, or a complete bridal makeover — we’re here to
                  make your beauty journey unforgettable.
                </p>
              </div>

              <form className="contact-form">
                <div className="input-group">
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="input-group">
                  <input type="email" placeholder="Your Email" />
                </div>

                <div className="input-group">
                  <input type="text" placeholder="Phone Number" />
                </div>

                <div className="input-group">
                  <textarea
                    rows="5"
                    placeholder="Tell us about your beauty needs"
                  ></textarea>
                </div>

                <button type="submit">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;