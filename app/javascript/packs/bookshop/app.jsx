import * as React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import {withRouter} from "react-router";
import NavigationBar from "./components/navbar";
import AlertTemplate from "./components/alerts/alertTemplate";
import {Provider as AlertProvider} from 'react-alert'
import {WS_ROOT} from "./config";
import {ActionCableProvider} from 'react-actioncable-provider';
import NotFound from "./components/notFound";
import Books from "./components/books";
import {I18nextProvider} from "react-i18next";
import i18n from './i18n';
import {Container, Icon, Menu, Sidebar} from "semantic-ui-react";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        i18n.on('languageChanged', (lng) => {
            this.props.history.push(this.props.location.pathname.replace(/^\/[a-z]{2}\//, `/${lng}/`));
        });

        return <I18nextProvider i18n={i18n}>
            <ActionCableProvider url={WS_ROOT}>
                <AlertProvider template={AlertTemplate} timeout={5000} zIndex={150}>
                    <Sidebar.Pushable>
                        <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical
                                 visible={this.props.store.configStore.sidebarVisible}
                                 onHide={() => this.props.store.configStore.sidebarVisible = false}
                                 width='thin'>
                            <Menu.Item as='a' href={'/'}>
                                <Icon name='home'/>
                                Home
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher>
                            <NavigationBar/>
                            <Container style={{marginTop: '7em'}}>
                                <Switch>
                                    <Redirect exact from={`${this.props.match.url}`}
                                              to={`${this.props.match.url}/books`}/>
                                    <Route path={`${this.props.match.url}/books`} component={Books}/>
                                    <Route path={`${this.props.match.url}/*`} component={NotFound}/>
                                </Switch>
                            </Container>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </AlertProvider>
            </ActionCableProvider>
        </I18nextProvider>;
    }
}

export default withRouter(App);