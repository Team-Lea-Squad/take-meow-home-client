import { create } from "zustand";

interface VisitState {
  isAccepted: boolean;
  setIsAccepted: (value: boolean) => void;
}

export const useVisitStore = create<VisitState>((set) => ({
  isAccepted: false,
  setIsAccepted: (value) => set({ isAccepted: value })
}));
