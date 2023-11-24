import axiosClient from "../apiClient";

interface ProductApi {
  getProduct(params?: { page?: number; limit?: number }): Promise<any>;
  getProductId(id: string): Promise<any>;
  updateProduct(payload: any, id: string): Promise<any>;
  getImage(product_id: any): Promise<any>;
  getAllImages(): Promise<any>;
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
  getImage(product_id) {
    const url = `image/products/${product_id}`;
    return axiosClient.get(url);
  },
  getAllImages() {
    const url = `image/all`;
    return axiosClient.get(url);
  },
};

export default productApi;
