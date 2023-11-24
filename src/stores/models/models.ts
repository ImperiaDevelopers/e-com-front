import { defineStore } from "pinia";
import modelsApi from "../../api/models/models";

interface ModelsState {
  models: any[];
}

export const useModelsStore = defineStore({
  id: "models",
  state: (): ModelsState => ({
    models: [],
  }),
  actions: {
    async getModels(params: any) {
      try {
        const res = await modelsApi.getModels(params);
        this.models = res;
      } catch (err) {
        console.error(err);
      }
    },
    async getModelsId(modelsId: string) {
      try {
        await modelsApi.getModelsId(modelsId);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { modelsApi };
