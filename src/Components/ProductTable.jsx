import React from "react";
import "./../Styles/producttable.css"



const ProductTable = ({ products, onEdit }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.image} width="60" alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td>{item.category}</td>
            <td>{item.stock}</td>
            <td>
              <button  className="edit-btn"onClick={() => onEdit(item.id)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
