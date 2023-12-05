import { defineStore } from "pinia";
import orderApi from "../../api/order/order";

interface OrderState {
  orders: any[];
  order: any[];
}

export const useOrderStore = defineStore({
  id: "order",
  state: (): OrderState => ({
    orders: [],
    order: [],
  }),
  actions: {
    async createOrder(payload: any) {
      try {
        await orderApi.createOrder(payload);
      } catch (err) {
        console.error(err);
      }
    },
    async getOrders(params: any) {
      try {
        const res = await orderApi.getOrders(params);
        this.orders = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getOrderId(orderId: string) {
      try {
        const res = await orderApi.getOrderId(orderId);
        this.order = res;
      } catch (err) {
        console.error(err);
      }
    },
    async updateOrder(payload: any, orderId: string) {
      try {
        await orderApi.updateOrder(payload, orderId);
      } catch (err) {
        console.error(err);
      }
    },
    async deleteOrder(orderId: string) {
      try {
        await orderApi.deleteOrder(orderId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { orderApi };
