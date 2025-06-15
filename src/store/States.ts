import { create } from "zustand";

interface ModeStoreType {
  mode: string;
  setMode: (newMode: string) => void;
}

export const useModeStore = create<ModeStoreType>((set) => ({
  mode: "dark",
  setMode: (newMode: string) => set({ mode: newMode }),
}));

interface WebStyleStoreType {
  webStyle: string;
  setWebStyle: (newWebStyle: string) => void;
}

export const useWebStyleStore = create<WebStyleStoreType>((set) => ({
  webStyle: "animated",
  setWebStyle: (newWebStyle: string) => set({ webStyle: newWebStyle }),
}));
