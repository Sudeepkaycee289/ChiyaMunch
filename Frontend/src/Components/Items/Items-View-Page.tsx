import { useParams } from "react-router-dom";
import items from "../../../public/Data/Items.json";
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Cart from '../Cart/Cart'; // Import the Cart component

interface Item {
  Category: string;
  Image: string;
  Title: string;
  Subtitle: string;
  PriceA: number;
  PriceB: number;
}

interface CartItem {
  image: string;
  name: string;
  place: string;
  qty: number;
  price: number;
}

const ItemsViewPage = () => {
  const { category } = useParams<{ category: string }>();
  const filteredItems = items.filter((item) => item.Category === category);
  const [cart, setCart] = useState<CartItem[]>([]); // Initialize cart as an empty array
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  const addToCart = (item: Item) => {
    const cartItem: CartItem = {
      image: item.Image,
      name: item.Title,
      place: item.Subtitle,
      qty: 30, // Set initial quantity to 30
      price: item.PriceB,
    };
    setCart([...cart, cartItem]);
    setIsCartOpen(true); // Open the cart when an item is added
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center justify-between p-2.5">
        <button onClick={() => {/* handle back navigation */}}>
          <ArrowLeft size={24} color="black" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold">{category}</h1>
      </div>
      <div className="p-5">
        <div className="flex gap-5 flex-wrap">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-300 rounded-lg p-5 gap-6 text-center bg-gray-100"
            >
              <img
                src={item.Image}
                alt={item.Title}
                className="max-w-[150px] max-h-[150px] rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-lg my-2.5 text-gray-800">{item.Subtitle}</h2>
                <div className="text-sm text-gray-600 flex justify-between items-end">
                  <p className="line-through">NPR {item.PriceA}</p>
                  <div className="text-sm text-green-600 flex flex-col items-end leading-3">
                    <p>NPR {item.PriceB}</p>
                  </div>
                </div>
                <button 
                  className="mt-2 p-2 bg-blue-500 text-white rounded"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cart 
        items={cart} 
        onRemoveItem={(index) => {
          const newCart = [...cart];

          newCart.splice(index, 1);
          setCart(newCart);
        }} 
        onCheckout={() => {/* handle checkout */}} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default ItemsViewPage;
