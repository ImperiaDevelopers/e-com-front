import axiosClient from "../apiClient";

interface BrendApi {
  getBrend(): Promise<any>;
  getBrendId(id: string): Promise<any>;
}

const brendApi: BrendApi = {
  getBrend() {
    const url = `brend/get`;
    return axiosClient.get(url);
  },
  getBrendId(id) {
    const url = `brend/get/${id}`;
    return axiosClient.get(url);
  },
};

export default brendApi;
