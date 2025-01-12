import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Crown } from "lucide-react";

const Subscriptions = () => {
  const subscriptions = [
    {
      id: 1,
      plan: "Premium Monthly",
      status: "Active",
      startDate: "2024-01-01",
      endDate: "2024-02-01",
      price: "NPR 999/month",
      features: ["Unlimited Drinks", "Priority Service", "Special Discounts"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Subscriptions</h2>
        <Button>Upgrade Plan</Button>
      </div>

      {subscriptions.map((sub) => (
        <Card key={sub.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                {sub.plan}
              </CardTitle>
              <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                {sub.status}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="font-medium">{sub.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="font-medium">{sub.endDate}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-medium">{sub.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Features</p>
                <ul className="list-disc list-inside space-y-1">
                  {sub.features.map((feature, index) => (
                    <li key={index} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Subscriptions;
