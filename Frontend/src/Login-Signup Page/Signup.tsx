import React, { useState } from 'react';
import Verification from './Verification';

interface SignupProps {
  onClose: () => void;
}

const Signup: React.FC<SignupProps> = ({ onClose }) => {
  const [isVerificationOpen, setVerificationOpen] = useState(false);

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();

    setVerificationOpen(true);
  };

  return (
    <div className="max-w-md mx-auto p-5 rounded-lg shadow-lg">
      {/* <button className="close-button" onClick={onClose}>X</button> */}
      <h2 className="text-center font-bold ">Sign Up</h2>
      <div className="bg-white p-2 rounded-lg shadow-md">
        <form onSubmit={handleSignup}>
          <div className="mb-2">
            <label htmlFor="name" className="block mb-2 font-medium	">Name</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded mb-2" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block mb-2 font-medium	">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded mb-2" />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="block mb-2 font-medium	">Phone Number</label>
            <input type="tel" id="phone" name="phone" required className="w-full p-2 border border-gray-300 rounded mb-2" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block mb-2 font-medium	">Password</label>
            <input type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded mb-2" />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-800">Sign Up</button>
        </form>
      </div>
      <div className="text-center mt-2">
        <p className="mb-2">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
        <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-800">Continue with Google</button>
      </div>
      <Verification isOpen={isVerificationOpen} onRequestClose={() => setVerificationOpen(false)} />
    </div>
  );
};

export default Signup;
