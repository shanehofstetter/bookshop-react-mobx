import * as React from 'react';
import {withNamespaces} from "react-i18next";
import {Container, Dropdown, Icon, Menu} from "semantic-ui-react";
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";
import {route} from "../routing/routing";

@inject('store')
@observer
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const i18n = this.props.i18n;

        return (
            <div>
                <Menu style={{borderRadius: 0, border: 'none'}}>
                    <Menu.Item onClick={() => this.props.store.configStore.sidebarVisible = true}><Icon name={'content'}/></Menu.Item>
                    <Container>
                        <Menu.Item header><Link to={'/'} style={{color: 'inherit'}}>Bookshop</Link></Menu.Item>
                        <Menu className={'right'} style={{borderRadius: 0, border: 'none', boxShadow: 'none'}}>
                            { this.props.store.authStore.authenticated ? this.renderUserMenu() : this.renderLoginMenu() }
                            <Dropdown item simple className={'right'} text={i18n.language}>
                                <Dropdown.Menu>
                                    {
                                        ['de', 'en'].map(locale => {
                                            return <Dropdown.Item key={locale}
                                                                  onClick={() => this.props.store.configStore.language = locale}>{locale}</Dropdown.Item>;
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </Container>
                </Menu>
            </div>
        );
    }

    renderUserMenu(){
        return <Dropdown item simple className={'right'} text={this.props.store.authStore.user.email}>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.props.store.authStore.logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    }

    renderLoginMenu(){
        return <Menu.Item><Link to={route('/login')} style={{color: 'inherit'}}>Login</Link></Menu.Item>
    }
}

export default withNamespaces('translation')(NavigationBar);