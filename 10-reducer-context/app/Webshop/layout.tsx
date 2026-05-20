"use client";

import { useState, useReducer, useEffect } from "react";
import { Cart } from "../components/Cart";
import { WebshopContext } from "../contexts/WebshopContext";
import { Product } from "../models/Product";
import { CartReducer } from "../reducers/CartReducer";
import "./../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, dispatch] = useReducer(CartReducer, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products",
      );

      const data: Product[] = await response.json();
      setProducts(data);
    };

    if (products.length > 0) return;

    getData();
  });

  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <WebshopContext.Provider value={{ products, cart, dispatch }}>
          <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Cart />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
              {children}
            </main>
          </div>
        </WebshopContext.Provider>
      </body>
    </html>
  );
}
