import { defineStore } from "pinia";
import productApi from "../../api/products/product";

interface ProductState {
  products: any[];
  images: any[];
  allImages: any[];
  filter_products: any[];
  pro_per_group: any[];
  performanse: any[];
  per_info: any[];
  product: any[];
  stocks: any[];
  catProducts: any[];
  reiting: any[];
  stock: any[];
  searchProducts: any[];
  brands: any[];
}

export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    products: [],
    searchProducts: [],
    // loading: false,
    images: [],
    allImages: [],
    filter_products: [],
    pro_per_group: [],
    performanse: [],
    per_info: [],
    product: [],
    stocks: [],
    catProducts: [],
    reiting: [],
    stock: [],
    brands: [],
  }),
  actions: {
    async getProducts(params: any) {
      try {
        const res = await productApi.getProduct(params);
        this.products = res;
        params.last_page = Math.ceil(res.count / params?.limit);
      } catch (err) {
        console.error(err);
      }
    },
    async getProductSearch(params: any) {
      try {
        const res = await productApi.getProductSearch(params);
        this.products = res;
        this.searchProducts = res.products;
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
    async getCatBrand(id:number) {
      try {
        const res = await productApi.getCatBrand(id);
        this.brands = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProductByCatId(id: number) {
      try {
        const res = await productApi.getProductByCatId(id);
        this.catProducts = res;
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
        payload.last_page = Math.ceil(res.count / payload?.limit);
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
    async getInfoId(infoId: string) {
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
    async getProductInStock() {
      try {
        const res = await productApi.getProductInStock();
        this.stocks = res;
      } catch (err) {
        console.log(err);
      }
    },
    async getProReting(params: any) {
      try {
        const res = await productApi.getProReiting(params);
        this.reiting = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProStock(params: any) {
      try {
        const res = await productApi.getProStock(params);
        this.stock = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProStockById(stockId: string) {
      try {
        const res = await productApi.getProStockById(stockId);
        this.stock = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { productApi };
