import { createSelector } from "@reduxjs/toolkit";

export const selectAuth = createSelector((state) => state.auth);
export const selectToken = createSelector((state) => state.auth.token);
// export const selectloginedUsers = createSelector(
//   (state) => state.auth.loginedUsers
// );
export const selectisOpenHeaderModal = createSelector(
  (state) => state.auth.isOpenHeaderModal
);
