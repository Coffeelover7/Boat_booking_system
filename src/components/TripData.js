import "./TripStyles.css";

const TripData = props => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="Destination" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TripData;
