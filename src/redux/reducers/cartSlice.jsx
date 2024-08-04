import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    carts: [],
    total: 0,
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const data = state.carts
            state.carts = [...data, action.payload]
        },
        deleteCart: (state, action) => {
            const data = state.carts
            state.carts = data.filter(item=> item.id !== action.payload)
        },
    }
})

export default cartSlice.reducer