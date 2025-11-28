'use client';
import { useEditorStore } from '@/store/useEditorStore';

export default function TestEditor() {
  const { backgroundColor, setBackgroundColor } = useEditorStore();

  return (
    <div
      className="p-6 rounded-md"
      style={{ backgroundColor }}
      onClick={() => setBackgroundColor('#1e1e2f')}
    >
      Click me to change background color!
    </div>
  );
}
