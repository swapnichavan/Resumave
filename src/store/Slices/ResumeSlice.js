import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  contact: {},
  summary: {},
  education: [],
  experience: [],
  projects: [],
  skills: {},
  certificates: [],
  languages: [],
  saved: false,
};

const ResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateResumeValue: (state, action) => {
      console.log(state, action);
      const {tab, name, value, index} = action.payload;
      console.log(index, tab, name, value);
      console.log("Current state[tab]:", state[tab]);
      console.log("Current state[tab][index]:", state[tab]?.[index]);

      if (index != null) {
        state[tab][index][name] = value;
      } else {
        if (Array.isArray(state[tab])) {
          console.error("Cannot set properties directly on arrays");
          return;
        } else {
          state[tab][name] = value;
        }
      }
      state.saved = false;
    },
    addNewIndex: (state, action) => {
      console.log(action);
      const {tab, name, value} = action.payload;
      // state[tab].push({[name]: value});
      state[tab].push({});
      state.saved = false;
    },
    moveIndex: (state, action) => {
      console.log(state, action);
      const {index, tab, dir} = action.payload;

      const newIndex = dir === "up" ? index - 1 : index + 1;

      const temp = state[tab][index];
      state[tab][index] = state[tab][newIndex];
      state[tab][newIndex] = temp;

      state.saved = false;
    },

    deleteIndex: (state, action) => {
      const {tab, index} = action.payload;
      console.log(tab, index);
      state[tab].splice(index + 1);
      state.saved = false;
    },
    resumeSave: (state) => {
      state.saved = true;
    },
  },
});

export const {
  resumeSave,
  addNewIndex,
  updateResumeValue,
  moveIndex,
  deleteIndex,
} = ResumeSlice.actions;
export default ResumeSlice.reducer;
