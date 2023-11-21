import axiosClient from "../apiClient";

interface ProductApi {
  getProduct(params?: { page?: number; limit?: number }): Promise<any>;
  getProductId(id: string): Promise<any>;
  updateProduct(payload: any, id: string): Promise<any>;
}

const productApi: ProductApi = {
  getProduct(params) {
    const url = `product/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },
  getProductId(id) {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },
  updateProduct(payload, id) {
    const url = `product/${id}`;
    return axiosClient.patch(url, payload);
  },
};

export default productApi;
