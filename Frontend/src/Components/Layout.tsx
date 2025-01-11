import Header from "./Header/Header";

export const Layout = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};
