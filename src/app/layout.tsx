import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METRIXLAB CREATION",
  description: "Build beautiful websites with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
