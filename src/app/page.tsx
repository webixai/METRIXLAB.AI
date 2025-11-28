import Navbar from '@/components/Navbar';
import EditButton from '@/components/EditButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      <div className="pt-24 p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to MetrixLab AI</h1>
      </div>
      <EditButton />
    </main>
  );
}
