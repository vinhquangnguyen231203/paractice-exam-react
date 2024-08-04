import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductApi } from "../../utilities/api/api";

export const productThunk = createAsyncThunk('products/fetch', async() => {
    const res = await getProductApi();
    return res
})