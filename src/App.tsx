import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductEntryForm from './components/ProductEntryForm/ProductEntryForm';
import ProductDisplayScreen from './components/ProductDisplayScreen/ProductDisplayScreen';
import ProductDetailsScreen from './components/ProductDetailsScreen/ProductDetailsScreen';
import ShoppingCartScreen from './components/ShoppingCartScreen/ShoppingCartScreen';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const loadProductDetails = async (productId: number) => {
    // Llamada a API para obtener los productos
    // Lista de productos de ejemplo
    const fetchedProduct: Product = {
      id: productId,
      name: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/700',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ea tenetur nihil atque earum porro vitae doloremque facilis fuga provident perspiciatis culpa aliquam numquam obcaecati, voluptatem nam itaque nulla libero unde nobis iure quas! Odit aliquid natus harum tenetur accusamus enim cumque? Expedita, eligendi quaerat porro esse at fugit quae!',
    };

    setSelectedProduct(fetchedProduct);
  };

  useEffect(() => {
    
    const productId = 1; 

    loadProductDetails(productId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductDisplayScreen />} />
        <Route path="/product-details" element={<ProductDetailsScreen product={selectedProduct} />} />
        <Route path="/cart" element={<ShoppingCartScreen />} />
        <Route path="/add-product" element={<ProductEntryForm />} />
      </Routes>
    </Router>
  );
};

export default App;
