import * as React from 'react'
import {withRouter} from "react-router";
import {WS_ROOT} from "./config";
import {ActionCableProvider} from 'react-actioncable-provider';
import i18n from './i18n';
import {inject, observer} from "mobx-react";
import {rootStoreInstance} from "./stores/rootStore";
import {Redirect, Route, Switch} from "react-router-dom";
import Books from "./components/books/books";
import Login from "./components/auth/login";
import NotFound from "./components/notFound";

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
        return <ActionCableProvider url={WS_ROOT}>
            <Switch>
                <Redirect exact from={`${this.props.match.url}`}
                          to={`${this.props.match.url}/books`}/>
                <Route path={`${this.props.match.url}/books`} component={Books}/>
                <Route path={`${this.props.match.url}/login`} component={Login}/>
                <Route path={`${this.props.match.url}/*`} component={NotFound}/>
            </Switch>
        </ActionCableProvider>
    }
}

export default withRouter(App);