import React from 'react'
import {Route, Redirect, withRouter} from 'react-router-dom'
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class PrivateRoute extends React.Component {

    render() {
        const {store, component: Component, ...rest} = this.props;
        const isAuthenticated = store.authStore.authenticated;

        return <Route {...rest} render={props => this.renderRoute(Component, props, isAuthenticated)}/>
    }

    renderRoute(Component, props, authenticated) {
        if (authenticated) {
            return <Component {...props}/>;
        }

        return <Redirect to={{
            pathname: '/' + this.props.store.configStore.language + '/login',
            state: {from: props.location}
        }}/>
    }
}

export default withRouter(PrivateRoute);