import * as React from "react";
import {Icon, Sidebar, Menu} from "semantic-ui-react";
import NavigationBar from "./navbar";
import {inject, observer} from "mobx-react";
import {route} from "../../routing/routing";
import {Link} from "react-router-dom";

@inject('store')
@observer
class AppSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.props.store.configStore.mobile = window.innerWidth < 1024;
    }

    render() {
        return <Sidebar.Pushable>
            {this.props.store.configStore.mobile ? this.renderSidebar() : this.renderFixedMenu()}
            <Sidebar.Pusher style={{marginLeft: this.props.store.configStore.mobile ? '0' : '15rem'}}>
                <NavigationBar/>
                {this.props.children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    }

    renderSidebar() {
        return <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical
                        visible={this.props.store.configStore.sidebarVisible}
                        width='thin'>
            {this.renderSidebarContent()}
        </Sidebar>
    }

    renderFixedMenu() {
        return <Menu vertical inverted
                     style={{position: 'fixed', height: '100%', borderRadius: 0}}>
            <Menu.Item header><Link to={route('/')} style={{color: 'inherit'}}>Bookshop</Link></Menu.Item>
            {this.renderSidebarContent()}
        </Menu>
    }

    renderSidebarContent() {
        return <React.Fragment>
            <Menu.Item as='a' href={route('/')}>
                <Icon name='home'/>
                Home
            </Menu.Item>
        </React.Fragment>;
    }
}

export default AppSidebar;