"use client";

interface PremiumToolsProps {
  isActive?: boolean;
}

export default function PremiumTools({ isActive = false }: PremiumToolsProps) {
  const tools = [
    { id: "ai-enhance", name: "AI Enhancement", description: "Advanced AI refinements and optimizations" },
    { id: "seo-optimize", name: "SEO Optimization", description: "Built-in SEO best practices" },
    { id: "analytics", name: "Analytics", description: "Integrated tracking and insights" },
    { id: "custom-domain", name: "Custom Domain", description: "Use your own domain name" },
    { id: "api-access", name: "API Access", description: "Full API for programmatic control" },
    { id: "priority-support", name: "Priority Support", description: "24/7 dedicated support" },
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4" style={{ color: '#999999' }}>Premium Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="p-4 rounded-lg border-2 cursor-pointer transition-all"
            style={{
              backgroundColor: isActive ? '#e6e6e6' : '#f5f5f5',
              borderColor: isActive ? '#999999' : '#d1d1d1',
            }}
          >
            <div className="font-semibold text-gray-900">{tool.name}</div>
            <div className="text-sm text-gray-600 mt-1">{tool.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
