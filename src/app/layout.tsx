import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "./context/UserContext";


export const metadata: Metadata = {
  title: "Juicy Habits",
  description: "An App for healthy habbits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>  
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
