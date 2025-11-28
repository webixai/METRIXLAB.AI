import { create } from 'zustand';

interface EditorState {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
  padding: number;
  spacing: number;
  setBackgroundColor: (v: string) => void;
  setTextColor: (v: string) => void;
  setAccentColor: (v: string) => void;
  setFontFamily: (v: string) => void;
  setPadding: (v: number) => void;
  setSpacing: (v: number) => void;
  hydrateFromMetadata: (data: Partial<EditorState>) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  backgroundColor: '#ffffff',
  textColor: '#000000',
  accentColor: '#b78bfa',
  fontFamily: 'Beckan',
  padding: 16,
  spacing: 16,
  setBackgroundColor: (v) => set({ backgroundColor: v }),
  setTextColor: (v) => set({ textColor: v }),
  setAccentColor: (v) => set({ accentColor: v }),
  setFontFamily: (v) => set({ fontFamily: v }),
  setPadding: (v) => set({ padding: v }),
  setSpacing: (v) => set({ spacing: v }),
  hydrateFromMetadata: (data) => set(data),
}));
