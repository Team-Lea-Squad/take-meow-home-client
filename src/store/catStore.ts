import { create } from "zustand";

interface CatState {
  catName: string;
  setCatName: (name: string) => void;
}

export const useCatStore = create<CatState>((set) => ({
  catName: "",
  setCatName: (name) => set({ catName: name })
}));
