import {Api} from "../middleware/api";

export const add = (book) => {
    return {type: 'add_book', book};
};

export const load = () => {
    return (dispatch) => {
        dispatch(loading());

        Api.books.all().then(books => {
            dispatch(loaded(books));
        })
    }
};

export const loading = () => {
    return {type: 'books_loading'};
};

export const loaded = (books) => {
    return {type: 'books_loaded', books};
};
