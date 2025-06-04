import { Link } from "react-router-dom";

const Home = () => {

    return ( 
        <>
      <div className="home-container">
      <h1 className="home-title">ON THE MENU</h1>
      <div className="category-grid">
        <div className="category-card">
          <img src="/3.png" alt="Pastries" className="category-img" />
          <h2>Pastries</h2>
        </div>
        <div className="category-card">
          <img src="/2.png" alt="Cookies" className="category-img" />
          <h2>Cookies</h2>
        </div>
        <div className="category-card">
          <img src="/1.png" alt="Breads" className="category-img" />
          <h2>Breads</h2>
        </div>
      </div>
      <Link to="/menu" className="view-menu-button">View All Menu</Link>
    <div className="baked-section">
  <img src="/back.png" alt="Baked Goods" className="baked-image" />
  <div className="baked-overlay">
    <h2>LOOKING FOR PERFECTLY BAKED GOODS?</h2>
    <p>We got you!</p>
  </div>
</div>


    </div>
   
        </>
     );
}
 
export default Home;