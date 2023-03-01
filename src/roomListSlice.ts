import { createSlice } from "@reduxjs/toolkit";

export const roomListSlice = createSlice({
    name: 'roomList',
    initialState: <string[]>[],
    reducers: {
        addRoom: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const {addRoom} = roomListSlice.actions;

export default roomListSlice.reducer;