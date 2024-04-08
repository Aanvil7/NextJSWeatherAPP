import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Simple Weather Widget",
    description: "Created for the next.js workshop",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="container grid h-screen place-items-center mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
