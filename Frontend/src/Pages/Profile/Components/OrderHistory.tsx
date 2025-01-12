import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { FileText, Package } from "lucide-react";

const OrderHistory = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      items: [
        { name: "Kurauni Chiya", quantity: 2, price: "NPR 128" },
        { name: "Iced Matcha Latte", quantity: 1, price: "NPR 160" },
      ],
      total: "NPR 416",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order History</h2>
        <Button variant="outline">Download All</Button>
      </div>

      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order {order.id}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                  {order.status}
                </span>
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Items</p>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-4 border-t">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{order.total}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderHistory;
