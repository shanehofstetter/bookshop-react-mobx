import * as React from "react";
import {Dropdown, Icon, Image} from "semantic-ui-react";
import {inject, observer} from "mobx-react";


@inject('store')
@observer
class UserMenu extends React.Component {
    render() {
        return <Dropdown item simple className={'right'} trigger={this.renderTrigger()}>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.props.store.authStore.logout()}><Icon name='lock'/>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    }

    renderTrigger() {
        return <React.Fragment>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'} avatar/>
            {this.props.store.configStore.desktop ? <span style={{marginLeft: '5px'}}>{this.props.store.authStore.user.email}</span> : ''}
        </React.Fragment>
    }
}

export default UserMenu;