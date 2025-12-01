'use client';
import { useState } from 'react';

export default function Home() {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, template: 'landing' }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate website');
      }

      const data = await response.json();
      setGeneratedHTML(data.code);
      setPreviewVisible(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
      console.error('Generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      {!previewVisible ? (
        <>
          <h2 className="text-4xl font-['Outfit'] font-semibold text-[#00E5FF] mb-4">
            Create Your Website Instantly
          </h2>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Describe your idea, and MetrixLab AI will design a stunning site for you.
          </p>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. A modern portfolio for a UI designer..."
            className="w-full max-w-2xl p-4 rounded-xl text-black text-base shadow-lg outline-none border border-[#7C3AED]/40 focus:border-[#00E5FF] transition-all"
            rows={4}
          />
          <button
            onClick={handleGenerate}
            className="mt-5 px-8 py-3 rounded-xl font-['Poppins'] bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] hover:opacity-90 transition-all text-white font-medium"
          >
            Generate
          </button>

          {loading && (
            <div className="mt-8 flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-[#00E5FF]/40 border-t-[#7C3AED] rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-400 text-sm">Generating your site...</p>
            </div>
          )}
        </>
      ) : (
        <section className="mt-10 w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden relative">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-[#7C3AED]">Live Preview</h3>
          </div>

          {error ? (
            <div className="p-6 text-red-600">
              <p>Error: {error}</p>
            </div>
          ) : (
            <iframe
              srcDoc={generatedHTML}
              className="w-full h-[600px] border-0"
              title="Generated Website Preview"
            />
          )}

          {/* Button group */}
          <div className="flex gap-2 p-4 bg-gray-100 border-t border-gray-200">
            <button
              onClick={() => setPreviewVisible(false)}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded-lg transition-all"
            >
              ← Back
            </button>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = `data:text/html;charset=utf-8,${encodeURIComponent(generatedHTML)}`;
                link.download = 'website.html';
                link.click();
              }}
              className="px-4 py-2 bg-[#7C3AED] hover:bg-[#5f2ddb] text-white rounded-lg transition-all"
            >
              ⬇️ Download
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
