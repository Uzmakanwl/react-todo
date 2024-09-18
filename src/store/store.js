// y store.js ha drucer use hot dispatch  reducer ma arrow function hoty h a
// user function dispatch krwa rhy h wo disatch kr task daly ga to action hoga  kam krny  bad jo add km hoga input value user dy rha hha ksath to action.paload


import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from "./slice";
export let store=configureStore({
    reducer:TodoReducer,
})