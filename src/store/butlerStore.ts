import { create } from "zustand";

interface ButlerState {
  isButlerSelected: boolean;
  setIsButlerSelected: (selected: boolean) => void;
}

export const useButlerStore = create<ButlerState>((set) => ({
  isButlerSelected: false,
  setIsButlerSelected: (selected) => set({ isButlerSelected: selected })
}));
