import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "METRIXLAB CREATION - AI Website Builder",
  description: "Build stunning websites with AI in seconds",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
