import axiosClient from "../apiClient";

interface DistrictApi {
  getDistrict(payload?: any): Promise<any>;
  getDistrictById(id: string): Promise<any>;
}

const districtApi: DistrictApi = {
  getDistrict(payload) {
    const url = `district/all`;
    return axiosClient.get(url);
  },
  getDistrictById(id) {
    const url = `district/${id}`;
    return axiosClient.get(url);
  },
};

export default districtApi;
