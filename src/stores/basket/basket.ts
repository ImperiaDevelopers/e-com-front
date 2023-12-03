import { defineStore } from "pinia";
import basketApi from "../../api/basket/basket";

interface BasketState {
  baskets: any[];
  loading: boolean;
}

export const useBasketStore = defineStore({
  id: "basket",
  state: (): BasketState => ({
    baskets: [],
    loading: false,
  }),
  actions: {
    async getClientBaskets(client_id: number) {
      try {
        this.loading = true;
        const res = await basketApi.getClientBaskets(client_id);
        this.baskets = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getBasketId(id: number) {
      try {
        await basketApi.getBasketId(id);
      } catch (err) {
        console.error(err);
      }
    },
    async getClientLikes(client_id: number) {
      try {
        return await basketApi.getClientLikes(client_id);
      } catch (err) {
        console.error(err);
      }
    },
    async addProductToBasket(payload: any) {
      try {
        await basketApi.addProductToBasket(payload);
      } catch (err) {
        console.error(err);
      }
    },
    async updateClientCard(id: number, payload: any) {
      try {
        await basketApi.updateClientCard(id, payload);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteClientCard(id: number) {
      try {
        await basketApi.deleteClientCard(id);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export { basketApi };
