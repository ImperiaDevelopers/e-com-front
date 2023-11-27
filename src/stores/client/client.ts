import { defineStore } from "pinia";
import clientApi from "../../api/client/client";

interface ClientState {
  client: any[];
}

export const useClientStore = defineStore({
  id: "client",
  state: (): ClientState => ({
    client: [],
  }),
  actions: {
    async otpClient(payload: any) {
      try {
        const res = await clientApi.otpClient(payload);
      } catch (err) {
        console.error(err);
      }
    },
    async createClient(payload: any) {
      try {
        const res = await clientApi.createClient(payload);
        this.client = res;
      } catch (err) {
        console.error(err);
      }
    },

    async verifyClient(params: any) {
      try {
        const res = await clientApi.verifyClient(params);
      } catch (err) {
        console.error(err);
      }
    },

    async updateClient(payload: any, clientId: string) {
      try {
        await clientApi.updateClient(payload, clientId);
      } catch (err) {
        console.error(err);
      }
    },
    async deleteClient(clientId: string) {
      try {
        await clientApi.deleteClient(clientId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { clientApi };
