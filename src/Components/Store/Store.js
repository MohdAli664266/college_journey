import {configureStore} from '@reduxjs/toolkit';
import userState from '../Store/Reducers/Reducer'
export const store = configureStore({
    reducer: userState
})