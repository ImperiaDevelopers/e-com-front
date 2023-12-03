import axiosClient from "../apiClient";

interface ProductApi {
  getProductSearch(params?: any): Promise<any>;
  getProduct(params?: { page?: number; limit?: number }): Promise<any>;
  getProductId(id: string): Promise<any>;
  getProductSearch(search: any): Promise<any>;
  updateProduct(payload: any, id: string): Promise<any>;
  getImage(product_id: any): Promise<any>;
  getAllImages(): Promise<any>;
  getFilter(params?: { page?: number; limit?: number }): Promise<any>;
  getProPerGroup(params?: any): Promise<any>;
  getProPerGroupId(id: string): Promise<any>;
  getPerfomance(params?: any): Promise<any>;
  getPerfomanceID(id: string): Promise<any>;
  getProInfo(params?: any): Promise<any>;
  getProInfoID(id: string): Promise<any>;
  addProductToUserCard(payload: any): Promise<any>;
}

const productApi: ProductApi = {
  // ----------Pro Search --------- //
  getProductSearch(params) {
    const url = `product/search`;
    return axiosClient.post(url, params);
  },
  // ----------Product------------- //
  getProduct(params) {
    const url = `product/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },
  getProductId(id) {
    const url = `product/${id}`;
    return axiosClient.get(url);
  },
  getProductSearch(search) {
    const url = `product/search`;
    return axiosClient.post(url, { name: search });
  },

  updateProduct(payload, id) {
    const url = `product/${id}`;
    return axiosClient.put(url, payload);
  },
  // ----------- Pro Img ---------- //
  getImage(product_id) {
    const url = `image/products/${product_id}`;
    return axiosClient.get(url);
  },
  getAllImages() {
    const url = `image/all`;
  },
  // ---------- Pro Filter -------- //
  getFilter(params) {
    const url = `product/filter/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.post(url, params);
  },
  // --------- Pro Per Group ----- //
  getProPerGroup(params) {
    const url = `pro_perfomance_group`;
    return axiosClient.get(url);
  },
  getProPerGroupId(id) {
    const url = `pro_perfomance_group/${id}`;
    return axiosClient.get(url);
  },
  // --------- Perfomance ------- //
  getPerfomance(params) {
    const url = `performance/all`;
    return axiosClient.get(url);
  },
  getPerfomanceID(id) {
    const url = `performance/${id}`;
    return axiosClient.get(url);
  },
  // --------- Pro-Info -------- //
  getProInfo(params) {
    const url = `pro-info`;
    return axiosClient.get(url);
  },
  getProInfoID(id) {
    const url = `pro-info/${id}`;
    return axiosClient.get(url);
  },
  addProductToUserCard(payload) {
    const url = `card/add`;
    return axiosClient.post(url, payload);
  },
};

export default productApi;
