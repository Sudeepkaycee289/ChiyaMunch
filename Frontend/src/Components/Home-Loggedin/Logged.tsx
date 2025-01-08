import { Crown } from "lucide-react";

const Logged = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-5 mt-2">
                <h1 className="text-brown-700 text-2xl">Coffee</h1>
                <a href="#" className="text-secondary hover:underline text-sm">View All</a>
            </div>
            <div className="flex gap-5 flex-wrap">
                <div className=" flex flex-row border border-gray-300 rounded-lg w-50 p-2.5 gap-6 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Iced Matcha Latte" className="max-w-full h-auto rounded-lg" />
                    <div className="flex flex-col justify-between">
                    <h2 className="text-lg my-2.5 text-gray-800">Iced Matcha Latte</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 160</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 128</p>
                            <Crown className="crown-icon absolute top-[-20px] right-0 transform scale-75 rotate-30" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" flex flex-row border border-gray-300 rounded-lg w-50 p-2.5 gap-6 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Iced Matcha Latte" className="max-w-full h-auto rounded-lg" />
                    <div className="flex flex-col justify-between">
                    <h2 className="text-lg my-2.5 text-gray-800">Iced Matcha Latte</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 160</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 128</p>
                            <Crown className="crown-icon absolute top-[-20px] right-0 transform scale-75 rotate-30" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" flex flex-row border border-gray-300 rounded-lg w-50 p-2.5 gap-6 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Iced Matcha Latte" className="max-w-full h-auto rounded-lg" />
                    <div className="flex flex-col justify-between">
                    <h2 className="text-lg my-2.5 text-gray-800">Iced Matcha Latte</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 160</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 128</p>
                            <Crown className="crown-icon absolute top-[-20px] right-0 transform scale-75 rotate-30" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" flex flex-row border border-gray-300 rounded-lg w-50 p-2.5 gap-6 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Iced Matcha Latte" className="max-w-full h-auto rounded-lg" />
                    <div className="flex flex-col justify-between">
                    <h2 className="text-lg my-2.5 text-gray-800">Iced Matcha Latte</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 160</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 128</p>
                            <Crown className="crown-icon absolute top-[-20px] right-0 transform scale-75 rotate-30" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logged;
