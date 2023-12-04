import { defineStore } from "pinia";
import paymentApi from "../../api/payments/payment";

interface PaymentState {
  payment: any[];
  payments: any[];
}

export const usePaymentStore = defineStore({
  id: "payment",
  state: (): PaymentState => ({
    payment: [],
    payments: [],
  }),
  actions: {
    async getPayments(payload: any) {
      try {
        const res = await paymentApi.getPayment(payload);
        this.payment = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getPaymentById(paymentId: string) {
      try {
        const res = await paymentApi.getPaymentById(paymentId);
        this.payments = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { paymentApi };
