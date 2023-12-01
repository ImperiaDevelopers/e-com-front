import axiosClient from "../apiClient";

interface ClientApi {
  otpClient(otp?: any): Promise<any>;
  verifyClient(verify?: any): Promise<any>;
  updateClient(payload: any, id: string): Promise<any>;
  deleteClient(id: string): Promise<any>;
  createClient(payload: any): Promise<any>;
  getClientById(id: any): Promise<any>;
}

const clientApi: ClientApi = {
  createClient(payload) {
    const url = `client/create_client`;
    return axiosClient.post(url, payload);
  },
  otpClient(otp) {
    const url = `client/send-otp`;
    return axiosClient.post(url, otp);
  },
  verifyClient(verify) {
    const url = `client/verify-otp`;
    return axiosClient.post(url, verify);
  },
  updateClient(payload, id) {
    const url = `client/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteClient(id) {
    const url = `client/${id}`;
    return axiosClient.delete(url);
  },
  getClientById(id) {
    const url = `client/${id}`;
    return axiosClient.get(url);
  },
};

export default clientApi;
