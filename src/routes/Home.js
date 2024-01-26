import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Review from "../components/Review";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero"
        heroImg="https://d3prz3jkfh1dmo.cloudfront.net/2021/02/Koggala-lake-boat-trip-3.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnClass="show"
        url="/package"
        btnText="Travel Plan"
      />
      <Destination />
     <Review />
      <Footer />
    </>
  );
};

export default Home;
