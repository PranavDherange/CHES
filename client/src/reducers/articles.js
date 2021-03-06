import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_ARTICLE } from '../constants/actionTypes';

const articleReducer = (articles = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_ARTICLE:
            return action.payload;
        case CREATE:
            return [...articles, action.payload];
        case UPDATE:
            return articles.map((article) => article._id === action.payload._id ? action.payload : article);
        case LIKE:    
            return articles.map((article) => article._id === action.payload ? action.payload : article);
        case DELETE:
            return articles.filter((article) => article._id !== action.payload);
        default:
            return articles;
    }
}

export default articleReducer;