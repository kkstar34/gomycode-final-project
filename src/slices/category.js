import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        loading : false,
        hasErrors : false,
        articles : [],
        errMsg : "",
        categories : [],
    }

export const categorieslice = createSlice({
    name : 'Category',
    initialState,
    reducers : {
        getcategories : (state, {payload}) => {
            state.loading = true;
        },

        getcategoriesSuccess : (state, {payload}) => {
            state.loading = false;
            state.categories = payload;
        },

        getcategoriesFailure : (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.errMsg = payload;
        },

        getcategory : (state, {payload}) => {
            state.loading = true;
        },

        getcategoriesuccess : (state, {payload}) => {
            state.loading = false;
            state.articles = payload;
        },

        getcategoryFailure : (state, {payload}) => {
            state.loading = false;
            state.hasErrors = true;
            state.errMsg = payload;
        }
    }

})


const {getcategories, getcategoriesSuccess, getcategoriesFailure, getcategory, getcategoriesuccess, getcategoryFailure} = categorieslice.actions;

export const fetchCategories = () => {

    return async (dispatch) => {
        dispatch(getcategories());

        try {
                const response = await fetch(`https://fakestoreapi.com/products/categories`);
                const categories = await response.json();
                dispatch(getcategoriesSuccess(categories));
           
        }

        catch (err) {
            dispatch(getcategoriesFailure(err.message));
        }
    }

}

export const fetchCategory = (categorySlug) => {

    return async (dispatch) => {
        dispatch(getcategory());

        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${categorySlug}`);
            const categories = await response.json();
            dispatch(getcategoriesuccess(categories));
        }

        catch (err) {
            dispatch(getcategoryFailure(err.message));
        }
    }

}




export default categorieslice.reducer;