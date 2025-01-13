import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart} from "lucide-react";
import { useHeaderContext } from "./HeaderContext";
import Cart from "../Cart/Cart";
import Modal from 'react-modal';
import Login from "../Login-Signup Page/Login";

Modal.setAppElement('#root'); // Set the app element for react-modal

const Header: React.FC = () => {
  const { user, cartCount } = useHeaderContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const cartItems: any[] = [];

  const handleRemoveItem = (index: number) => {
    console.log(`Remove item at index ${index}`);
  };

  const handleCheckout = () => {
    console.log("Checkout");
  };

  return (
    <nav className={`bg-gray-${user ? "800" : "200"} border-gray-200`}>
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-16 py-2">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/public/ChiyaMunchLogo.svg"
            className={`h-8 ${user ? "filter brightness-150" : ""}`}
            alt="Chiya Munch Logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              user ? "text-white" : "text-black"
            }`}
          >
            Chiya Munch
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
          {/* Shopping Cart */}
          <div className="relative">
            <ShoppingCart
              className={`w-5 h-5 cursor-pointer ${
                user ? "text-white" : "text-black"
              }`}
              onClick={toggleCart}
            />
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

          {/* User Menu */}
          {user ? (
            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full"
                id="user-menu-button"
                aria-expanded={dropdownOpen}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-10 h-10 rounded-full border border-white"
                  src={user?.avatar}
                  alt="User avatar"
                />
              </button>

              {/* Dropdown menu for profile */}
              {dropdownOpen && (
                <div
                  className="absolute my-4 text-base top-8 right-20 list-none bg-gray-700 text-white divide-y divide-gray-500 rounded-lg shadow"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm">{user?.name}</span>
                    <span className="block text-sm truncate">{user?.email}</span>
                    <hr className="my-2 border-gray-500"></hr>
                    <Link
                      to="/profile"
                      className="block text-sm hover:text-gray-300"
                    >
                      Profile
                    </Link>
                    <button className="block text-sm hover:text-gray-300">
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="bg-primary text-white py-2 px-4 rounded mb-2" onClick={handleLoginClick}>Login</button>
              <Modal isOpen={showLogin} onRequestClose={handleCloseLogin} className="max-w-fit mx-auto flex items-center justify-center h-screen">
                <Login onClose={handleCloseLogin} />
              </Modal>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Header;
