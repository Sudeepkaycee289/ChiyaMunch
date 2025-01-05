
const Logged = () => {
    return (
        <div className="p-5">
            <h1 className="text-brown-700 text-2xl mb-5">Coffee</h1>
            <div className="text-right mb-2.5">
                <a href="#" className="text-brown-700 no-underline text-sm">View All</a>
            </div>
            <div className="flex gap-5 flex-wrap">
                <div className="border border-gray-300 rounded-lg w-50 p-2.5 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Iced Matcha Latte" className="max-w-full h-auto rounded-lg" />
                    <h2 className="text-lg my-2.5 text-gray-800">Iced Matcha Latte</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 160</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 128</p>
                            <i className="crown-icon absolute top-[-20px] right-0"></i>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg w-50 p-2.5 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Espresso" className="max-w-full h-auto rounded-lg" />
                    <h2 className="text-lg my-2.5 text-gray-800">Espresso</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 150</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 120</p>
                            <i className="crown-icon absolute top-[-20px] right-0"></i>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg w-50 p-2.5 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Americano" className="max-w-full h-auto rounded-lg" />
                    <h2 className="text-lg my-2.5 text-gray-800">Americano</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 120</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 96</p>
                            <i className="crown-icon absolute top-[-20px] right-0"></i>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg w-50 p-2.5 text-center bg-gray-100">
                    <img src="https://via.placeholder.com/150" alt="Cappuccino" className="max-w-full h-auto rounded-lg" />
                    <h2 className="text-lg my-2.5 text-gray-800">Cappuccino</h2>
                    <div className="text-sm text-gray-600 flex justify-between">
                        <p className="line-through">NPR 150</p>
                        <div className="text-sm text-green-600 flex items-center relative">
                            <p>NPR 120</p>
                            <i className="crown-icon absolute top-[-20px] right-0"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logged;
