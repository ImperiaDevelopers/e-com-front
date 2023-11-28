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
        this.loading = false;
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
