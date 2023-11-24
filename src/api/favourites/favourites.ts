import axiosClient from "../apiClient";

interface FavouritiesApi {
  createFavourities(params?: any): Promise<any>;
  getFavourities(params?: { page?: number; limit?: number }): Promise<any>;
  getFavouritiesId(id: string): Promise<any>;
  updateFavourities(payload: any, id: string): Promise<any>;
  deleteFavourities(id: string): Promise<any>;
}

const favouritiesApi: FavouritiesApi = {
  createFavourities(params) {
    const url = `favourities`;
    return axiosClient.post(url, params);
  },
  getFavourities(params) {
    const url = `favourities/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },
  getFavouritiesId(id) {
    const url = `favourities/${id}`;
    return axiosClient.get(url);
  },
  updateFavourities(payload, id) {
    const url = `favourities/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteFavourities(id) {
    const url = `favourities/${id}`;
    return axiosClient.delete(url);
  },
};

export default favouritiesApi;
