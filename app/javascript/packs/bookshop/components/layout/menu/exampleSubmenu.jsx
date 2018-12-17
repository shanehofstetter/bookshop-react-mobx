import * as React from "react";
import {Link} from "react-router-dom";
import {route} from "../../../routing/routing";
import {Accordion, Icon, Menu} from "semantic-ui-react";
import * as PropTypes from "prop-types";

export const ExampleSubmenu = props => <React.Fragment>
    <Accordion as={Menu.Item} inverted>
        <Accordion.Title
            active={props.activeIndex === 0}
            content='More'
            index={0}
            onClick={props.onClick}
        />
        <Accordion.Content active={props.activeIndex === 0}>
            <Menu.Item as={Link} to={route("/")}><Icon name='edit'/>Edit Stuff</Menu.Item>
            <Menu.Item as={Link} to={route("/")}><Icon name='tree'/>Save the world</Menu.Item>
        </Accordion.Content>
    </Accordion>
    <Accordion as={Menu.Item} inverted>
        <Accordion.Title
            active={props.activeIndex === 1}
            content='Even More'
            index={1}
            onClick={props.onClick}
        />
        <Accordion.Content active={props.activeIndex === 1}>
            <Menu.Item as={Link} to={route("/")}><Icon name='user'/>Show Profile</Menu.Item>
        </Accordion.Content>
    </Accordion>
</React.Fragment>;

ExampleSubmenu.propTypes = {
    activeIndex: PropTypes.any,
    onClick: PropTypes.func
};