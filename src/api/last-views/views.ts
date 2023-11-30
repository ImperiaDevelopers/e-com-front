import axiosClient from "../apiClient";

interface ViewsApi {
  addViews(payload: any): Promise<any>;
  getClientViews(id:any):Promise<any>
}

const viewsApi: ViewsApi = {
  addViews(payload) {
    const url = `views/add`;
    return axiosClient.post(url, payload);
  },
  getClientViews(id) {
    const url = `views/client/${id}`;
    return axiosClient.get(url);
  }
};

export default viewsApi;
