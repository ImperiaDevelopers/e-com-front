import { defineStore } from "pinia";
import commentApi from "../../api/comment/comment";

interface CommentState {
  comments: any[];
}

export const useCommentStore = defineStore({
  id: "comment",
  state: (): CommentState => ({
    comments: [],
  }),
  actions: {
    async getComments(payload: any) {
      try {
        const res = await commentApi.getComments;
        this.comments = res;
      } catch (err) {
        console.error(err);
      }
    },
    async createComment(payload: any) {
      try {
        await commentApi.createComment(payload);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteComment(payload: any) {
      try {
        await commentApi.deleteComment(payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
