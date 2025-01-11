import { Button } from "@/Components/ui/button";
import { Loader2 } from "lucide-react"


const Profile = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full h-48 bg-gray-200">
        <img
          src="https://via.placeholder.com/800x200"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative -mt-16">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-xl font-bold">Ram Bahadur</h1>
        <p className="text-gray-500">rambahadur289@gmail.com</p>
      </div>
        <h2 className="text-xl font-semibold mb-4">Subscription</h2>
      <div className="mt-8 w-full flex flex-row max-w-screen-lg gap-4 bg-white p-4 rounded-lg shadow-md">
        <p className="mb-2">
          <span className="font-semibold">Start Date:</span> YYYY-MM-DD
        </p>
        <p className="mb-2">
          <span className="font-semibold">Expiry Date:</span> YYYY-MM-DD
        </p>
        <p className="mb-2">
          <span className="font-semibold">Active Plan:</span> Monthly
        </p>
        <p className="mb-2">
          <span className="font-semibold">Next Renewal Date:</span> YYYY-MM-DD
        </p>
      </div>
      <Button variant={"destructive"} className="bg-light">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
    </div>
  );
};

export default Profile;
