import { Crown } from "lucide-react";
import items from "../../../public/Data/Items.json";
import { useNavigate } from "react-router-dom";

interface Item {
  Image: string;
  Title: string;
  Subtitle: string;
  PriceA: number;
  PriceB: number;
  Category?: string;
}

const categorizeItems = (items: Item[]) => {
  const categories: { [key: string]: Item[] } = {};
  items.forEach((item) => {
    const category = item.Category || "Uncategorized";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(item);
  });
  return categories;
};

const Logged = () => {
  const navigate = useNavigate();
  const categorizedItems = categorizeItems(items);

  const handleViewAll = (category: string) => {
    navigate(`/items/${category}`);
  };

  return (
    <div className="p-5">
      {Object.keys(categorizedItems).map((category) => (
        <div className="border rounded m-2	gap-2" key={category}>
          <div className="flex justify-between items-center mb-5 m-2">
            <h1 className="text-brown-700 text-2xl">{category}</h1>
            <span
              onClick={() => handleViewAll(category)}
              className="text-primary hover:underline text-sm mr-2 cursor-pointer">
              View All
              </span>
          </div>
          <div className="flex gap-5 m-2 flex-wrap">
            {categorizedItems[category].map((item, index) => (
              <div
                key={index}
                className="flex flex-row border border-gray-300 rounded-lg p-2.5 gap-6 text-center bg-gray-100"
              >
                <img
                  src={item.Image}
                  alt={item.Title}
                  className="max-w-[100px] max-h-[100px] rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-lg my-2.5 text-gray-800">{item.Title}</h2>
                  <div className="text-sm text-gray-600 flex justify-between gap-3 items-end">
                    <p className="text-red-500">NPR {item.PriceA}</p>
                    <div className="text-sm text-green-600 flex flex-col items-end leading-3">
                      <Crown className="crown-icon w-5 h-5 transform scale-75 rotate-45" />
                      <p>NPR {item.PriceB}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Logged;
