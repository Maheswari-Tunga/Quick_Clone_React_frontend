// FirmCollection.jsx
import React, { useState, useEffect } from 'react';
import './FirmCollection.css'; // Optional for styling

const FirmCollection = () => {
  // Sample collection data (you can replace this with real API data)
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Example API call to get collections data (you can replace this with an actual API call)
    const fetchCollectionsData = () => {
      const sampleCollections = [
        {
          id: 1,
          name: "Top Rated Restaurants",
          image: "https://example.com/top-rated.jpg",
          description: "A collection of the highest rated restaurants in your area.",
        },
        {
          id: 2,
          name: "New Arrivals",
          image: "https://example.com/new-arrivals.jpg",
          description: "Explore the newest restaurants that just opened.",
        },
        {
          id: 3,
          name: "Discounted Eats",
          image: "https://example.com/discounted-eats.jpg",
          description: "Check out the best deals and discounts at top restaurants.",
        },
        // Add more collections here
      ];
      setCollections(sampleCollections);
    };

    fetchCollectionsData();
  }, []);

  return (
    <div className="firm-collection-container">
      <h2>Explore Collections</h2>
      <div className="collection-list">
        {collections.map((collection) => (
          <div key={collection.id} className="collection-card">
            <img src={collection.image} alt={collection.name} className="collection-image" />
            <div className="collection-info">
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirmCollection;
