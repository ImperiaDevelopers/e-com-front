import axiosClient from "../apiClient";

interface ClientApi {
  getClient(params?: { page?: number; limit?: number }): Promise<any>;
  getClientId(id: string): Promise<any>;
  updateClient(payload: any, id: string): Promise<any>;
  getImage(client_id: any): Promise<any>;
}

const clientApi: ClientApi = {
  getClient(params) {
    const url = `client/all/q?page=${params?.page}&limit=${params?.limit}`;
    return axiosClient.get(url);
  },
  getClientId(id) {
    const url = `client/${id}`;
    return axiosClient.get(url);
  },
  updateClient(payload, id) {
    const url = `client/${id}`;
    return axiosClient.patch(url, payload);
  },
  getImage(client_id) {
    const url = `image/clients/${client_id}`;
    return axiosClient.get(url);
  },
};

export default clientApi;
