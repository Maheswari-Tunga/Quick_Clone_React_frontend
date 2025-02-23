// Chains.jsx
import React, { useState, useEffect } from 'react';
import './Chains.css';  // Optional for styling

const Chains = () => {
  // Sample data for restaurant chains (you can replace this with real API data)
  const [chains, setChains] = useState([]);

  useEffect(() => {
    // Example API call to get chains data (you could replace this with an actual Zomato API call or other data sources)
    const fetchChainsData = () => {
      const sampleChains = [
        {
          id: 1,
          name: "Pizza Hut",
          image: "https://example.com/pizza-hut.jpg",
          cuisine: "Italian, Pizza",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Burger King",
          image: "https://example.com/burger-king.jpg",
          cuisine: "Fast Food, Burgers",
          rating: 4.2,
        },
        {
          id: 3,
          name: "KFC",
          image: "https://example.com/kfc.jpg",
          cuisine: "Fast Food, Chicken",
          rating: 4.0,
        },
        // Add more chains here
      ];
      setChains(sampleChains);
    };

    fetchChainsData();
  }, []);

  return (
    <div className="chains-container">
      <h2>Popular Restaurant Chains</h2>
      <div className="chains-list">
        {chains.map((chain) => (
          <div key={chain.id} className="chain-card">
            <img src={chain.image} alt={chain.name} className="chain-image" />
            <div className="chain-info">
              <h3>{chain.name}</h3>
              <p>{chain.cuisine}</p>
              <p>Rating: {chain.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chains;
