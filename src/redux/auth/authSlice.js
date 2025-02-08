import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
    loginedUsers: [
        {
            login: "lalala34",
            password: "Lala",
        },
        {
            login: "hahaha12",
            password: "hahaha",
        },
    ],
    isOpenHeaderModal: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: defaultState,
    reducers: {
        toggleModal: (state, action) => {
            state.isOpenHeaderModal = !state.isOpenHeaderModal;
        },
        createUser: (state, { payload }) => {
            state.loginedUsers.push(payload);
        }
    }
});

export const authReducer = authSlice.reducer;
export const { toggleModal, createUser } = authSlice.actions;