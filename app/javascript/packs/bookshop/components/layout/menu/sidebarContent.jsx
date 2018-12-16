import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import {route} from "../../../routing/routing";
import {Icon, Menu} from "semantic-ui-react";
import {withNamespaces} from "react-i18next";

class SidebarContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    render() {
        const {t} = this.props;
        return <React.Fragment>
            <Menu.Item as={NavLink} exact={true} to={route('/')} onClick={this.handleMenuItemClick}>
                <Icon name='home'/>
                {t('link.home')}
            </Menu.Item>
            <Menu.Item as={NavLink} to={route('/books')} onClick={this.handleMenuItemClick}>
                <Icon name='book'/>
                {t('activerecord.models.book.other')}
            </Menu.Item>
        </React.Fragment>;
    }

    handleMenuItemClick(...args) {
        if (this.props.onNavigate) {
            this.props.onNavigate(args)
        }
    }
}

export default withNamespaces('translation')(SidebarContent);