import {configureStore} from '@reduxjs/toolkit'
import {authSlice}from'./AuthSlice'
import RecipeSlice from './RecipeSlice'

export const store=configureStore({
    reducer:{
        contents:authSlice.reducer,
        recipe:RecipeSlice.reducer,
    }
})