import { defineStore } from "pinia";
import favouritesApi from "../../api/favourites/favourites";

interface FavouritesState {
  favourites: any[];
  client_fav:any[]
}

export const useFavouritesStore = defineStore({
  id: "favourites",
  state: (): FavouritesState => ({
    favourites: [],
    client_fav:[]
  }),
  actions: {
    async createFavourites(payload: any) {
      try {
        const res = await favouritesApi.createFavourities(payload); // Corrected method name
        this.favourites = res;
        return res
      } catch (err) {
        console.error(err);
      }
    },

    async getClientFavourites(payload: any) {
      try {
        const res = await favouritesApi.getClientFavourities(payload); // Corrected method name
        this.client_fav = res;
         return res;
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
