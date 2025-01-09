import { Crown } from "lucide-react";

const ItemCard = () => {
  return (
      <div className="flex flex-col justify-center items-center border w-80 border-gray-300 rounded-lg p-2.5 gap-6 text-center bg-gray-100">
        <img
          src="https://via.placeholder.com/300"
          alt="Iced Matcha Latte"
          className="w-[318px] h-[222px] rounded-lg"
        />
        <div className="flex flex-col justify-between items-start w-full">
          <h2 className="text-lg my-2.5 text-gray-800">Kurauni Chiya</h2>
          <p className="text-left text-sm text-gray-500 ">
            Mixed Herbs, Special Teas in French Press, 4 servings
          </p>
          <div className="border w-full mx-auto text-sm flex justify-between items-end ">
            <p className="font-bold text-red-600 border rounded-3xl border-red-600 p-2">
              NPR 160
            </p>
            <div className="text-sm flex flex-col items-end">
              <Crown
                color="#FFD700"
                className="crown-icon w-5 h-5 transform scale-75 rotate-45"
              />
              <p className="font-bold text-green-600 border rounded-3xl border-green-600 p-2">
                NPR 128
              </p>
            </div>
          </div>
          <button className="bg-primary p-2 rounded mt-2 w-full">
            Add to cart
          </button>
        </div>
      </div>  );
};

export default ItemCard;
