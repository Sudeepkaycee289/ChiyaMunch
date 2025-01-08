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
    <div className="flex items-center justify-center min-h-screen">
      <div className="signup-container flex flex-col items-center rounded-lg p-6 shadow-lg bg-white">
        <h2 className="font-bold text-black mb-4">Sign Up</h2>
        <p>Already have an account? <a href="/login" className="text-red-500 hover:underline mt-2">Login here</a></p>
        <form className="flex flex-col w-full max-w-md mt-4" onSubmit={handleSignup}>
          <label className="mb-2">
            Name:
            <input type="text" name="name" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </label>
          <label className="mb-2">
            Email:
            <input type="email" name="email" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </label>
          <label className="mb-2">
            Phone Number:
            <input type="tel" name="phone" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </label>
          <label className="mb-2">
            Password:
            <input type="password" name="password" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </label>
          <label className="mb-2">
            Confirm Password:
            <input type="password" name="confirm-password" className="mt-1 p-2 border border-gray-300 rounded w-full" required />
          </label>
          <div className="flex flex-row items-start">
            <input type="checkbox" name="terms" className="mr-2" required />
            <label className="text-sm text-black">I accept the <a href="#" className="text-primary hover:underline dark:text-primary-500">Terms and Conditions</a></label>
          </div>
          <button type="submit" className="mt-5 p-2 bg-primary text-white rounded cursor-pointer">Create an account</button>
        </form>
        <div className="or-separator my-2 text-center">or</div>
        <button className="google-login bg-primary text-white p-2 rounded">Continue with Google</button>
      </div>
      <Verification isOpen={isVerificationOpen} onRequestClose={() => setVerificationOpen(false)} />
    </div>
  );
};

export default Signup;
