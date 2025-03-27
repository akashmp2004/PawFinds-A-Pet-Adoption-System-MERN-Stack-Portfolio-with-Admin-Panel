import React, { useState, useEffect } from "react";
import PetsViewer from "../Pets/PetsViewer";

const Wishlist1 = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist_akash")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (petId) => {
    const updatedWishlist = wishlist.filter((pet) => pet.id !== petId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist_akash", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h2>Akash's Wishlist</h2>
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

export default Wishlist1;
