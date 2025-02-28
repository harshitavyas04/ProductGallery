import React, { useState } from "react";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid black" }}>
      <h2>{product.id ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name || ""} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description || ""} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price || ""} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image || ""} onChange={handleChange} required />

        <br />
        <button type="submit">{product.id ? "Update" : "Add"}</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>Cancel</button>
      </form>
    </div>
  );
};

export default ProductForm;
