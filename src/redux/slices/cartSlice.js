import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    total: 0,
    cart: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.cartItems.push(product);
        }

    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;