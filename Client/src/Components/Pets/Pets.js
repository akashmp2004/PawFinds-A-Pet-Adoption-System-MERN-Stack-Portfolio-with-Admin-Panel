import React, { useEffect, useState } from "react";
import PetsViewer from "./PetsViewer";
import { FaHeart } from "react-icons/fa"; // Importing heart icon
// Assuming you have a CSS file for styling


const Pets = () => {
  const [filter, setFilter] = useState("all");
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:4000/approvedPets');
        if (!response.ok) {
          throw new Error('An error occurred');
        }
        const data = await response.json();
        setPetsData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();

    // Load wishlist from localStorage based on logged-in user
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const savedWishlist = JSON.parse(localStorage.getItem(`wishlist_${user}`)) || [];
      setWishlist(savedWishlist);
    }
  }, []);

  const addToWishlist = (pet) => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      alert("Please log in to add pets to wishlist!");
      return;
    }

    const wishlistKey = `wishlist_${user}`;

    // Prevent duplicate entries
    if (wishlist.some((p) => p.id === pet.id)) {
      alert(`${pet.name} is already in your wishlist!`);
      return;
    }

    const updatedWishlist = [...wishlist, pet];
    setWishlist(updatedWishlist);
    localStorage.setItem(wishlistKey, JSON.stringify(updatedWishlist));

    alert(`${pet.name} has been added to your wishlist!`);
  };

  const filteredPets = petsData.filter((pet) => {
    if (filter === "all") {
      return true;
    }
    return pet.type === filter;
  });

  return (
    <>
      <div className="filter-selection">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
          <option value="Fish">Fish</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="pet-container">
        {loading ? (
          <p>Loading</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map((petDetail, index) => (
            <div key={index} className="pet-item">
              <PetsViewer pet={petDetail} />
              <div className="wishlist-btn-container">
                <FaHeart
                style={{ color: "orange" }} 
                  className="wishlist-icon"
                  onClick={() => addToWishlist(petDetail)}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="oops-msg">Oops!... No pets available</p>
        )}
      </div>
    </>
  );
};

export default Pets;
