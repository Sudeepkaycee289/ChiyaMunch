import { useState } from 'react';
import Modal from 'react-modal';
import Signup from './Components/Login-Signup Page/Signup';
import Login from './Components/Login-Signup Page/Login';

Modal.setAppElement('#root'); // Set the app element for react-modal

const Hero = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col items-center justify-between p-6 md:flex-row mx-18">
      <div className="text-center mb-6 order-2 md:text-left md:mb-0 md:order-1">
        <h1 className="text-4xl font-bold mb-4">Chiya Munch</h1>
        <h4 className="text-lg mb-2">Your Bite, Your Delight</h4>
        <h4 className="text-lg mb-2">तपाईंको स्वाद, तपाईंको खुशी।</h4>
        <div className="flex gap-3">
          <button className="bg-primary text-white py-2 px-4 rounded mb-2" onClick={handleLoginClick}>Login</button>
          <button className="bg-white text-black border-2 border-black	 py-2 px-4 rounded mb-2" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src="/ChiyaMunch Image.svg" alt="ChiyaMunch" className="w-full h-auto" />
      </div>
      <Modal isOpen={showSignup} onRequestClose={handleCloseSignup} className="max-w-fit flex items-center justify-center mx-auto h-screen"   >
        <Signup onClose={handleCloseSignup} />
      </Modal>
      <Modal isOpen={showLogin} onRequestClose={handleCloseLogin} className="max-w-fit mx-auto flex items-center justify-center h-screen">
        <Login onClose={handleCloseLogin} />
      </Modal>
    </div>
  );
};

export default Hero;
