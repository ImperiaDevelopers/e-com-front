import axiosClient from "../apiClient";

interface ModelsApi {
  getModels(params?: any): Promise<any>;
  getModelsId(id: string): Promise<any>;
}

const modelsApi: ModelsApi = {
  getModels(params) {
    const url = `models`;
    return axiosClient.get(url);
  },
  getModelsId(id) {
    const url = `product_model/${id}`;
    return axiosClient.get(url);
  },
};

export default modelsApi;
