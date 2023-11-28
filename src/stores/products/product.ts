import { defineStore } from "pinia";
import productApi from "../../api/products/product";

interface ProductState {
  loading: boolean;
  products: any[];
  images: any[];
  allImages: any[];
  filter_products: any[];
  pro_per_group: any[];
  performanse: any[];
  per_info: any[];
  product: any[];
}

export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    products: [],
    loading: false,
    images: [],
    allImages: [],
    filter_products: [],
    pro_per_group: [],
    performanse: [],
    per_info: [],
    product: [],
  }),
  actions: {
    async getProducts(params: any) {
      try {
        this.loading = true;
        const res = await productApi.getProduct(params);
        this.products = res;
        params.last_page = Math.ceil(res.count / params?.limit);
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
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
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProductId(productId: string) {
      try {
        const res = await productApi.getProductId(productId);
        this.product = res;
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
        this.loading = true;

        const res = await productApi.getPerfomance(params);
        this.performanse = res;
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
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
    async addProductToCard(payload: any) {
      try {
        await productApi.addProductToUserCard(payload);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export { productApi };
