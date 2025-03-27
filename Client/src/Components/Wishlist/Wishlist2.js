import React, { useState, useEffect } from "react";
import PetsViewer from "../Pets/PetsViewer";

const Wishlist2 = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist_ajaz")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (petId) => {
    const updatedWishlist = wishlist.filter((pet) => pet.id !== petId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist_ajaz", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h2>Ajaz's Wishlist</h2>
      <div className="pet-container">
        {wishlist.length > 0 ? (
          wishlist.map((pet, index) => (
            <div key={index} className="pet-item">
              <PetsViewer pet={pet} />
              <button className="remove-wishlist-btn" onClick={() => removeFromWishlist(pet.id)}>
                Remove from Wishlist
              </button>
            </div>
          ))
        ) : (
          <p className="oops-msg">Your wishlist is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist2;
