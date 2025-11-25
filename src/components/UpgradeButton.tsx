"use client";

export default function UpgradeButton() {
  async function handleUpgrade() {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  return (
    <button
      onClick={handleUpgrade}
      className="bg-[#A3A86D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8E955D] transition"
    >
      Upgrade to Premium
    </button>
  );
}
