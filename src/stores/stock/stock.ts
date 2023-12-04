import { defineStore } from "pinia";
import stockApi from "../../api/stock/stock";

interface StockState {
  stocks: any[];
}

export const useStockStore = defineStore({
  id: "stock",
  state: (): StockState => ({
    stocks: [],
  }),
  actions: {
    async getStocks() {
      try {
        const res = await stockApi.getStock();
        this.stocks = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },

    async getBasketId(id: number) {
      try {
        await stockApi.getStockById(id);
      } catch (err) {
        console.error(err);
      }
    },

    async addStock(payload: any) {
      try {
        await stockApi.createStock(payload);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { stockApi };
