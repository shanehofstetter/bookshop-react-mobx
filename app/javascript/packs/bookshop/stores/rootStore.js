import {BookStore} from "./bookStore";

export class RootStore {
    constructor() {
        this.bookStore = new BookStore(this);
    }
}
