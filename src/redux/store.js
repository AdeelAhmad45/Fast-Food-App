import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";
import CategorySlice from "../slice/CategorySlice";

const Store = configureStore({
    reducer : {
        cart : CartSlice,
        category: CategorySlice
    },
})

export default Store