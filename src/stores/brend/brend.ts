import { defineStore } from "pinia";
import brendApi from "../../api/brend/brend";

interface BrendState {
  brends: any[];
}

export const useBrendStore = defineStore({
  id: "brend",
  state: (): BrendState => ({
    brends: [],
  }),
  actions: {
    async getBrends() {
      try {
        const res = await brendApi.getBrend();
        this.brends = res.brends;
      } catch (err) {
        console.error(err);
      }
    },
    async getBrendId(brendId: string) {
      try {
        await brendApi.getBrendId(brendId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { brendApi };
