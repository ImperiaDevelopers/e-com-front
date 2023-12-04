import axiosClient from "../apiClient";

interface OrderApi {
  createOrder(params?: any): Promise<any>;
  getOrders(params?: any): Promise<any>;
  getOrderId(id: string): Promise<any>;
  updateOrder(payload: any, id: string): Promise<any>;
  deleteOrder(id: string): Promise<any>;
}

const orderApi: OrderApi = {
  createOrder(params) {
    const url = `order/create`;
    return axiosClient.post(url, params);
  },
  getOrders(params) {
    const url = `order/all`;
    return axiosClient.get(url);
  },
  getOrderId(id) {
    const url = `order/${id}`;
    return axiosClient.get(url);
  },
  updateOrder(payload, id) {
    const url = `order/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteOrder(id) {
    const url = `order/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderApi;
