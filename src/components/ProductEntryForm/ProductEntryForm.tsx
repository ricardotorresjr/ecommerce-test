import React, { useState } from 'react';

const ProductEntryForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [products, setProducts] = useState<{ name: string; price: string; image: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImage,
    };
    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
    setProductImage('');
  };

  return (
    <div className='addProduct'>
      <div className="content">
        <h2>Product Entry Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Product Image URL"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className="productsRow">

          {products.map((product, index) => (
            <div className='product' key={index}>
              <h3>{product.name}</h3>
              <div className="imgProduct">
                <img src={product.image} alt={product.name} />
              </div>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductEntryForm;
