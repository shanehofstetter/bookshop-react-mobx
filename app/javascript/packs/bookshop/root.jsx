import {Provider} from "react-redux";
import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import App from "./app";
import NotFound from "./components/notFound";

const loggerMiddleware = createLogger();

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
};

class Root extends React.Component {
    render() {
        return <Provider store={configureStore()}>
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/en" />
                    <Route path='/:locale' component={App}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Router>
        </Provider>
    }
}

export default Root;