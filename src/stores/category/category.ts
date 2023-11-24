import { defineStore } from "pinia";
import categoryApi from "../../api/category/category";

interface CategoryState {
  categories: any[];
}

export const useCategoryStore = defineStore({
  id: "category",
  state: (): CategoryState => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      try {
        const res = await categoryApi.getCategory();
        this.categories = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getCategoryId(categoryId: string) {
      try {
        await categoryApi.getCategoryId(categoryId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { categoryApi };
