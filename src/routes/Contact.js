import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero-mid"
        heroImg="https://www.srilankadaytours.com/images/koggala-boat-safari-sri-lanka.jpg"
        title="Contact"
        btnClass="hide"
        url="/"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
