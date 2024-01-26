import "./TripStyles.css";

const PackageData = props => {
  return (
    <div className="t-card">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <h4>{props.price}</h4>
    </div>
  );
};

export default PackageData;