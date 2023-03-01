import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: <UserInfo>{},
    reducers: {
        loginUser: (state, action) => {
            state.userId = action.payload;
            console.log(state.userId);
        },

        logoutUser: (state, action) => {
            state = {userId: "", hasLogined:false};
        },
    }
});

export const {loginUser, logoutUser} = userInfoSlice.actions;

export default userInfoSlice.reducer;

export const selectUserInfo = (state:State) => state;