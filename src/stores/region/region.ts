import { defineStore } from "pinia";
import regionApi from "../../api/region/region";

interface RegionState {
  region: any[];
  regions: any[];
}

export const useRegionStore = defineStore({
  id: "region",
  state: (): RegionState => ({
    region: [],
    regions: [],
  }),
  actions: {
    async getRegions(payload: any) {
      try {
        const res = await regionApi.getRegion(payload);
        this.regions = res;
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    async getRegionById(regionId: string) {
      try {
        const res = await regionApi.getRegionById(regionId);
        this.regions = res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { regionApi };
