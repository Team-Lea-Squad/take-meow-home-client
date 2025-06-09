import { create } from "zustand";

interface AddressState {
  selectedAddress: string;
  detailAddress: string;
  setSelectedAddress: (addr: string) => void;
  setDetailAddress: (addr: string) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
  selectedAddress: "",
  detailAddress: "",
  setSelectedAddress: (addr) => set({ selectedAddress: addr }),
  setDetailAddress: (addr) => set({ detailAddress: addr })
}));
