import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer'
import { orderReducer } from './reducers/otherReducer'


export const store = configureStore({
    reducer:{
        user:userReducer,
        other:orderReducer,
    }
})


export const server = "https://programersalar-server.onrender.com/api/v1"
