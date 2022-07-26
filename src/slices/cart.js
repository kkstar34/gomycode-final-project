import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        loading : false,
        hasErrors : false,
        product : {},
        errMsg : "",
        cart : [],
    }

export const cartSlice = createSlice({
    name : 'Cart',
    initialState,
    reducers : {
        getCart : (state, {payload}) => {
            state.loading = true;
        },

        getCartSuccess : (state, {payload}) => {
            state.loading = false;
            state.cart = payload;
        },

        getCartFailure : (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.errMsg = payload;
        },

      
    }

})


const {getCart, getCartSuccess, getCartFailure} = cartSlice.actions;

export const fetchCart = (limit = 0) => {

    return async (dispatch) => {
        dispatch(getCart());

        try {
                const pdts = []; 
                const response = await fetch(`https://fakestoreapi.com/carts/user/2`);
                const Cart = await response.json();
                for(let i = 0; i < Cart[0].products.length; i++) {
                    const res = await fetch(`https://fakestoreapi.com/products/${Cart[0].products[i].productId}`);
                    let product =await res.json();
                    product = {...product, quantity: Cart[0].products[i].quantity}
                    pdts.push(product);
                }

               const cart = [{...Cart[0], products : [...pdts]}]

                dispatch(getCartSuccess(cart));
        }

        catch (err) {
            dispatch(getCartFailure(err.message));
        }
    }

}



export const deleteProduct =(newCart) => {

    return async (dispatch) => {
        dispatch(getCart());
        try { 
            const response = await fetch('https://fakestoreapi.com/carts/7',{
            method:"PUT",
            body:JSON.stringify(
                newCart
            )
        })
        const cart =await response.json();
        console.log(cart);
        dispatch(getCartSuccess(cart));
        }

        catch (err) {
            dispatch(getCartFailure(err.message));
        }
    }

}




export default cartSlice.reducer;