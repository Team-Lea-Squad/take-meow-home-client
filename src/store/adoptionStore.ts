import { create } from "zustand";

interface AdoptionState {
  isAdopted: boolean;
  adoptedTime: string | null;
  setIsAdopted: (value: boolean) => void;
  setAdoptedTime: (time: string) => void;
}

export const useAdoptionStore = create<AdoptionState>((set) => ({
  isAdopted: false,
  adoptedTime: null,
  setIsAdopted: (value) => set({ isAdopted: value }),
  setAdoptedTime: (time) => set({ adoptedTime: time })
}));
