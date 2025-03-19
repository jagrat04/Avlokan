import React from "react";

const MemberCard = ({ name, Catagory, image, Reviews, BuyNow }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-pic" />
      <h1 className=" text-black">{name}</h1>
      <h2 className=" text-black ">{Catagory}</h2>
      <div className="social-links">
        {Reviews && (
          <a href={Reviews} target="_blank">
            Reviews
          </a>
        )}
        {BuyNow && (
          <a href={BuyNow} target="_blank">
            BuyNow
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;