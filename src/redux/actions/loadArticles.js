
import { ActionConstants } from './../constants/action-types';

const loadArticles = (articles) => {

    return {
        type : ActionConstants.LOAD_ALL_PRODUCT,
        payload : articles
    }
}


export default loadArticles;