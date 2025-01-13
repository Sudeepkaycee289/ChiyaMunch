import { X } from "lucide-react";
import React, { useState } from "react";

const Bank = () => {
  const [bank, setBank] = useState("");
  const [receipt, setReceipt] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleBankChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBank(event.target.value);
  };

  const handleReceiptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setReceipt(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleRemoveImage = () => {
    setReceipt(null);
    setPreview(null);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Bank:", bank);
    console.log("Receipt:", receipt);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Bank Payment</h2>
      <label className="block mb-2">
        Select Bank:
        <select
          value={bank}
          onChange={handleBankChange}
          className="block w-full mt-1 p-2 border rounded"
        >
          <option value="">Select</option>
          <option value="Bank1">Bank 1</option>
          <option value="Bank2">Bank 2</option>
          <option value="Bank3">Bank 3</option>
        </select>
      </label>
      <label className="block mb-2">
        Upload Receipt:
        <div className="relative mt-1">
          <input
            type="file"
            onChange={handleReceiptChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex items-center justify-center w-full p-2 border rounded bg-gray-100">
            {receipt ? receipt.name : "Choose a file"}
          </div>
        </div>
        {preview && (
          <div className="relative mt-2">
            <img src={preview} alt="Receipt Preview" className="max-h-48" />
            <button
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 mt-1 mr-1 bg-red-500 text-white rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
        )}
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

export default Bank;
