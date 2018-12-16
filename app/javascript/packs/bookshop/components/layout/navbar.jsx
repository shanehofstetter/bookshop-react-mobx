import * as React from 'react';
import {withNamespaces} from "react-i18next";
import {Container, Menu} from "semantic-ui-react";
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";
import {route} from "../../routing/routing";
import SidebarToggle from "./menu/sidebarToggle";
import LanguageDropdown from "./menu/languageDropdown";
import UserMenu from "./menu/userMenu";
import HomeMenuItem from "./menu/homeMenuItem";

@inject('store')
@observer
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu style={{borderRadius: 0, border: 'none'}}>
                    {this.props.store.configStore.mobile ? <SidebarToggle/> : ''}
                    <Container style={{width: '100%'}}>
                        {this.props.store.configStore.mobile ? <HomeMenuItem/> : ''}
                        <Menu className={'right'} style={{borderRadius: 0, border: 'none', boxShadow: 'none'}}>
                            {this.props.store.authStore.authenticated ? <UserMenu/> : this.renderLoginMenu()}
                            <LanguageDropdown/>
                        </Menu>
                    </Container>
                </Menu>
            </div>
        );
    }

    renderLoginMenu() {
        return <Menu.Item><Link to={route('/login')} style={{color: 'inherit'}}>Login</Link></Menu.Item>
    }
}

export default withNamespaces('translation')(NavigationBar);