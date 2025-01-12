import { useState } from "react";
import ProfileInfo from "./Components/ProfileInfo";
import Subscriptions from "./Components/Subscriptions";
import OrderHistory from "./Components/OrderHistory";
import ActivityLog from "./Components/ActivityLog";
import PaymentMethods from "./Components/PaymentMethods";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList>
          <TabsTrigger value="info">Personal Info</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <ProfileInfo />
        </TabsContent>

        <TabsContent value="subscriptions">
          <Subscriptions />
        </TabsContent>

        <TabsContent value="orders">
          <OrderHistory />
        </TabsContent>

        <TabsContent value="activity">
          <ActivityLog />
        </TabsContent>

        <TabsContent value="payment">
          <PaymentMethods />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
