import axiosClient from "../apiClient";

interface CategoryApi {
  getClientCard(id: string): Promise<any>;
}

const categoryApi: CategoryApi = {
  getCategory() {
    const url = `category/parcat`;
    return axiosClient.get(url);
  },
  getCategoryId(id) {
    const url = `category/${id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
