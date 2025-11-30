import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/NavBar';

export const metadata = {
  title: 'MetrixLab AI',
  description: 'AI-powered website generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-br from-[#0a0a1a] via-[#14143c] to-[#0d1b2a] text-white min-h-screen">
          <Navbar />
          <main className="pt-20">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
