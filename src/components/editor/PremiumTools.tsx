import { currentUser } from "@clerk/nextjs/server";

export default async function PremiumTools() {
  const user = await currentUser();
  const isPremium = user?.publicMetadata?.isPremium;

  if (!isPremium) {
    return (
      <div className="opacity-40 pointer-events-none">
        <h2 className="text-xl font-bold mb-4 text-gray-400">🔒 Premium Tools (Locked)</h2>
        <p className="text-gray-400 mb-4">
          Unlock these features by upgrading to SiteForge Premium.
        </p>
        <a
          href="/upgrade"
          className="inline-block bg-[#A3A86D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8E955D] transition"
        >
          Upgrade Now
        </a>
      </div>
    );
  }

  // Visible only for Premium users
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 text-[#A3A86D]">✨ Premium Editor Tools</h2>
      <ul className="space-y-3">
        <li>🧠 AI Copywriter</li>
        <li>📊 SEO Optimizer</li>
        <li>🎬 Animation Controls</li>
        <li>🎨 Full CSS Editor</li>
        <li>💡 Advanced Responsive Editor</li>
      </ul>
    </section>
  );
}
