import axiosClient from "../apiClient";

interface BasketApi {
  getClientBaskets(client_id: number): Promise<any>;
  getBasketId(id: number): Promise<any>;
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
};

export default basketApi;
