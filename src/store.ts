import { configureStore } from "@reduxjs/toolkit";
import roomListSlice from "./roomListSlice";
import userInfoSlice from "./userInfoSlice";

const store = configureStore({
    reducer: {
        userInfo: userInfoSlice,
        roomList: roomListSlice,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch