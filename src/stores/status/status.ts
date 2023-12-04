import { defineStore } from "pinia";
import statusApi from "../../api/status/status";

interface StatusState {
  status: any[];
  statuses: any[];
}

export const useStatusStore = defineStore({
  id: "payment",
  state: (): StatusState => ({
    status: [],
    statuses: [],
  }),
  actions: {
    async getStatus(payload: any) {
      try {
        const res = await statusApi.getStatus(payload);
        this.status = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getStatusById(statusId: string) {
      try {
        const res = await statusApi.getStatusById(statusId);
        this.statuses = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { statusApi };
