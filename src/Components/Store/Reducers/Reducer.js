import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userInfo:{
        user:false,
        userImg:'',
        batch: {},
        batchStudents: [],
        batchImg:'',
        loggedInUser: {},
        studentInfo: {},
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
        },

        setLoggedInUser: (state, action)=>
        {
            state.userInfo.loggedInUser = action.payload
        },

        setBatch: (state, action)=>
        {
            state.userInfo.batch = action.payload
        },
        setBatchStudents: (state, action)=>
        {
            state.userInfo.batchStudents = action.payload
        },

        setStudentInfo: (state, action)=>
        {
            state.userInfo.studentInfo = action.payload
        }

    }

})
export const {loginReducer, logoutReducer, setAdmin, setBatch, setLoggedInUser, setStudentInfo, setBatchStudents} = userSlice.actions
export default userSlice.reducer;