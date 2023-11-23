import axiosClient from "../apiClient";

interface ProductApi {
  getProductSearch(params?: any): Promise<any>;
  getProduct(params?: { page?: number; limit?: number }): Promise<any>;
  getProductId(id: string): Promise<any>;
  updateProduct(payload: any, id: string): Promise<any>;
  getImage(product_id: any): Promise<any>;
  getFilter(params?: any): Promise<any>;
}

const productApi: ProductApi = {
  getProductSearch(params) {
    const url = `product/search`;
    return axiosClient.post(url, params);
  },
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
    return axiosClient.put(url, payload);
  },
  getImage(product_id) {
    const url = `image/products/${product_id}`;
    return axiosClient.get(url);
  },
  getFilter(params) {
    const url = `product/filter`;
    return axiosClient.post(url, params);
  },
};

export default productApi;
