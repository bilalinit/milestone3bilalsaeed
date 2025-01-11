"use client"
import { StaticImageData } from "next/image";
import { createContext, useState, useContext } from "react";

// Define the types for the cart and the context value
interface CartItem {
    image: string | StaticImageData;
    name: string;
    price: number;
}

interface AppContextType {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// Create a context with a default value of `undefined`
const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    return (
        <AppContext.Provider value={{ cart, setCart }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to use the context
export function useAppContext() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within an AppWrapper");
    }

    return context;
}
