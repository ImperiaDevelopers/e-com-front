import axiosClient from "../apiClient";

interface PaymentApi {
  getPayment(payload?: any): Promise<any>;
  getPaymentById(id: string): Promise<any>;
}

const paymentApi: PaymentApi = {
  getPayment(paymoad) {
    const url = `payment/all`;
    return axiosClient.get(url);
  },
  getPaymentById(id) {
    const url = `payment/${id}`;
    return axiosClient.get(url);
  },
};

export default paymentApi;
