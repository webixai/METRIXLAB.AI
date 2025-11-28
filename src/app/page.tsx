import Navbar from '@/components/Navbar';
import EditButton from '@/components/EditButton';
import PreviewArea from '@/components/PreviewArea';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <PreviewArea />
      <EditButton />
    </main>
  );
}
