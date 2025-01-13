import React, { useState } from "react";
import { X } from "lucide-react"; // Import the X icon from lucide icons

const OnlineTransaction = () => {
  const [platform, setPlatform] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handlePlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPlatform(event.target.value);
  };

  const handleScreenshotChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    setScreenshot(file);
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
    setScreenshot(null);
    setPreview(null);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Platform:", platform);
    console.log("Screenshot:", screenshot);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Online Transaction</h2>
      <label className="block mb-2">
        Select Platform:
        <select
          value={platform}
          onChange={handlePlatformChange}
          className="block w-full mt-1 p-2 border rounded"
        >
          <option value="">Select</option>
          <option value="Platform1">Platform 1</option>
          <option value="Platform2">Platform 2</option>
        </select>
      </label>
      <label className="block mb-2">
        Upload Screenshot:
        <div className="relative mt-1">
          <input
            type="file"
            onChange={handleScreenshotChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex items-center justify-center w-full p-2 border rounded bg-gray-100">
            {screenshot ? screenshot.name : "Choose a file"}
          </div>
        </div>
        {preview && (
          <div className="relative mt-2">
            <img src={preview} alt="Screenshot Preview" className="max-h-48" />

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

export default OnlineTransaction;
