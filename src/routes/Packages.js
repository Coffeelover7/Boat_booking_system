import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Packs from "../components/Packs";

const Packages = () => {
  return (
    <>
    <Navbar />
      <Hero
        cNmae="hero-mid"
        heroImg="https://lh3.googleusercontent.com/p/AF1QipM4a9TAUwdZLTND4xp9eGEUaIAicEEoBQQZqy6H=w1080-h608-p-no-v0"
        title="Our Packages"
        btnClass="hide"
        url="/"
      />
      <Packs />
      <Footer />
    </>
  )
}

export default Packages