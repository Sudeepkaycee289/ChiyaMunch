import React from "react";
import { X } from "lucide-react";

interface CartItem {
  image: string;
  name: string;
  place: string;
  qty: number;
  price: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  onRemoveItem,
  onCheckout,
  isOpen,
  onClose,
}) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 w-96 p-4 bg-white border rounded-lg shadow-lg z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Cart <span className="text-sm">({items.length} items)</span>
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500 h-4 w-4"
        >
          <X />
        </button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <img
              src="https://via.placeholder.com/300"
              alt={item.name}
              className="w-16 h-16 border rounded object-cover"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.place}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-base">{item.qty}</span>
              <span className="text-base font-semibold">
                NPR {item.price.toFixed(2)}
              </span>
              <button
                onClick={() => onRemoveItem(index)}
                className="text-gray-500 hover:text-red-500"
              >
                <X />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-left">
        <h3 className="text-xl font-bold">Total: NPR {totalPrice.toFixed(2)}</h3>
        <button
          onClick={onCheckout}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
