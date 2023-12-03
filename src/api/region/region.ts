import axiosClient from "../apiClient";

interface RegionApi {
  getRegion(): Promise<any>;
  getRegionById(id: string): Promise<any>;
  getRegionByName(payload: any): Promise<any>;
}

const regionApi: RegionApi = {
  getRegion() {
    const url = `region/all`;
    return axiosClient.get(url);
  },
  getRegionById(id) {
    const url = `region/${id}`;
    return axiosClient.get(url);
  },
  getRegionByName(payload) {
    const url = `region/name`;
    return axiosClient.post(url, payload);
  },
};

export default regionApi;
