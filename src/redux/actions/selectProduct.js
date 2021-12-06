import { ActionConstants } from "../constants/action-types"


const selectProduct = (product) =>{
    return {
        type : ActionConstants.SELECT_SINGLE_PRODUCT,
        payload : product
    }
}

export default selectProduct;