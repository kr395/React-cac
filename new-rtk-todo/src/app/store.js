// Use This file allways for RTK

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";


export const store = configureStore({
  reducer: todoReducer
})
