import "./Home.css";
import HeroImage from "../assets/images/hero.png";

function Home() {
  return (
    <div className="hero">

      <div className="hero-content">
        <h1>Enhance Your Natural Beauty</h1>

        <p>
          Experience premium beauty treatments, hair styling,
          makeup artistry and skincare services.
        </p>

        <div className="hero-buttons">
           <button><a href="#contact">Book Appointment</a></button>
          
          <button><a href="#services">Explore Services</a></button>
        </div>
      </div>

      <div className="hero-image">
          <img src={HeroImage} alt="Beauty Parlor" />
      </div>

    </div>
  );
}

export default Home;