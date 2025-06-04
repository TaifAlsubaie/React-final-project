import React from "react";
import { toast } from 'react-toastify';


const categories = [
  {
    name: "Pastries",
    items: [
      { name: "Chocolate Croissant", price: 18, image: "/ChocoCro.jpg", description: "Flaky and buttery with chocolate filling.",  rating: 5 },
      { name: "Fruit Danish", price: 14, image: "/Fruit.jpg", description: "Topped with seasonal fruits and glaze.",  rating: 4  },
      { name: "Cinnamon Roll", price: 11, image: "/cinnamon.jpg", description: "Sweet roll with cinnamon and icing.",  rating: 4  }
    ]
  },
  {
    name: "Cookies",
    items: [
      { name: "Chocolate Chip", price: 8, image: "/cokie.jpg", description: "Classic cookie with chocolate chips.",  rating: 5 },
      { name: "Oatmeal Raisin", price: 7, image: "/Oatmea.jpg", description: "Soft and chewy with raisins.",  rating: 4  },
      { name: "Peanut Butter", price: 7.5, image: "/peanut.jpg", description: "Rich peanut flavor and soft texture.",  rating: 3  }
    ]
  },
  {
    name: "Breads",
    items: [
      { name: "Sourdough", price: 14, image: "/sourdough.jpg", description: "Crusty artisan sourdough loaf.",  rating: 5  },
      { name: "Whole Wheat", price: 6, image: "/whole.jpg", description: "Healthy and hearty whole wheat bread.",  rating: 4  },
      { name: "Baguette", price: 11, image: "/baguette.jpg", description: "Classic French-style long bread.",  rating: 3 }
    ]
  }
];



const Menu = ({ onAddToCart }) => {
  const handleSelect = (item) => {
    onAddToCart(item); 
  toast.success(` ${item.name} added to cart`, {
    autoClose: 3000,
    position: "bottom-center",
    closeButton: true,
    style: {
      background: "#fff8f2", // نفس خلفية رسالة الدفع
      color: "#a57b63",      // نفس لون النص البني
      fontWeight: "bold",
    },
  });
  }
  const renderStars = (rating) => {
  return (
    <div className="rating-stars">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
};

  return (
    <>
      <div className="menu-container">
        {categories.map((cat, i) => (
          <div key={i} className="menu-category">
            <h2>{cat.name}</h2>
            <div className="menu-items">
              {cat.items.map((item, j) => (
                <div key={j} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-img" />
                  <div className="menu-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h6 className="card-title mb-1">{item.name}</h6>
{renderStars(item.rating)}

                    <span className="price">{item.price} SR</span>
                    <button
                      className="select-btn mt-2"
                      onClick={() => handleSelect(item)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
     

    </>
  );
};

export default Menu;
