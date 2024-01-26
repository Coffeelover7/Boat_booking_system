import React from "react";
import PackageData from "./PackageData";
import Card from "./Card";
import "./Pack.css";

const myPrices = [
  {
    plan: "Boat Safari Lite",
    price: "$25/Person",
    features: [
      {
        name: "Up to 2 Person",
        isEnabled: true,
      },
      {
        name: "2 Hours Boat Ride",
        isEnabled: true,
      },
      {
        name: "Snacks and Refreshments",
        isEnabled: true,
      },
      {
        name: "Community Access",
        isEnabled: false,
      },
      {
        name: "Dedicated Photo Support",
        isEnabled: false,
      },
      {
        name: "Breackfirst & Lunch",
        isEnabled: false,
      }
    ],
  },
  {
    plan: "Boat Safari Plus",
    price: "$50/person",
    features: [
      {
        name: "Group of 5 or more",
        isEnabled: true,
      },
      {
        name: "3 Hours Boat Ride",
        isEnabled: true,
      },
      {
        name: "Snacks and Refreshments",
        isEnabled: true,
      },
      {
        name: "Community Access",
        isEnabled: true,
      },
      {
        name: "Dedicated Photo Support",
        isEnabled: true,
      },
      {
        name: "Breackfirst & Lunch",
        isEnabled: false,
      }
    ],
  },
  {
    plan: "Boat Safari Pro",
    price: "$75/person",
    features: [
      {
        name: "Unlimited Participants",
        isEnabled: true,
      },
      {
        name: "Full-Day Boat Ride",
        isEnabled: true,
      },
      {
        name: "Snacks and Refreshments",
        isEnabled: true,
      },
      {
        name: "Community Access",
        isEnabled: true,
      },
      {
        name: "Dedicated Photo Support",
        isEnabled: true,
      },
      {
        name: "Breackfirst & Lunch",
        isEnabled: true,
      }
    ],
  },
];

const Packs = () => {
  return (
    <div className="trip">
      <h1>Our Packages</h1>
      <p>These are the Packages we offer</p>
      <>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              <div className="card-container">
                {myPrices.map((obj) => {
                  return <Card data={obj} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Packs;
