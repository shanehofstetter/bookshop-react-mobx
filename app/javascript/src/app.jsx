import * as React from 'react'
import {withRouter} from "react-router";
import {WS_ROOT} from "./config";
import {ActionCableProvider} from 'react-actioncable-provider';
import i18n from './i18n';
import {inject, observer} from "mobx-react";
import {rootStoreInstance} from "./stores/rootStore";
import {Route, Switch} from "react-router-dom";
import Books from "./components/books/books";
import Login from "./components/auth/login";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard/dashboard";

@inject('store')
@observer
class App extends React.Component {

    constructor(props) {
        super(props);

        i18n.on('languageChanged', (lng) => {
            // needed when language changes via path and to change path when language does not change via path
            rootStoreInstance.configStore.language = lng;
            rootStoreInstance.configStore.changeHistory(this.props.history, this.props.location);
        });
    }

    render() {
        let path = this.props.match.url;
        if (path === '/') {
            path = '';
        }

        return <ActionCableProvider url={WS_ROOT}>
            <Switch>
                <Route exact path={`${this.props.match.url}`} component={Dashboard}/>
                <Route path={`${path}/books`} component={Books}/>
                <Route path={`${path}/login`} component={Login}/>
                <Route path={`${path}/*`} component={NotFound}/>
            </Switch>
        </ActionCableProvider>
    }
}

export default withRouter(App);