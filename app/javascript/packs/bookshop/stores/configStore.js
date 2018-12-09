import {observable} from "mobx";
import i18n from "../i18n";

export class ConfigStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable _language = "en";
    @observable _sidebarVisible = false;

    get sidebarVisible() {
        return this._sidebarVisible;
    }

    set sidebarVisible(visible) {
        this._sidebarVisible = visible;
    }

    get language() {
        return this._language;
    }

    set language(language) {
        if (language === this._language) {
            return;
        }
        this._language = language;
        i18n.changeLanguage(language)
    }
}