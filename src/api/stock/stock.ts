import axiosClient from "../apiClient";

interface StockApi {
  createStock(payload?: any): Promise<any>;
  getStockById(id: number): Promise<any>;
  getStock(): Promise<any>;
}

const stockApi: StockApi = {
  createStock(payload) {
    const url = `product_in_stock`;
    return axiosClient.post(url, payload);
  },
  getStock() {
    const url = `product_in_stock`;
    return axiosClient.get(url);
  },
  getStockById(id) {
    const url = `product_in_stock/${id}`;
    return axiosClient.get(url);
  },
};

export default stockApi;
