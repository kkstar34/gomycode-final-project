
import { ActionConstants } from './../constants/action-types';

const initialState = {
    articles: [{

 
        id : 1,
        title: 'Article',
        price : 20,
        description: 'Desciption',
        image : ''

    }
    ],
};

const productReducers= (state = initialState, action) =>{
    

    switch(action.type){

        case ActionConstants.LOAD_ALL_PRODUCT : {
            return {
                ...state,
                articles : action.payload
            }
        }

        default : return state;
    }


}

export default  productReducers;


