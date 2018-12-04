import {distinctById} from "../utils/listUtils";

const initialBookState = {
    isLoading: false,
    books: []
};

export const bookReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case "add_book":
            return {...state, books: distinctById([...state.books, action.book])};
        case "books_loaded":
            return {isLoading: false, books: action.books};
        case "books_loading":
            return {isLoading: true, books: []};
        default:
            return state;
    }
};
