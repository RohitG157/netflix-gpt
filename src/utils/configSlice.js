import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LANG } from "./constant";

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferredLanguage: DEFAULT_LANG,
  },
  reducers: {
    changePreferredLanguage: (state, action) => {
      state.preferredLanguage = action.payload;
    },
  },
});

export const { changePreferredLanguage } = configSlice.actions;
export default configSlice.reducer;
