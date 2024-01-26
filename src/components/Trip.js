import TripData from "./TripData";
import Trip1 from "../assets/3.jpg";
import Trip2 from "../assets/4.jpg";
import Trip3 from "../assets/5.jpg";
import "./TripStyles.css";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Tours</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard ">
        <TripData
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/c7/06/dc/koggala-lake-boat-safari.jpg?w=1200&h=900&s=1"
          heading="Tour in 2023/5/5"
          text="This tour take place @ koggala lake and have the amazing time"
        />{" "}
        <TripData
          image="https://d3prz3jkfh1dmo.cloudfront.net/2021/02/1360x1000.jpg"
          heading="Tour in 2023/5/5"
          text="This tour take place @ koggala lake and have the amazing time"
        />{" "}
        <TripData
          image="https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/53/63/d4.jpg"
          heading="Tour in 2023/5/5"
          text="This tour take place @ koggala lake and have the amazing time"
        />
      </div>
    </div>
  );
};

export default Trip;
