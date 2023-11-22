import { defineStore } from "pinia";
import categoryApi from "../../api/category/category";

interface CategoryState {
  categorys: any;
}

export const useCategoryStore = defineStore({
  id: "category",
  state: (): CategoryState => ({
    categorys: [],
  }),
  actions: {
    async getCategorys() {
      try {
        const res = await categoryApi.getCategory();
        this.categorys = res;
        console.log(this.categorys, "categisy this");
        console.log(res, "get all categorys");
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
