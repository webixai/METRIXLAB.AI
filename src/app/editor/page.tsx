import FreeTools from "@/components/editor/FreeTools";
import PremiumTools from "@/components/editor/PremiumTools";

export default function EditorPage() {
  return (
    <main className="p-10 space-y-10">
      <FreeTools />
      <PremiumTools />
    </main>
  );
}
