import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import {Provider} from "mobx-react";
import DevTool from 'mobx-react-devtools';
import {rootStoreInstance} from "./stores/rootStore";
import {DEFAULT_LANGUAGE} from "./i18n";
import App from './app';
import AppLayout from "./components/layout/layout";
import NotFound from "./components/notFound";

class Root extends React.Component {

    render() {
        return <Provider store={rootStoreInstance}>
            <React.Fragment>
                <DevTool/>
                <Router>
                    <AppLayout>
                        <Switch>
                            <Redirect exact from="/" to={"/" + DEFAULT_LANGUAGE}/>
                            <Route path={`/:locale`} component={App}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </AppLayout>
                </Router>
            </React.Fragment>
        </Provider>
    }
}

export default Root;