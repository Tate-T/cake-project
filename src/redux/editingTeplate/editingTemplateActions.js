import { createAction } from "@reduxjs/toolkit";


export const setOpen = createAction("Open/EditingTem", () => {
    return {
        payload: true,
    };
});

export const setClose = createAction("Close/EditingTem", () => {
    return {
        payload: false,
    };
});
