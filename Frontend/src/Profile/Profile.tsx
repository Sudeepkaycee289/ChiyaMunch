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
        <h1 className="text-2xl font-bold">Name</h1>
        <p className="text-gray-600">Email</p>
      </div>
      <div className="mt-8 w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Subscription</h2>
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
    </div>
  );
};

export default Profile;
