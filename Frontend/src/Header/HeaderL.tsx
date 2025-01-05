
const HeaderL = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md">
                <nav className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-center">
                    <div className="flex items-center justify-between gap-3 mx-18 flex-1">
                        <h1 className="text-xl font-semibold text-black text-center mx-auto flex-1">Menu</h1>
                        <div className="flex gap-3 items-end">
                            <div className="h-10 w-10 bg-gray-300 rounded-md"></div>
                            <div className="h-13 w-13 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderL;
