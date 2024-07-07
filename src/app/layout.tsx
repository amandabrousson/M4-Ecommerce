import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/elementos/Navbar/NavBar";
import Footer from "@/Components/elementos/Navbar/Footer";
import { AuthProvider } from '@/Components/authContext'; 
import { CartProvider } from "@/Components/elementos/Cart/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexusTech",
  description: "Discover how technology can enhance your everyday life with innovation and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
