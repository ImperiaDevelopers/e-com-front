import { defineStore } from "pinia";
import productApi from "../../api/products/product";

interface ProductState {
  products: any[];
  images: any[];
  allImages: any[];
}

export const useProductStore = defineStore({
  id: "product",
  state: (): ProductState => ({
    products: [],
    images: [],
    allImages: [],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await productApi.getProduct();
        this.products = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getProductImage(product_id: number) {
      try {
        const res = await productApi.getImage(product_id);
        this.images = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getAllImages() {
      try {
        const res = await productApi.getAllImages();
        const uniqueProductIds = {};
        const uniqueProducts = [];
        for (const product of res) {
          const productId = product.product_id;
          if (!uniqueProductIds[productId]) {
            uniqueProductIds[productId] = true;
            uniqueProducts.push(product);
          }
        }
        this.allImages = uniqueProducts;
        return uniqueProducts;
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
  },
});

export { productApi }; // экспортируем интерфейс, если он используется в других местах
