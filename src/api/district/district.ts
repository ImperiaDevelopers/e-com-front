import axiosClient from "../apiClient";

interface DistrictApi {
  getDistrict(): Promise<any>;
  getDistrictById(id: string): Promise<any>;
  getDistrictsByRegionId(id: number): Promise<any>;
  getDistrictByName(payload: any): Promise<any>;
}

const districtApi: DistrictApi = {
  getDistrict() {
    const url = `district/all`;
    return axiosClient.get(url);
  },
  getDistrictById(id) {
    const url = `district/${id}`;
    return axiosClient.get(url);
  },
  getDistrictByName(payload) {
    const url = `district/name`;
    return axiosClient.post(url, payload);
  },
  getDistrictsByRegionId(id) {
    const url = `district/region/${id}`;
    return axiosClient.get(url);
  },
};

export default districtApi;
