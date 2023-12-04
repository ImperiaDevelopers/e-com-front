import axiosClient from "../apiClient";

interface StatusApi {
  getStatus(payload?: any): Promise<any>;
  getStatusById(id: string): Promise<any>;
}

const statusApi: StatusApi = {
  getStatus(payload) {
    const url = `status/all`;
    return axiosClient.get(url);
  },
  getStatusById(id) {
    const url = `status/${id}`;
    return axiosClient.get(url);
  },
};

export default statusApi;
