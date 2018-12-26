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

        this.closeSidebar = this.closeSidebar.bind(this);
        this.updateLayoutMode = this.updateLayoutMode.bind(this);
    }

    render() {
        return <React.Fragment>
            {this.props.store.configStore.mobile ? this.renderMobile() : this.renderDesktop()}
        </React.Fragment>
    }

    renderDesktop() {
        return <React.Fragment>
            {this.renderFixedMenu()}
            <div className={'desktop-content-wrapper'}>
                <NavigationBar/>
                {this.props.children}
            </div>
        </React.Fragment>
    }

    renderMobile() {
        return <Sidebar.Pushable>
            {this.renderSidebar()}
            <NavigationBar/>
            <Sidebar.Pusher>
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
        return <Menu className={'fixed-sidebar'} vertical inverted>
            <HomeMenuItem/>
            <SidebarContent/>
        </Menu>
    }

    closeSidebar() {
        if (this.props.store.configStore.mobile) {
            this.props.store.configStore.sidebarVisible = false;
        }
    }

    componentDidMount() {
        this.updateLayoutMode();
        window.addEventListener('resize', this.updateLayoutMode);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateLayoutMode);
    }

    updateLayoutMode() {
        this.props.store.configStore.mobile = window.innerWidth < 768;
    }
}

export default AppSidebar;