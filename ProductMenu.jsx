// ProductsMenu.jsx
import React, { useState, useEffect } from 'react';
import './ProductsMenu.css'; // Optional for styling

const ProductsMenu = () => {
  // Sample data for restaurant chains and items (you can replace this with an actual API call)
  const [chains, setChains] = useState([]);

  useEffect(() => {
    // Example API call to get chains data (you can replace this with an actual API call)
    const fetchChainsData = () => {
      const sampleChains = [
        {
          id: 1,
          name: "Pizza Hut",
          image: "https://example.com/pizza-hut.jpg",
          cuisine: "Italian, Pizza",
          rating: 4.5,
          items: [
            {
              id: 1,
              name: "Margherita Pizza",
              image: "https://example.com/margherita-pizza.jpg",
              description: "Classic Margherita pizza with fresh mozzarella and basil.",
              price: "₹350",
            },
            {
              id: 2,
              name: "Cheese Garlic Bread",
              image: "https://example.com/garlic-bread.jpg",
              description: "Garlic bread topped with melted cheese.",
              price: "₹150",
            },
            {
              id: 3,
              name: "Veggie Pasta",
              image: "https://example.com/veggie-pasta.jpg",
              description: "Pasta with mixed vegetables in a creamy sauce.",
              price: "₹450",
            },
          ],
        },
        {
          id: 2,
          name: "Burger King",
          image: "https://example.com/burger-king.jpg",
          cuisine: "Fast Food, Burgers",
          rating: 4.2,
          items: [
            {
              id: 1,
              name: "Cheeseburger",
              image: "https://example.com/cheeseburger.jpg",
              description: "Juicy cheeseburger with lettuce, tomato, and pickles.",
              price: "₹250",
            },
            {
              id: 2,
              name: "Fries",
              image: "https://example.com/fries.jpg",
              description: "Crispy golden fries served with ketchup.",
              price: "₹100",
            },
            {
              id: 3,
              name: "Chicken Nuggets",
              image: "https://example.com/nuggets.jpg",
              description: "Golden crispy chicken nuggets with dipping sauce.",
              price: "₹200",
            },
          ],
        },
        {
          id: 3,
          name: "KFC",
          image: "https://example.com/kfc.jpg",
          cuisine: "Fast Food, Chicken",
          rating: 4.0,
          items: [
            {
              id: 1,
              name: "Fried Chicken",
              image: "https://example.com/fried-chicken.jpg",
              description: "Crispy fried chicken served with a side of coleslaw.",
              price: "₹350",
            },
            {
              id: 2,
              name: "Zinger Burger",
              image: "https://example.com/zinger-burger.jpg",
              description: "Spicy crispy chicken burger with fresh veggies.",
              price: "₹300",
            },
            {
              id: 3,
              name: "Mashed Potatoes",
              image: "https://example.com/mashed-potatoes.jpg",
              description: "Smooth mashed potatoes served with gravy.",
              price: "₹120",
            },
          ],
        },
      ];

      setChains(sampleChains);
    };

    fetchChainsData();
  }, []);

  return (
    <div className="products-menu-container">
      <h2>Restaurant Menu</h2>
      <div className="chains-list">
        {chains.map((chain) => (
          <div key={chain.id} className="chain-card">
            <img src={chain.image} alt={chain.name} className="chain-image" />
            <div className="chain-info">
              <h3>{chain.name}</h3>
              <p>{chain.cuisine}</p>
              <p>Rating: {chain.rating} ⭐</p>
            </div>
            <div className="items-list">
              {chain.items.map((item) => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p className="item-price">{item.price}</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsMenu;
