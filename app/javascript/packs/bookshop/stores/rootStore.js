import {BookStore} from "./bookStore";
import {ConfigStore} from "./configStore";

export class RootStore {
    constructor() {
        this.bookStore = new BookStore(this);
        this.configStore = new ConfigStore(this);
    }
}
