import { defineStore } from "pinia";
import districtApi from "../../api/district/district";

interface DistrictState {
  district: any[];
  districts: any[];
  regDistricts: any[];
}

export const useDistrictStore = defineStore({
  id: "district",
  state: (): DistrictState => ({
    district: [],
    districts: [],
    regDistricts: [],
  }),
  actions: {
    async getDistricts() {
      try {
        const res = await districtApi.getDistrict();
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
    async getDistrictsByRegionId(id: number) {
      try {
        const res = await districtApi.getDistrictsByRegionId(id);
        this.regDistricts = res;
      } catch (err) {
        console.error(err);
      }
    },

    async getDistrictsByName(payload: any) {
      try {
        return await districtApi.getDistrictByName(payload);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { districtApi };
