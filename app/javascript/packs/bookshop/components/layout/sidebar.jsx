import * as React from "react";
import {Sidebar, Menu} from "semantic-ui-react";
import NavigationBar from "./navbar";
import {inject, observer} from "mobx-react";
import HomeMenuItem from "./menu/homeMenuItem";
import SidebarContent from "./menu/sidebarContent";

@inject('store')
@observer
class AppSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.props.store.configStore.mobile = window.innerWidth < 1024;
        this.closeSidebar = this.closeSidebar.bind(this);
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
            <SidebarContent onNavigate={this.closeSidebar}/>
        </Sidebar>
    }

    renderFixedMenu() {
        return <Menu vertical inverted
                     style={{position: 'fixed', height: '100%', borderRadius: 0}}>
            <HomeMenuItem/>
            <SidebarContent/>
        </Menu>
    }

    closeSidebar() {
        if (this.props.store.configStore.mobile) {
            this.props.store.configStore.sidebarVisible = false;
        }
    }
}

export default AppSidebar;