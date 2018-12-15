import * as React from "react";
import {Icon, Sidebar, Menu} from "semantic-ui-react";
import NavigationBar from "./navbar";
import {inject, observer} from "mobx-react";
import {route} from "../../routing/routing";

@inject('store')
@observer
class AppSidebar extends React.Component {
    render() {
        return <Sidebar.Pushable>
            <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical
                     visible={this.props.store.configStore.sidebarVisible}
                     onHide={() => this.props.store.configStore.sidebarVisible = false}
                     width='thin'>
                <Menu.Item as='a' href={route('/')}>
                    <Icon name='home'/>
                    Home
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
                <NavigationBar/>
                {this.props.children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    }
}

export default AppSidebar;