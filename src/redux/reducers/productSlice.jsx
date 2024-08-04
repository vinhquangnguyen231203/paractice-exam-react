import {createSlice} from '@reduxjs/toolkit'
import { productThunk } from '../thunk/productThunk'

const initialState = {
    products: [],
    status: 'idle',
    error: null,
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(productThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(productThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(productThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer