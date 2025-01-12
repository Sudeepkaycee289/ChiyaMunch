import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Activity, ShoppingCart, CreditCard, UserCheck } from "lucide-react";

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      type: "order",
      description: "Placed an order for Kurauni Chiya",
      date: "2024-01-15 14:30",
      icon: ShoppingCart,
    },
    {
      id: 2,
      type: "payment",
      description: "Added new payment method",
      date: "2024-01-14 09:15",
      icon: CreditCard,
    },
    {
      id: 3,
      type: "profile",
      description: "Updated profile information",
      date: "2024-01-13 16:45",
      icon: UserCheck,
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "order":
        return ShoppingCart;
      case "payment":
        return CreditCard;
      case "profile":
        return UserCheck;
      default:
        return Activity;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-gray-100">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityLog;
