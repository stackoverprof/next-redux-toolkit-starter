import { addProduct } from '../reducers/cart';

export const addProductToCart = (product) => async (dispatch) => {
	// save product to cocart
	// save product to redux
	dispatch(addProduct({ product }));
};
