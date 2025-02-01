import { createAction } from "@reduxjs/toolkit";

export const OPEN_HEADER_MODAL = "auth/setAuth";

// export const authAction = () => ({
//   type: OPEN_HEADER_MODAL,
//   payload: true,
// });

export const authAction = createAction("auth/setAuth");

// export default authAction;

// export { OPEN_HEADER_MODAL, authAction };
