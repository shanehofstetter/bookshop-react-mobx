import {computed, observable, runInAction, action} from "mobx";
import {Api} from "../middleware/api";

export class Book {
    id = null;
    @observable title = "";
    @observable description = "";
    @observable isbn = "";
}

export class BookStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable books = [];
    @observable pendingRequests = 0;

    @computed get booksCount() {
        return this.books.length;
    }

    @computed get isLoading() {
        return this.pendingRequests > 0;
    }

    @action addBook(book) {
        if (!this.books.find(b => b.id === book.id)) {
            this.books.push(book);
        }
    }

    @action loadBook(bookId) {
        this.pendingRequests++;
        return Api.books.byId(bookId).then(book => {
            runInAction('loadBookSuccess', () => {
                    if (!this.books.find(b => b.id.toString() === bookId.toString())) {
                        this.books.push(book);
                    }
                    this.pendingRequests--;
                }
            );
            return book;
        }).catch(e => {
            runInAction('loadBookError', () => {
                this.pendingRequests--;
            });
            return Promise.reject(e);
        });
    }

    @action loadBooks() {
        this.pendingRequests++;
        Api.books.all().then(books => {
            runInAction('loadBooksSuccess', () => {
                this.books.replace(books);
                this.pendingRequests--;
            });
        }).catch(e => {
            runInAction('loadBooksError', () => {
                this.pendingRequests--;
            });
            return Promise.reject(e);
        });
    }
}