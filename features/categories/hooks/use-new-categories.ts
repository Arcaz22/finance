import { create } from "zustand"

type NewCategoriesState = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useNewCategory = create<NewCategoriesState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))
