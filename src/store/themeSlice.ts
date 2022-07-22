import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  theme: "light" | "dark";
}

const initialState: themeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setNewTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setNewTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
