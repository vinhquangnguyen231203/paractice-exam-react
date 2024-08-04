import {configureStore} from '@reduxjs/toolkit'
import productSlice  from './reducers/productSlice'
import cartSlice from './reducers/cartSlice'

const store = configureStore({
    reducer: {
        'products': productSlice,
        'carts': cartSlice
    }
})


export default store