import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'
import {food} from '../types/food'
import { stat } from 'fs'

// Define a type for the slice state



// Define the initial state using that type
const initialState = {
 orders:[]


}

export const orderSlice = createSlice({
  name: 'orders',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   addorder:(state, action:PayloadAction<food[]>)=>{
    //console.log(action.payload)
   }
  },
})

export const {addorder } = orderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userOrders = (state: RootState) => state.orders
export default orderSlice.reducer