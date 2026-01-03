import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import ProductForm from "../Components/Productform";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useOutletContext();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  const handleSave = (updatedProduct) => {
    updateProduct(updatedProduct);
    navigate("/home");
  };

  return (
    <div>
    

      <ProductForm
        editProduct={product}
        onSave={handleSave}
        onCancel={() => navigate("/home")}
      />
    </div>
  );
};

export default EditProduct;

