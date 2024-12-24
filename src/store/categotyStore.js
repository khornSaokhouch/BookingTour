import { create } from "zustand";

const useCategoryStore = create((set, get) => ({
  categories: [],
  lastId: 1,

  addCategory: (category) =>
    set((state) => {
      const newId = get().lastId + 1;
      const newCategory = { ...category, id: newId };
      return {
        categories: [...state.categories, newCategory],
        lastId: newId,
      };
    }),

  getCategoryById: (id) => {
    const state = get();
    return state.categories.find((category) => category.id === id);
  },

  updateCategory: (updatedCategory) => {
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      ),
    }));
  },

  setCategory: (category) =>
    set((state) => {
      const updatedCategory = [...state.categories];
      const index = updatedCategory.findIndex(
        (cate) => cate.id === category.id
      );
      if (index !== -1) {
        updatedCategory[index] = category; // Update existing category
      } else {
        const newId = get().lastId + 1;
        const newCategory = { ...category, id: newId };
        updatedCategory.push(newCategory); // Add new category
        return { categories: updatedCategory, lastId: newId };
      }
      return { categories: updatedCategory };
    }),

  resetCategories: () => set({ categories: [] }),

  generateIncrementalId: () => {
    const newId = get().lastId + 1;
    set({ lastId: newId });
    return newId.toString();
  },
}));

export default useCategoryStore;
