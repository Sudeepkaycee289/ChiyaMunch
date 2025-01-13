import { ShoppingBag } from 'lucide-react';


interface CartItem {
  image: string;
  name: string;
  place: string;
  qty: number;
  price: number;
}

interface CartSummaryProps {
  items: CartItem[];
}

const CartSummary = ({ items }: CartSummaryProps) => {
  const total = Math.floor(items.reduce((sum, item) => sum + item.price * item.qty, 0));

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingBag className="h-5 w-5" />
        <h2 className="text-lg font-medium">Your Cart Summary</h2>
      </div>
      
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.place}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span>{item.qty}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">NPR {Math.floor(item.price * item.qty)}</p>
                </div>
              </div>
            ))}
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total :</span>
                <span className="font-medium">NPR {total}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
