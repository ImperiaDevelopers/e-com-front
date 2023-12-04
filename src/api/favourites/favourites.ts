import axiosClient from "../apiClient";

interface FavouritiesApi {
  createFavourities(params?: any): Promise<any>;
  getClientFavourities(payload?: any): Promise<any>;
  getFavouritiesId(id: string): Promise<any>;
  updateFavourities(payload: any, id: string): Promise<any>;
  deleteFavourities(id: string): Promise<any>;
}

const favouritiesApi: FavouritiesApi = {
  createFavourities(params) {
    const url = `favourities/add`;
    return axiosClient.post(url, params);
  },
  getClientFavourities(payload) {
    const url = `favourities/clientliked/${payload.client_id}`;
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
