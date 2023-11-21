import axiosClient from "../apiClient";

interface BrendApi {
  getBrend(): Promise<any>;
  getBrendId(id: string): Promise<any>;
}

const brendApi: BrendApi = {
  getBrend() {
    const url = `product_brend`;
    return axiosClient.get(url);
  },
  getBrendId(id) {
    const url = `product_brend/${id}`;
    return axiosClient.get(url);
  },
};

export default brendApi;
