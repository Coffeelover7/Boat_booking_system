import React from "react";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import img1 from "../assets/5.jpg";
import img2 from "../assets/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Our Most Visited Destination of Koggala Lake</p>
      <DestinationData
        className="first-des"
        heading="Madolduwa Island"
        text="Madol Duwa Island is known for its lush greenery, tranquil surroundings, and mangrove forests. It offers a serene and idyllic retreat away from the bustling city life. The island is accessible by boat, and visitors can enjoy a scenic ride through the calm waters of Koggala Lake to reach its shores.The island's significance lies in its portrayal in Wickramasinghe's novel, which tells the story of two young boys who escape from their strict village life to live on the island. The novel explores themes of adventure, friendship, and personal growth, capturing the essence of rural Sri Lankan life during the early 20th century"
        img1="https://ceylonpages.lk/wp-content/uploads/2020/11/Madol-duwa.jpg"
        alt="Madolduwa Island"
        img2="https://upload.wikimedia.org/wikipedia/commons/2/28/Madol_Duwa.jpg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Fish therapy"
        text="Fish therapy is believed to have originated in the Middle East, particularly in countries like Turkey and Iran, before spreading to other parts of the world. Proponents of fish therapy claim that it can help improve skin conditions such as dryness, psoriasis, and eczema by removing dead skin cells and promoting smoother and softer skin. However, scientific evidence supporting these claims is limited.It's important to note that fish therapy may not be suitable for everyone. People with open wounds, cuts, infections, or contagious skin conditions are typically advised to avoid fish therapy due to the risk of infection. Additionally, some regions have banned or restricted fish therapy due to concerns about hygiene and animal welfare."
        img1="https://scontent.xx.fbcdn.net/v/t39.30808-6/271507528_1309472572833546_3740206055929888283_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=UdYV98a2AJoAX9acXEY&_nc_ht=scontent.xx&oh=00_AfCttiNEI04xLPUNbme0e47hpGp53ohxBQeW-8aiAXzUGQ&oe=64AD1F2E"
        alt="Fish Theropy"
        img2="https://scontent.xx.fbcdn.net/v/t1.6435-9/71201677_724092564704886_2540289635926409216_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=JPDV6Hpj50kAX8QO-bk&_nc_ht=scontent.xx&oh=00_AfCTsSLLjDNLt9ltCqWCuKZWAK1rGgrXX7_Lzccu1te7Uw&oe=64CEEB16"
      />
    </div>
  );
};

export default Destination;
