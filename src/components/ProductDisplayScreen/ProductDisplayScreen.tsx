import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}


const ProductDisplayScreen: React.FC = () => {
  // Lista de productos predeterminada
  const defaultProducts: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.49,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 12.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 8.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 18.49,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 25.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 14.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Product 9',
      price: 9.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Product 10',
      price: 22.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'name'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [cartCount, setCartCount] = useState(0);

  // Función para manejar el clic en "Añadir al carrito"
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert('Product added to cart');
  };

  // Función para ordenar los productos
  const sortProducts = (sortBy: 'price' | 'name') => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
    });
    setProducts(sortedProducts);
  };

  // Filtrar productos por término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id='displayProducts'>
      <div className='heroBg'>
        <div className='imgHero'>
          <img src="https://images.pexels.com/photos/1503537/pexels-photo-1503537.jpeg" alt="Bulldog main imagen hero" />
        </div>
        <div className='textHero'>
          <div className='contenttextHero'>
            <h1>Product Display</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <button>Go to products</button>
          </div>
        </div>
      </div>
      <div className='products'>
        <div className="content">
          <h2>Product Display</h2>
          <div className="search">
            {/* Barra de búsqueda */}
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Botones para ordenar productos */}
          <div className='sortBtns'>
            <button onClick={() => sortProducts('price')}>
              Sort by Price {sortBy === 'price' && (sortOrder === 'asc' ? '▲' : '▼')}
            </button>
            <button onClick={() => sortProducts('name')}>
              Sort by Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
            </button>
          </div>
          <div className="productsRow">
            {/* Lista de productos */}
            {filteredProducts.map((product) => (
              <div className='product' key={product.id}>
                <h3>{product.name}</h3>
                <div className="imgProduct">
                  <img src={product.image} alt={product.name} />
                </div>
                <p>Price: ${product.price}</p>
                {/* Botón para "Añadir al carrito" */}
                <button onClick={handleAddToCart}>Add to cart</button>
                {/* Botón para "Ver producto" */}
                <Link to={`/product/${product.id}`}>
                  <button>See product</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayScreen;
