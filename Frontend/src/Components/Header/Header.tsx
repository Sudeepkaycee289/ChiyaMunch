import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useHeaderContext } from "./HeaderContext";
import Cart from "../Cart/Cart";

const Header: React.FC = () => {
  const { user, cartCount } = useHeaderContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const cartItems = [
    { image: 'image1.jpg', name: 'Item 1', place: 'Place 1', qty: 30, price: 10 },
    { image: 'image2.jpg', name: 'Item 2', place: 'Place 2', qty: 2, price: 20 },
  ];

  const handleRemoveItem = (index: number) => {
    console.log(`Remove item at index ${index}`);
  };

  const handleCheckout = () => {
    console.log('Checkout');
  };

  return (
    <nav className="bg-gray-200 border-gray-200">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-16 py-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/public/ChiyaMunchLogo.svg"
            className="h-8"
            alt="Chiya Munch Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Chiya Munch
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-black" onClick={toggleCart} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartCount}
              </span>
            )}
            <Cart
              items={cartItems}
              onRemoveItem={handleRemoveItem}
              onCheckout={handleCheckout}
              isOpen={cartOpen}
              onClose={toggleCart}
            />
          </div>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-10 h-10 rounded-full"
              src={user.avatar}
              alt="User avatar"
            />
          </button>
          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              className="my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">{user.name}</span>
                <span className="block text-sm text-gray-500 truncate">
                  {user.email}
                </span>
                <hr className="w-1 align-middle"></hr>
                <button className="block text-sm text-gray-500 hover:text-black">
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
