import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { FileUploader } from "@/Components/Shared/FileUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const PaymentMethods = () => {
  const [activeTab, setActiveTab] = useState("card");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="card">Card Payment</TabsTrigger>
            <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
            <TabsTrigger value="online">Online Payment</TabsTrigger>
          </TabsList>

          <TabsContent value="card">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <Button className="w-full">Add Card</Button>
            </form>
          </TabsContent>

          <TabsContent value="bank">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Bank Details</h3>
                <p>Bank: Example Bank</p>
                <p>Account: 1234567890</p>
                <p>SWIFT: EXBKXXXX</p>
              </div>
              <FileUploader
                label="Upload Payment Proof"
                onFileSelect={(file) => console.log(file)}
                accept="image/*,.pdf"
              />
              <Button className="w-full">Submit Transfer Proof</Button>
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="space-y-4">
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  Pay with PayPal
                </Button>
                <Button variant="outline" className="w-full">
                  Pay with Stripe
                </Button>
                <FileUploader
                  label="Upload Payment Screenshot"
                  onFileSelect={(file) => console.log(file)}
                  accept="image/*"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
