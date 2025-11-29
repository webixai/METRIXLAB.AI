import EditButton from "@/components/EditButton";
import PreviewArea from "@/components/PreviewArea";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <PreviewArea />
      <EditButton />
    </main>
  );
}
