import axiosClient from "../apiClient";

interface RegionApi {
  getRegion(payload?: any): Promise<any>;
  getRegionById(id: string): Promise<any>;
}

const regionApi: RegionApi = {
  getRegion(payload) {
    const url = `region/all`;
    return axiosClient.get(url);
  },
  getRegionById(id) {
    const url = `region/${id}`;
    return axiosClient.get(url);
  },
};

export default regionApi;
