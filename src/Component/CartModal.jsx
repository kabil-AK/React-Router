
import React from "react";

const CartModal = ({ cart,removeFromCart, closeModal, }) => {
  

  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md w-full max-w-lg">
        <h2 className="text-xl font-bold ">Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center space-x-4 hover:bg-gray-50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-cover rounded"
              />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="m-10 text-red-500 font-semibold hover:text-red-700 bg-gray-100 rounded shadow-lg p-2"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
