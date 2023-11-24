import axiosClient from "../apiClient";

interface ClientApi {
  otpClient(otp?: any): Promise<any>;
  verifyClient(verify?: any): Promise<any>;
  updateClient(payload: any, id: string): Promise<any>;
  deleteClient(id: string): Promise<any>;
}

const clientApi: ClientApi = {
  otpClient(otp) {
    const url = `client/send-otp`;
    return axiosClient.post(url, otp);
  },
  verifyClient(verify) {
    const url = `client/verify-otp`;
    return axiosClient.get(url, verify);
  },
  updateClient(payload, id) {
    const url = `client/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteClient(id) {
    const url = `client/${id}`;
    return axiosClient.delete(url);
  },
};

export default clientApi;
