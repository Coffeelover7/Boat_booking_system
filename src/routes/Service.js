import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero-mid"
        heroImg="https://www.thambapannileisure.com/thaproban_pavilion_unawatuna/images/excursion/places/boat.jpg"
        title="Service"
        btnClass="hide"
        url="/"
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
