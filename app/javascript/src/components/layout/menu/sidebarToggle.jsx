import {Icon, Menu} from "semantic-ui-react";
import * as React from "react";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class SidebarToggle extends React.Component {
    render() {
        return <Menu.Item onClick={() => this.props.store.configStore.toggleSidebar()}>
            <Icon name={'content'}/>
        </Menu.Item>
    }
}

export default SidebarToggle;