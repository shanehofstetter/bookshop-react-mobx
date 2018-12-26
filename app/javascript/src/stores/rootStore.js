import {BookStore} from "./bookStore";
import {ConfigStore} from "./configStore";
import {AuthStore} from "./authStore";

export class RootStore {
    constructor() {
        this.bookStore = new BookStore(this);
        this.configStore = new ConfigStore(this);
        this.authStore = new AuthStore(this);
    }
}

export const rootStoreInstance = new RootStore();