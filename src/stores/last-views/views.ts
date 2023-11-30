import { defineStore } from "pinia";
import viewsApi from "../../api/last-views/views";

interface ViewsState {
  views: any[];
}

export const useViewsStore = defineStore({
  id: "views",
  state: (): ViewsState => ({
    views: [],
  }),
  actions: {
    async addViews(payload: any) {
      try {
        await viewsApi.addViews(payload);
      } catch (err) {
        console.error(err);
      }
    },
    async getClientViews(id: any) {
      try {
        const res = await viewsApi.getClientViews(id);
        this.views = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { viewsApi };
