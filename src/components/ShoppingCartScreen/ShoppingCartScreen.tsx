import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

const ShoppingCartScreen: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProductsFromExternalSource = (): Product[] => {
      // Llamada a API para obtener los productos
      // Lista de productos de ejemplo
      return [
        { id: 1, name: 'Product 1', price: 10.99, image: 'https://via.placeholder.com/150', description: 'Description of Product 1', quantity: 1 },
        { id: 2, name: 'Product 2', price: 19.99, image: 'https://via.placeholder.com/150', description: 'Description of Product 2', quantity: 1 },
        { id: 3, name: 'Product 3', price: 4.99, image: 'https://via.placeholder.com/150', description: 'Description of Product 3', quantity: 1 },
        { id: 4, name: 'Product 4', price: 15.00, image: 'https://via.placeholder.com/150', description: 'Description of Product 4', quantity: 1 },
        
      ];
    };

    const products = fetchProductsFromExternalSource();
    setCartProducts(products);
  }, []);

  // Función para incrementar la cantidad de un producto en el carrito
  const incrementQuantity = (productId: number) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const decrementQuantity = (productId: number) => {
    setCartProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeProduct = (productId: number) => {
    setCartProducts(prevProducts =>
      prevProducts.filter(product => product.id !== productId)
    );
  };

  // Calcular el precio total de todos los productos en el carrito
  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <div className='cart'>
      <div className="content">
        <h2>Cart</h2>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='tableProducts'>
            <table>
              <thead>
                <th colSpan={2}>
                  Product
                </th>
                <th>
                  Quantity
                </th>
                <th>
                  Price
                </th>
              </thead>
              <tbody>
                {cartProducts.map(product => (
                  <tr key={product.id}>
                    <td className='imgTable'>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td className='productInfoTable'>
                      <h3>{product.name}</h3>
                      <p>
                        Description: {product.description}
                      </p>
                    </td>
                    <td>
                      <div className='quantity'>
                        <button onClick={() => incrementQuantity(product.id)}>+</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => decrementQuantity(product.id)}>-</button>
                      </div>
                    </td>
                    <td>
                      <p>Price: ${product.price}</p>
                    </td>
                    <td>
                      <button className='removeProduct' onClick={() => removeProduct(product.id)}>×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total">
              <p>Total price: <span>${totalPrice.toFixed(2)}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartScreen;
