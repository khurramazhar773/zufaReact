import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    total: 0

}

const CartSlice = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
        
    }

})

export default CartSlice.reducer;