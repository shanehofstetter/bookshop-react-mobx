import * as React from "react";
import {NavLink} from "react-router-dom";
import {route} from "../../../routing/routing";
import {Icon, Menu} from "semantic-ui-react";
import {withNamespaces} from "react-i18next";
import {ExampleSubmenu} from "./exampleSubmenu";

class SidebarContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
        this.state = {activeIndex: -1};
    }

    render() {
        const {t} = this.props;
        const {activeIndex} = this.state;
        return <React.Fragment>
            <Menu.Item as={NavLink} exact={true} to={route('/')} onClick={this.handleMenuItemClick}>
                <Icon name='home'/>
                {t('link.home')}
            </Menu.Item>
            <Menu.Item as={NavLink} to={route('/books')} onClick={this.handleMenuItemClick}>
                <Icon name='book'/>
                {t('activerecord.models.book.other')}
            </Menu.Item>
            <ExampleSubmenu activeIndex={activeIndex}
                            onClick={(e, {index}) => this.setState({activeIndex: (index === this.state.activeIndex ? -1 : index)})}/>

        </React.Fragment>;
    }

    handleMenuItemClick(...args) {
        if (this.props.onNavigate) {
            this.props.onNavigate(args)
        }
    }
}

export default withNamespaces('translation')(SidebarContent);