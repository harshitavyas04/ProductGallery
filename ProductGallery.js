import React, { useState } from "react";
import ProductForm from "./ProductForm";

const ProductGallery = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", description: "High performance laptop", price: 75000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Phone", description: "Smartphone with great camera", price: 50000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", description: "Noise-canceling headphones", price: 8000, image: "https://via.placeholder.com/150" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setEditingProduct({})}>Add Product</button>
      <input
        type="text"
        placeholder="Search Product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      />

      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onSave={editingProduct.id ? updateProduct : addProduct}
          onCancel={() => setEditingProduct(null)}
        />
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", padding: "20px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
              onClick={() => setEditingProduct(product)}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>₹{product.price}</strong></p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
