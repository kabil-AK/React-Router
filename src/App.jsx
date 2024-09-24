
import React, { useEffect, useState } from "react";
import ProductCard from "./Component/Productard.jsx";
import CartModal from "./Component/CartModal.jsx";
import Navbar from "./Component/Navbar.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
     const isAlreadyInCart = cart.some((item) => item.id === product.id);

     if (isAlreadyInCart) {
       alert("Item already added to the cart");
     } else {
       
       setCart([...cart, product]);
     }
  };

  return (
    <div className="container mx-auto p-4 bg-yellow-100 w-full h-fit font-serif ">
      <Navbar cartCount={cart.length} />
      <h1 className="text-2xl font-bold m-4 text-gray-600">Products</h1>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <button
        className="flex items-center justify-center gap-2 fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded "
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart-check-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
        </svg>
        View Cart ({cart.length})
      </button>

      {showModal && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default App;
