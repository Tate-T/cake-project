import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: { feedback: false },
  reducers: {
    setFeedback(state, action) {
      state.feedback = action.payload;
    },
  },
});

export const selectFeedback = (state) => state.feedback.feedback;
export const { setFeedback } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
