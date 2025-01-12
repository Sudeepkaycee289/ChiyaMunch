import { Crown } from "lucide-react";
import items from '../../../public/Data/Items.json';

const ItemCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center border w-80 border-gray-300 rounded-lg p-2.5 gap-6 text-center bg-gray-100">
          <img
            src={item.Image}
            alt={item.Title}
            className="w-[318px] h-[222px] rounded-lg"
          />
          <div className="flex flex-col justify-between items-start w-full">
            <h2 className="text-lg my-2.5 text-gray-800">{item.Title}</h2>
            <p className="text-left text-sm text-gray-500 ">
              {item.Subtitle}
            </p>
            <div className="border w-full mx-auto text-sm flex justify-between items-end ">
              <p className="font-bold text-red-600 border rounded-3xl border-red-600 p-2">
                NPR {item.PriceA}
              </p>
              <div className="text-sm flex flex-col items-end">
                <Crown
                  color="#FFD700"
                  className="crown-icon w-5 h-5 transform scale-75 rotate-45"
                />
                <p className="font-bold text-green-600 border rounded-3xl border-green-600 p-2">
                  NPR {item.PriceB}
                </p>
              </div>
            </div>
            <button className="bg-primary p-2 rounded mt-2 w-full">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
