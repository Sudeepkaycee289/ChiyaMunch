import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface HeaderContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/public/ChiyaMunchLogo.svg",
  });
  const [cartCount, setCartCount] = useState<number>(0);

  return (
    <HeaderContext.Provider value={{ user, setUser, cartCount, setCartCount }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = (): HeaderContextProps => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
