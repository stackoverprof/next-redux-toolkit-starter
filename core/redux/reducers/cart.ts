import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';

export interface State {
	products: any[];
	cart_loaded: boolean;
}

const CartSlice = createSlice({
	name: 'CART',
	initialState: <State>{
		products: [],
		cart_loaded: false,
	},
	reducers: {
		addProduct: (state, action) => {
			// add product logic
			console.log(state, action);
		},
	},
});

export const { addProduct } = CartSlice.actions;
export const useCart = () => useSelector(({ cart }: RootStateType) => cart);
export default CartSlice.reducer;
