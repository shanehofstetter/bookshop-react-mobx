import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import App from "./app";
import NotFound from "./components/notFound";
import {Provider} from "mobx-react";
import DevTool from 'mobx-react-devtools';
import {rootStoreInstance} from "./stores/rootStore";

class Root extends React.Component {
    render() {
        return <Provider store={rootStoreInstance}>
            <React.Fragment>
                <DevTool/>
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/en"/>
                        <Route path='/:locale' component={App}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </Router>
            </React.Fragment>
        </Provider>
    }
}

export default Root;