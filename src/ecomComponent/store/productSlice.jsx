import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({

    name: 'product',
    initialState: [],
    reducers: {
        setproduct(state, action) {
            state.push(action.payload)

        },
    },

})
export const { setproduct } = productSlice.actions;
export default productSlice.reducer;