import { useState } from "react";

const Card = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Card Payment</h2>
      <label className="block mb-2">
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardNumber(e.target.value)
          }
          className="block w-full mt-1 p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Expiry Date:
        <input
          type="text"
          value={expiryDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setExpiryDate(e.target.value)
          }
          className="block w-full mt-1 p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCvv(e.target.value)
          }
          className="block w-full mt-1 p-2 border rounded"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Send
      </button>
    </div>
  );
};

export default Card;
