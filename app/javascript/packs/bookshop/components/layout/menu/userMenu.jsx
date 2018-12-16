import * as React from "react";
import {Dropdown} from "semantic-ui-react";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
class UserMenu extends React.Component {
    render(){
        return <Dropdown item simple className={'right'} text={this.props.store.authStore.user.email}>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.props.store.authStore.logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>;
    }
}

export default UserMenu;