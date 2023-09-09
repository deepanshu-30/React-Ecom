import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({

    name: 'cart',

    initialState: [],

    reducers: {
        add(state, action) {

            state.push(action.payload)
        },
        remove(state, action) {

            return state.filter((item) => item.id !== action.payload)
        },
        removeall(state, action) {

            state.splice(action.payload, state.length)

        }
    }
})
export const { add, remove, removeall } = cartSlice.actions;

export default cartSlice.reducer;