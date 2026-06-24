import "./About.css";
import FiveImage from "../assets/images/five.png";

function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src={FiveImage} alt="Beauty Parlor" />
      </div>

      <div className="about-content">
        <span className="section-tag">Who We Are</span>

        <h2>Luxury Beauty & Wellness Experience</h2>

        <p>
          At our beauty salon, we believe every client deserves to look and feel
          their absolute best. Our expert team specializes in premium beauty,
          skincare, haircare, and wellness treatments designed to enhance your
          natural beauty.
        </p>

        <p>
          With over a decade of experience, we combine modern techniques,
          high-quality products, and personalized care to deliver exceptional
          results in a relaxing and luxurious environment.
        </p>

           <div className="journey">
  <div className="journey-item">
    <span>01</span>
    <div>
          <h4>Consultation</h4>
          <p>Understanding your beauty goals and preferences.</p>
    </div>
        </div>

         <div className="journey-item">
    <span>02</span>
       <div>
         <h4>Personalized Care</h4>
          <p>Treatments tailored specifically to your needs.</p>
    </div>
     </div>

  <div className="journey-item">
    <span>03</span>
    <div>
      <h4>Luxury Experience</h4>
      <p>Relax in a premium and welcoming environment.</p>
      </div>
     </div>
</div>

        <div className="stats">
          <div>
            <h3>10+</h3>
            <p>Years Experience</p>
      </div>

    <div>
            <h3>5000+</h3>
            <p>Happy Clients</p>
    </div>

          <div>
            <h3>20+</h3>
            <p>Beauty Experts</p>
          </div>
        </div>

        <button className="about-btn">
          Book Appointment
        </button>
    </div>
    </section>
  );
}

export default About;