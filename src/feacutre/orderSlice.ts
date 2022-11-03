import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'
import {food} from '../types/food'


// Define a type for the slice state

interface props {
  orders: food[]
}

// Define the initial state using that type
const initialState :props= {
 orders:[]
}

export const orderSlice = createSlice({
  name: 'orders',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   addorder:(state, action:PayloadAction<food[]>)=>{
   state.orders=[...action.payload]
   //console.log(state.orders)
   }
  },
})

export const {addorder } = orderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userOrders = (state: RootState) => state.orders
export default orderSlice.reducer