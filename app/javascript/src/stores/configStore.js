import {observable, action, computed} from "mobx";
import i18n, {AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE} from "../i18n";

export class ConfigStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable _language = DEFAULT_LANGUAGE;
    @observable sidebarVisible = false;
    @observable mobile = false;

    @computed get desktop() {
        return !this.mobile;
    }

    @action toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
    }

    get language() {
        return this._language;
    }

    set language(language) {
        language = language.replace(/-[a-zA-Z]{2}/, "");

        if (AVAILABLE_LANGUAGES.indexOf(language) < 0) {
            return;
        }
        if (language === this._language) {
            return;
        }

        this._language = language;
        i18n.changeLanguage(language)
    }

    changeHistory(history, location) {
        history.push(location.pathname.replace(/^\/[a-zA-Z0-9]+\//, `/${this._language}/`));
    }
}