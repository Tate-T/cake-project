import { createAction } from "@reduxjs/toolkit";


export const setOpen = createAction("Open/EditingTem", (prop) => {
    return {
        payload: prop,
    };
});


