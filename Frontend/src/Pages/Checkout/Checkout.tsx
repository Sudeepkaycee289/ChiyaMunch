import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Card from "./Components/Card";
import Bank from "./Components/Bank";
import OnlineTransaction from "./Components/OnlineTransaction";
import CartSummary from "@/Components/Cart/CartSummary";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");
  const items = [
    {
      image: "public/ChiyaMunch Image.svg",
      name: "Item 1",
      place: "Place 1",
      qty: 30,
      price: 100,
    },
    {
      image: "public/ChiyaMunch Image.svg",
      name: "Item 2",
      place: "Place 2",
      qty: 30,
      price: 200,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="flex">
        <div className="w-2/3">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="flex gap-4 p-6">
              <TabsTrigger
                value="info"
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Card
              </TabsTrigger>
              <TabsTrigger
                value="subscriptions"
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Bank
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Online Transaction
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="p-4 bg-white rounded shadow">
              <Card />
            </TabsContent>

            <TabsContent
              value="subscriptions"
              className="p-4 bg-white rounded shadow"
            >
              <Bank />
            </TabsContent>
            <TabsContent value="orders" className="p-4 bg-white rounded shadow">
              <OnlineTransaction />
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-1/3 p-4 bg-gray-100 rounded shadow ml-4">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <CartSummary items={items} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
