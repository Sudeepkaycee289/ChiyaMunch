import React from 'react';
import Modal from 'react-modal';

interface VerificationProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Verification: React.FC<VerificationProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="verification-modal">
      <div className="verification-container bg-white p-6 rounded-lg shadow-lg w-96 mx-auto">
        <h2 className="text-2xl font-bold mb-4">OTP Verification Required</h2>
        <div className="icon-message mb-4">
          {/* Icon of message */}
          <i className="message-icon text-4xl text-blue-500"></i>
        </div>
        <p className="mb-2">Check your message</p>
        <p className="mb-4">Enter your OTP</p>
        <div className="otp-fields flex justify-between mb-4">
          {/* 4 Digit Field */}
          <input type="text" maxLength={1} className="w-12 h-12 text-center border border-gray-300 rounded" />
          <input type="text" maxLength={1} className="w-12 h-12 text-center border border-gray-300 rounded" />
          <input type="text" maxLength={1} className="w-12 h-12 text-center border border-gray-300 rounded" />
          <input type="text" maxLength={1} className="w-12 h-12 text-center border border-gray-300 rounded" />
        </div>
        <p className="mb-4">Didn't receive the code? <button className="text-blue-500">Send again</button></p>
        <div className="navigation-buttons flex justify-between">
          <button onClick={onRequestClose} className="bg-gray-200 px-4 py-2 rounded">Back to Signup</button>
          <button onClick={() => {/* handle sign up */}} className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      </div>
    </Modal>
  );
};

export default Verification;
