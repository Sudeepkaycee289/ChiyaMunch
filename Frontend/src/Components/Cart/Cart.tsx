import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'; 
import { Button } from '../ui/button';
import { useHeaderContext } from '../Header/HeaderContext';

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

const Cart = ({ items, onRemoveItem, onCheckout, isOpen, onClose }: CartProps) => {
  const { setCartCount } = useHeaderContext();

  const handleRemoveItem = (index: number) => {
    onRemoveItem(index);
    setCartCount((prev: number) => Math.max(0, prev - 1));
  };

  const handleIncreaseQty = (index: number) => {
    items[index].qty += 1;
    setCartCount((prev: number) => prev + 1);
  };

  const handleDecreaseQty = (index: number) => {
    if (items[index].qty > 30) { // Ensure quantity does not go below 30
      items[index].qty -= 1;
      setCartCount((prev: number) => Math.max(0, prev - 1));
    }
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.place}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button 
                        className="rounded-full p-1 hover:bg-gray-100"
                        onClick={() => handleDecreaseQty(index)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span>{item.qty}</span>
                      <button 
                        className="rounded-full p-1 hover:bg-gray-100"
                        onClick={() => handleIncreaseQty(index)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">NPR {item.price * item.qty}</p>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="mt-2 rounded-full p-1 hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">NPR {total}</span>
                </div>
                <Button 
                  className="w-full"
                  onClick={onCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
