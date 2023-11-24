import { defineStore } from "pinia";
import productApi from "../../api/products/product";

interface ProductState {
  products: any[];
  images: any[];
  filter_products: any[];
}

export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    products: [],
    images: [],
    filter_products: [],
  }),
  actions: {
    async getProducts(params: any) {
      try {
        const res = await productApi.getProduct(params);
        this.products = res;
        params.last_page = Math.ceil(res.count / params.limit);
      } catch (err) {
        console.error(err);
      }
    },
    async getProductSearch(params: any) {
      try {
        const res = await productApi.getProductSearch(params);
        this.products = res.products;
      } catch (err) {
        console.error(err);
      }
    },
    async getProductImage(product_id: string) {
      try {
        const res = await productApi.getImage(product_id);
        this.images = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProductId(productId: string) {
      try {
        await productApi.getProductId(productId);
      } catch (err) {
        console.error(err);
      }
    },
    async updateProduct(payload: any, productId: string) {
      try {
        await productApi.updateProduct(payload, productId);
      } catch (err) {
        console.error(err);
      }
    },
    async getFilter(payload: any) {
      try {
        const res = await productApi.getFilter(payload);
        this.filter_products = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { productApi };
