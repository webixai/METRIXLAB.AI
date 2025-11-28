import NavBar from '@/components/NavBar';
import EditButton from '@/components/EditButton';
import PreviewArea from '@/components/PreviewArea';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <NavBar />
      <PreviewArea />
      <EditButton />
    </main>
  );
}
