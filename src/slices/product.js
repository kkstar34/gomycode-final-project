import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        loading : false,
        hasErrors : false,
        product : {},
        errMsg : "",
        products : [],
    }

export const productSlice = createSlice({
    name : 'Product',
    initialState,
    reducers : {
        getProducts : (state, {payload}) => {
            state.loading = true;
        },

        getProductsSuccess : (state, {payload}) => {
            state.loading = false;
            state.products = payload;
        },

        getProductsFailure : (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.errMsg = payload;
        },

        getProduct : (state, {payload}) => {
            state.loading = true;
        },

        getProductSuccess : (state, {payload}) => {
            state.loading = false;
            state.product = payload;
        },

        getProductFailure : (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.errMsg = payload;
        }
    }

})


const {getProducts, getProductsSuccess, getProductsFailure, getProduct, getProductSuccess, getProductFailure} = productSlice.actions;

export const fetchProcucts = (limit = 0) => {

    return async (dispatch) => {
        dispatch(getProducts());

        try {
            
            if(limit> 0){
                const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
                const products = await response.json();
                dispatch(getProductsSuccess(products));
            }else{
                const response = await fetch(`https://fakestoreapi.com/products`);
                const products = await response.json();
                dispatch(getProductsSuccess(products));
            }
          
        }

        catch (err) {
            dispatch(getProductsFailure(err.message));
        }
    }

}

export const fetchProcuct = (articleId) => {

    return async (dispatch) => {
        dispatch(getProduct());

        try {
            const response = await fetch(`https://fakestoreapi.com/products/${articleId}`);
            const products = await response.json();
            dispatch(getProductSuccess(products));
        }

        catch (err) {
            dispatch(getProductFailure(err.message));
        }
    }

}




export default productSlice.reducer;