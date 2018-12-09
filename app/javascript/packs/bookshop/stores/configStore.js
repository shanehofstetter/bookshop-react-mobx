import {observable, action} from "mobx";

export class ConfigStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable language = "";
    @observable sidebarVisible = false;

    @action toggleSidebarVisibility() {
        this.sidebarVisible = !this.sidebarVisible;
    }
}