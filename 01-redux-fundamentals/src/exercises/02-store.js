import { createStore } from "redux";
import reducer from "./01-reducer";

// 📃 The Redux docs will help with the createStore function: https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store
const store = createStore(reducer);
// ✅ use the createStore function to create a store and pass in the reducer function from the previous lesson
export default store;
// ✅ export the store as the default export
