import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userInfo:{
        user:false,
        userImg:'',
        admin: false
    }
}
const userSlice = createSlice({
    name:'username',
    initialState,
    reducers:
    {
        loginReducer: (state, action) =>
        {
            state.userInfo.user = action.payload
        },

        logoutReducer: (state, action) =>
        {
            state.userInfo.user = action.payload
        },

        setAdmin: (state, action)=>
        {
            state.userInfo.admin = action.payload
        }

    }

})
export const {loginReducer, logoutReducer, setAdmin} = userSlice.actions
export default userSlice.reducer;