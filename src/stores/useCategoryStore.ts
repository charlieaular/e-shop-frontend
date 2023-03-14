import { create } from 'zustand'

interface CategoryState {
  categorySelected: number;
  setCategory: (categorySelected: number) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categorySelected: 0,
  setCategory: (categorySelected: number) => set({categorySelected}),
}))