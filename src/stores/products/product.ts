import { defineStore } from "pinia";
import productApi from "../../api/products/product";

interface ProductState {
  products: any[];
  images: any[];
  pro_per_group: any[];
  performanse: any[];
  per_info: any[];
}

export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    products: [],
    images: [],
    pro_per_group: [],
    performanse: [],
    per_info: [],
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
        await productApi.getFilter(payload);
      } catch (err) {
        console.error(err);
      }
    },
    async getProPerGroup(params: any) {
      try {
        const res = await productApi.getProPerGroup(params);
        this.pro_per_group = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProPerGroupId(groupId: string) {
      try {
        await productApi.getProPerGroupId(groupId);
      } catch (err) {
        console.error(err);
      }
    },
    async getPerformance(params: any) {
      try {
        const res = await productApi.getPerfomance(params);
        this.performanse = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getPerformanceId(perforID: string) {
      try {
        await productApi.getPerfomanceID(perforID);
      } catch (err) {
        console.error(err);
      }
    },
    async getPerInfo(params: any) {
      try {
        const res = await productApi.getProInfo(params);
        this.per_info = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getInfoId(infoId: any) {
      try {
        await productApi.getProInfoID(infoId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { productApi };
