import { create } from "zustand";
interface useData {
  text: string;
  setText: (val: string) => void;
}
export const useData = create<useData>((set) => ({
  text: "t",
  setText: (val: string) => set({ text: val }),
}));
