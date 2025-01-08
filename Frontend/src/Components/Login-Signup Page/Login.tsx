import React from 'react';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="login-container flex flex-col items-center rounded-lg p-6 shadow-lg">
        <h2 className="font-bold">Sign in</h2>
        <p>Don't Have an account? <a href="/Signup" className="text-red-500 hover:underline mt-2">Join Us</a></p>
        <form className="flex flex-col w-full max-w-md mt-4">
          <label className="mb-2">
            Email/Phone number:
            <input type="text" name="emailOrPhone" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </label>
          <label className="mb-2">
            Password:
            <input type="password" name="password" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </label>
          <div className="flex justify-between items-center mb-1">
            <label>
              <input type="checkbox" name="rememberMe" className="mr-2 text-sm" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-primary text-sm hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="mt-5 p-2 bg-primary text-white rounded cursor-pointer">Login</button>
        </form>
        <div className="or-separator my-2 text-center">or</div>
        <button className="google-login bg-primary text-white p-2 rounded">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
