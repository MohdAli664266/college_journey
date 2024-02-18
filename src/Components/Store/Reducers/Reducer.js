import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userInfo:{
        user:false,
        userImg:'',
    }
}
const userSlice = createSlice({
    name:'username',
    initialState,
    reducers:
    {
        loginReducer: (state, action) =>
        {
            state.userInfo.user = !action.payload
        },

        logoutReducer: (state, action) =>
        {
            state.userInfo.user = !action.payload
        },

    }

})
export const {loginReducer, logoutReducer} = userSlice.actions
export default userSlice.reducer;