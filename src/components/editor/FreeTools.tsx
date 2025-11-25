"use client";

interface FreeToolsProps {
  isActive?: boolean;
}

export default function FreeTools({ isActive = true }: FreeToolsProps) {
  const tools = [
    { id: "template-library", name: "Template Library", description: "5 pre-built templates" },
    { id: "code-export", name: "Code Export", description: "Download generated HTML" },
    { id: "preview", name: "Live Preview", description: "Real-time website preview" },
    { id: "responsive", name: "Responsive Design", description: "Mobile-friendly layouts" },
    { id: "tailwind", name: "Tailwind CSS", description: "Professional styling" },
    { id: "gemini-ai", name: "Gemini AI", description: "Free AI generation (1M tokens/min)" },
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4" style={{ color: '#999999' }}>Free Tools</h3>
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
