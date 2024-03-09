import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetailsScreen: React.FC<{ product: Product | null }> = ({ product }) => {
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='productDetails'>
      <div className="content">
        <h2>Product Details</h2>
        <div className='productContent'>
          <h3>{product.name}</h3>
          <div className="rowProduct">  
            <div className="imageProduct">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="productInfo">
              <div className="price">
                <p><span>${product.price}</span></p>
              </div>
              <div className="description">
                <p>Description</p>
                <p><span>{product.description}</span></p>
              </div>
              <div className="btns">
                <button>Buy</button>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
