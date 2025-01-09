import { ShoppingCart } from "lucide-react";
// import {CircleUser} from 'lucide-react';

const Header = () => {
  return (
    <>
      <nav className="bg-gray-200 border-gray-200">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-16 py-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
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
            <ShoppingCart className="w-5 h-5 text-black" />
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full"
                src="/Public/ChiyaMunchLogo.svg"
                alt="user photo"
              />
            </button>
            {/* Dropdown menu */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Profile
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  Log out
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
