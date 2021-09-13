import { configureStore, Reducer } from '@reduxjs/toolkit';
import cartReducer, { State as CartStateType } from './reducers/cart';

const store = configureStore({
	reducer: <RootStateType>{
		cart: cartReducer,
	},
});

export default store;

export interface RootStateType {
	cart: Reducer<CartStateType>;
}
