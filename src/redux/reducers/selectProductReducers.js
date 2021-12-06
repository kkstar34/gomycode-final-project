import {ActionConstants} from './../constants/action-types';

const selectProductReducers = (state, {type, payload}) =>{
    switch(type) {
        case ActionConstants.SELECT_SINGLE_PRODUCT: {
            return payload
        }

        default: return {}
    }
}

export default selectProductReducers;