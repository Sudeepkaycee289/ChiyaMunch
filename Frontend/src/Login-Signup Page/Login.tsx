import React from 'react';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="login-container flex flex-col items-center p-5 border border-gray-300 rounded-lg">
      <h2>Sign in</h2>
      <p>Don't Have an account? <a href="/Signup" className="text-red-600 hover:underline">Join Us</a></p>
      <form className="flex flex-col w-full max-w-md">
        <label className="mb-2">
          Email/Phone number:
          <input type="text" name="emailOrPhone" className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </label>
        <label className="mb-2">
          Password:
          <input type="password" name="password" className="mt-1 p-2 border border-gray-300 rounded w-full" />
        </label>
        <button type="submit" className="mt-5 p-2 bg-blue-600 text-white rounded cursor-pointer">Login</button>
      </form>
      <div className="or-separator my-5 text-center">or</div>
      <button className="google-login bg-blue-600 text-white p-2 rounded">Continue with Google</button>
    </div>
  );
};

export default Login;
