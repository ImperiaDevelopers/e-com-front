import axiosClient from "../apiClient";

interface BasketApi {
  getClientBaskets(client_id: number): Promise<any>;
  getBasketId(id: number): Promise<any>;
  addProductToBasket(payload: any): Promise<any>;
  getClientLikes(client_id: number): Promise<any>;
  updateClientCard(id: number, payload: any): Promise<any>;
  deleteClientCard(id: number): Promise<any>;
}

const basketApi: BasketApi = {
  getClientBaskets(client_id) {
    const url = `card/client/${client_id}`;
    return axiosClient.get(url);
  },
  getBasketId(id) {
    const url = `card/${id}`;
    return axiosClient.get(url);
  },
  getClientLikes(client_id) {
    const url = `favourities/clientliked/${client_id}`;
    return axiosClient.get(url);
  },
  addProductToBasket(payload) {
    const url = `card/add`;
    return axiosClient.post(url, payload);
  },
  updateClientCard(id, payload) {
    const url = `card/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteClientCard(id) {
    const url = `card/destroy/${id}`;
    return axiosClient.delete(url);
  },
};

interface CategoryApi {
  getCategoryId(id: number): Promise<any>;
  getCategory(id: number): Promise<any>;
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

export default basketApi;
