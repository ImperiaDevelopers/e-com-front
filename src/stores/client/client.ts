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
        localStorage.setItem("details", res.details);
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
        function setCookie(name: any, value: any, days: any) {
          const expires = new Date();
          expires.setDate(expires.getDate() + days);
          document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
        }
        function getCookie(name: string) {
          const cookieString = document.cookie;
          const cookies = cookieString.split("; ");

          for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");

            if (cookieName === name) {
              return cookieValue;
            }
          }

          return null;
        }
        if (!getCookie("refresh_token")) {
          setCookie("refresh_token", res.tokens.refresh_token, 365);
        }
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
