import "./Services.css";

function Services() {
  const services = [
    "Hair Styling",
    "Bridal Makeup",
    "Facial Treatments",
    "Nail Art",
    "Spa Therapy",
    "Skin Care",
    "Glowing Skin",
    "Eyelash Extensions",
  ];

  return (
    <section className="services">
      {/* background image behind bubbles */}
      <div className="services-bg">
        
      </div>

      {/* optional overlay for luxury tint */}
      <div className="services-overlay"></div>

      <div className="services-content">
        <p className="services-subtitle">Luxury Beauty Experience</p>
        <h2>Our Premium Services</h2>
        <p className="services-text">
          Experience premium beauty, skincare, bridal and spa treatments
          designed with elegance, style and luxury.
        </p>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="crystal-card" key={index}>
              <div className="crystal-shape">
                <div className="crystal-glow"></div>

                <div className="crystal-text">
                  <h3>{item}</h3>
                  <p>Luxury beauty care</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;