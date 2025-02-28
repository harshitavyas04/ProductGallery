// import React from "react";
// import ProductGallery from "./ProductGallery";

// function App() {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Product Gallery</h1>
//       <ProductGallery />
//     </div>
//   );
// }

import React, { useState } from "react";
import ProductGallery from "./ProductGallery";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", description: "Description 1", price: "$10", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", description: "Description 2", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", description: "Description 3", price: "$30", image: "https://via.placeholder.com/150" }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Gallery</h1>
      <ProductGallery products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
