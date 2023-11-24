import { defineStore } from "pinia";
import favouritesApi from "../../api/favourites/favourites";

interface FavouritesState {
  favourites: any[];
}

export const useFavouritesStore = defineStore({
  id: "favourites",
  state: (): FavouritesState => ({
    favourites: [],
  }),
  actions: {
    async createFavourites(payload: any) {
      try {
        const res = await favouritesApi.createFavourities(payload); // Corrected method name
        this.favourites = res.favourites;
      } catch (err) {
        console.error(err);
      }
    },

    async getFavourites(params: any) {
      try {
        const res = await favouritesApi.getFavourities(params); // Corrected method name
        this.favourites = res;
        params.last_page = Math.ceil(res.count / params.limit);
      } catch (err) {
        console.error(err);
      }
    },
    async getFavouritesId(favouritesId: string) {
      try {
        await favouritesApi.getFavouritiesId(favouritesId);
      } catch (err) {
        console.error(err);
      }
    },
    async updateFavourites(payload: any, favouritesId: string) {
      try {
        await favouritesApi.updateFavourities(payload, favouritesId); // Corrected method name
      } catch (err) {
        console.error(err);
      }
    },
    async deleteFavourites(favouritesId: string) {
      try {
        await favouritesApi.deleteFavourities(favouritesId); // Corrected method name
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export { favouritesApi };
