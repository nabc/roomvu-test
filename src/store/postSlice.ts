import { RootState } from "@/store";
import { PostModel } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface postState {
  selectedPost?: PostModel;
}

const initialState: postState = {
  selectedPost: undefined,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setSelectedPost } = postSlice.actions;

export const selectPost = (state: RootState) => state.post.selectedPost;

export default postSlice.reducer;
