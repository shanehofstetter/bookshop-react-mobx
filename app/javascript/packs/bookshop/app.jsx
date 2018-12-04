import * as React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { withRouter } from "react-router";
import NavigationBar from "./components/navbar";
import {Container} from "reactstrap";
import AlertTemplate from "./components/alerts/alertTemplate";
import {Provider as AlertProvider} from 'react-alert'
import {WS_ROOT} from "./config";
import {ActionCableProvider} from 'react-actioncable-provider';
import NotFound from "./components/notFound";
import Books from "./components/books";
import {I18nextProvider} from "react-i18next";
import i18n from './i18n';

const App = (props) => {
    i18n.on('languageChanged', (lng) => {
        props.history.push(props.location.pathname.replace(/^\/[a-z]{2}\//, `/${lng}/`));
    });

    return <I18nextProvider i18n={i18n}>
        <ActionCableProvider url={WS_ROOT}>
            <AlertProvider template={AlertTemplate} timeout={5000}>
                <NavigationBar/>
                <Container>
                    <Switch>
                        <Redirect exact from={`${props.match.url}`} to={`${props.match.url}/books`}/>
                        <Route path={`${props.match.url}/books`} component={Books}/>
                        <Route path={`${props.match.url}/*`} component={NotFound}/>
                    </Switch>
                </Container>
            </AlertProvider>
        </ActionCableProvider>
    </I18nextProvider>;
};
export default withRouter(App);