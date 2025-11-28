'use client';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-[#0b0b0f] text-white font-sans min-h-screen">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
