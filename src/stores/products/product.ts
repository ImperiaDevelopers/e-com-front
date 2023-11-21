import { defineStore } from "pinia";
import { ProductApi } from "../../api/products/product";

interface ProductState {
  products: any[]; // Замените any на реальный тип продукта, если возможно
}

export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    products: [],
  }),
  actions: {
    async getProducts(params: { page?: number; limit?: number }) {
      try {
        const res = await ProductApi.getProduct(params);
        this.products = res.products;
        params.last_page = Math.ceil(res.count / params.limit);
      } catch (err) {
        console.error(err);
      }
    },
    async getProductId(productId: string) {
      try {
        await ProductApi.getProductId(productId);
      } catch (err) {
        console.error(err);
      }
    },
    async updateProduct(payload: any, productId: string) {
      try {
        await ProductApi.updateProduct(payload, productId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { ProductApi }; // экспортируем интерфейс, если он используется в других местах
