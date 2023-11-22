import { defineStore } from "pinia";
import basketApi from "../../api/basket/basket";

interface BasketState {
  baskets: any[];
}

export const useBasketStore = defineStore({
  id: "basket",
  state: (): BasketState => ({
    baskets: [],
  }),
  actions: {
    async getClientBaskets(client_id: number) {
      try {
        const res = await basketApi.getClientBaskets(client_id);
        this.baskets = res;
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
  },
});

export { basketApi };
