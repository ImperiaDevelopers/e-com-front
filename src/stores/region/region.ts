import { defineStore } from "pinia";
import regionApi from "../../api/region/region";

interface RegionState {
  region: any[];
  regions: any[];
  nameRegion: any[];
}

export const useRegionStore = defineStore({
  id: "region",
  state: (): RegionState => ({
    region: [],
    regions: [],
    nameRegion: [],
  }),
  actions: {
    async getRegions() {
      try {
        const res = await regionApi.getRegion();
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

    async getRegionByName(payload: any) {
      try {
        const res = await regionApi.getRegionByName(payload);
        return res;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { regionApi };
