import { create } from 'zustand';

interface EditorState {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
  padding: number;
  spacing: number;
  selectedElementId: string | null;

  setBackgroundColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setAccentColor: (color: string) => void;
  setFontFamily: (font: string) => void;
  setPadding: (value: number) => void;
  setSpacing: (value: number) => void;
  setSelectedElementId: (id: string | null) => void;
  hydrateFromMetadata: (theme: any) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  backgroundColor: '#0b0b0f',
  textColor: '#ffffff',
  accentColor: '#b78bfa',
  fontFamily: 'Poppins',
  padding: 24,
  spacing: 16,
  selectedElementId: null,

  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTextColor: (color) => set({ textColor: color }),
  setAccentColor: (color) => set({ accentColor: color }),
  setFontFamily: (font) => set({ fontFamily: font }),
  setPadding: (value) => set({ padding: value }),
  setSpacing: (value) => set({ spacing: value }),
  setSelectedElementId: (id) => set({ selectedElementId: id }),
  hydrateFromMetadata: (theme) => set({
    backgroundColor: theme.backgroundColor || '#0b0b0f',
    textColor: theme.textColor || '#ffffff',
    accentColor: theme.accentColor || '#b78bfa',
    fontFamily: theme.fontFamily || 'Poppins',
    padding: theme.padding || 24,
    spacing: theme.spacing || 16,
  }),
}));
