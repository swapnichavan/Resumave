import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  contact: {},
  saved: false,
};

const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resumeSave: (state) => {
      state.saved = true;
    },
  },
});

export const {resumeSave} = ResumeSlice.actions;
export default ResumeSlice.reducer;
