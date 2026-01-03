import { useState, useEffect } from "react";
import "./../Styles/productform.css"

const ProductForm = ({ onSave, editProduct, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

 
  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    }
  }, [editProduct]);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...formData,
      id: editProduct ? editProduct.id : Date.now()
    });

  
    if (!editProduct) {
      setFormData({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: ""
      });
    }
  };

  return (
    <>

    <div className="edit-page">
   <form className="product-form" onSubmit={handleSubmit}>
  <h3 className="form-title">
    {editProduct ? "Edit Product" : "Add Product"}
  </h3>

  <div className="form-group">
    <label>Product Name</label>
    <input
      placeholder="Product Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
    <span className="error">{errors.name}</span>
  </div>

  <div className="form-group">
    <label>Price</label>
    <input
      type="number"
      placeholder="Price"
      value={formData.price}
      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
    />
    <span className="error">{errors.price}</span>
  </div>

  <div className="form-group">
    <label>Category</label>
    <input
      placeholder="Category"
      value={formData.category}
      onChange={(e) =>
        setFormData({ ...formData, category: e.target.value })
      }
    />
    <span className="error">{errors.category}</span>
  </div>

  <div className="form-group">
    <label>Stock</label>
    <input
      type="number"
      placeholder="Stock"
      value={formData.stock}
      onChange={(e) =>
        setFormData({ ...formData, stock: e.target.value })
      }
    />
  </div>

  <div className="form-group">
    <label>Description</label>
    <textarea
      placeholder="Description (optional)"
      value={formData.description}
      onChange={(e) =>
        setFormData({ ...formData, description: e.target.value })
      }
    />
  </div>

  <div className="form-actions">
    <button type="submit" className="btn primary">
      {editProduct ? "Update Product" : "Add Product"}
    </button>

    {editProduct && (
      <button type="button" className="btn secondary" onClick={onCancel}>
        Cancel
      </button>
    )}
  </div>
</form>
</div>
</>

  );
};

export default ProductForm;

