import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLandingContainer from "./HomeLandingContainer";
import CardBelowHome from "./CardBelowHome";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";

const Home = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");

  const handleWishlistClick = () => {
    if (user === "akash") {
      navigate("/wishlist1");
    } else if (user === "ajaz") {
      navigate("/wishlist2");
    } else {
      alert("Please log in to view your wishlist.");
    }
  };

  return (
    <>
      {/* ✅ Passing handleWishlistClick as a prop to HomeLandingContainer */}
      <HomeLandingContainer description={props.description} handleWishlistClick={handleWishlistClick} />
      <CardBelowHome />
      <PlanningToAdoptAPet />
      
    </>
  );
};

export default Home;
