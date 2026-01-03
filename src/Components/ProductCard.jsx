import { useNavigate } from "react-router-dom";
import "./../Styles/product.css"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.stock}</p>
      <p>{product.category}</p>

      <button onClick={() => navigate(`/editproduct/${product.id}`)}>
        Edit
      </button>
    </div>
  );
};

export default ProductCard;


