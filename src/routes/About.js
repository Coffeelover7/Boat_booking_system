import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName ="hero-mid"
        heroImg="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/29/1c.jpg"
        title="About"
        btnClass="hide"
        url="/"
      />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
