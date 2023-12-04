import axiosClient from "../apiClient";

interface CommentApi {
  createComment(payload: any): Promise<any>;
  getComments(payload?: any): Promise<any>;
  deleteComment(id: string): Promise<any>;
}
const commentApi: CommentApi = {
  createComment(payload) {
    const url = "comment/add";
    return axiosClient.post(url, payload);
  },
  getComments(payload) {
    const url = "comment/all";
    return axiosClient.get(url, payload);
  },
  deleteComment(payload) {
    const url = `comment/delstroy/${id}`;
    return axiosClient.delete(url);
  },
};
