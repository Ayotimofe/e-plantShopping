import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        // Other plants here...
      ]
    },
    // Other categories here...
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };
  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="luxury">
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
          <a href="/" style={{ textDecoration: 'none' }}>
            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
          </a>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a>
          <a href="#" onClick={handleCartClick} style={styleA}>
            <h1 className='cart'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                {/* SVG content */}
              </svg>
            </h1>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2>{category.category}</h2>
              <div className="plant-cards">
                {category.plants.map((plant, idx) => (
                  <div key={idx} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-cost">{plant.cost}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}
conat [addedToCart, setAddedToCart] = useState({})
const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
       ...prevState,
       [product.name]: true, 
     }));
  };
export default ProductList;
