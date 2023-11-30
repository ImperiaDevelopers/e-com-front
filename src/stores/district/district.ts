import { defineStore } from "pinia";
import districtApi from "../../api/district/district";

interface DistrictState {
  district: any[];
  districts: any[];
}

export const useDistrictStore = defineStore({
  id: "district",
  state: (): DistrictState => ({
    district: [],
    districts: [],
  }),
  actions: {
    async getDistricts(payload: any) {
      try {
        const res = await districtApi.getDistrict(payload);
        this.districts = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getDistrictById(districtId: string) {
      try {
        const res = await districtApi.getDistrictById(districtId);
        this.districts = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { districtApi };
