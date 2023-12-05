import { defineStore } from "pinia";
import clientApi from "../../api/client/client";

interface ClientState {
  client: any[];
  info: any[];
}

export const useClientStore = defineStore({
  id: "client",
  state: (): ClientState => ({
    client: [],
    info: [],
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
    async messageOrderClient(payload: any) {
      try {
        await clientApi.messageorderClient(payload);
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
    async getClientById(id: any) {
      try {
        const res = await clientApi.getClientById(id);
        this.info = res;
        console.log(this.info);
      } catch (err) {
        console.log(err);
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
        const changeCookieValue = (name: string, newValue: string) => {
          document.cookie = `${name}=${encodeURIComponent(newValue)};path=/`;
        };
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
        let old_id = getCookie("clientId");
        changeCookieValue("userId", res.client.first_name);
        changeCookieValue("clientId", res.client.id);
        if (old_id == null) {
          old_id = "";
        }
        if (!(await this.getClientById(old_id))) {
          this.deleteClient(old_id);
        }
        console.log(res);
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
