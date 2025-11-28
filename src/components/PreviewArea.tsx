'use client';
import { useEditorStore } from '@/store/useEditorStore';

export default function PreviewArea() {
  const { backgroundColor, textColor, accentColor, fontFamily, padding, spacing } = useEditorStore();

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily,
        padding,
        gap: spacing,
      }}
    >
      <h1 style={{ color: accentColor }} className="text-4xl font-bold text-center py-10">
        Live Preview
      </h1>
      <p className="text-center max-w-xl mx-auto">
        This is your generated website preview. Adjust colors, fonts, and layout in the edit panel.
      </p>
    </div>
  );
}
