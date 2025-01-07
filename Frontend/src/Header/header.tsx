
const Header = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md">
                <nav className="max-w-6xl mx-auto py-3 px-6 flex items-center justify-center">
                    <div className="flex items-center justify-center gap-3">
                        <img src="/ChiyaMunchLogo.svg" alt="ChiyaMunch" className="h-16 w-16"/>
                        <h1 className="text-purple-700 text-xl font-semibold text-center">Chiya Munch</h1>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
