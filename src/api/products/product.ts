import axiosClient from "../apiClient";

interface ProductApi {
  getProduct(params?: { page?: number; limit?: number }): Promise<any>;
  getProductId(id: string): Promise<any>;
  updateProduct(payload: any, id: string): Promise<any>;
}

const productApi: ProductApi = {
  getProduct(params) {
    const url = `product/get/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },
  getProductId(id) {
    const url = `product/get/${id}`;
    return axiosClient.get(url);
  },
  updateProduct(payload, id) {
    const url = `product/update/${id}`;
    return axiosClient.put(url, payload);
  },
};

export default productApi;
