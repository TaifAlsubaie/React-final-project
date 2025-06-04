import { toast } from 'react-toastify';
const offers = [
  {
    title: 'Family Basket',
    description: 'A delicious selection for the whole family.',
    items: ['2x Baguette', '3x Chocolate Chip Cookies', '1x Cinnamon Roll'],
    price: '28 ',
    image: '/BACKET.jpg'
  },
  {
    title: 'Sweet Lovers Basket',
    description: 'Perfect mix for those with a sweet tooth.',
    items: ['1x Chocolate Croissant', '2x Fruit Danish', '2x Peanut Butter Cookies'],
    price: '30 ',
    image: '/bac.jpg'
  }
];


  
 const Offers = ({ onAddToCart }) => {
  const handleSelectOffer = (offer) => {
     onAddToCart({ ...offer, quantity: 1 });
    onAddToCart(offer);

toast.success(` added to cart`, {
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
  return (
    <div className="offers-container">
      <h1 className="offers-title">Special Offers</h1>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-img" />
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <ul>
              {offer.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
           
            <span className="offer-price">{offer.price} SR</span>

          <button className="select-btn "onClick={() => handleSelectOffer(offer)}>
            Select Offer
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
